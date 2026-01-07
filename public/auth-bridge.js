/**
 * Sift Auth Bridge
 * Automatically detects authentication on Sift.app and syncs with browser extension
 *
 * Usage: Include this script in your website's HTML
 * <script src="/auth-bridge.js"></script>
 */

(function () {
  "use strict";

  // Configuration
  const CONFIG = {
    extensionId: "Sift-extension", // Replace with actual extension ID
    retryInterval: 1000, // Check for auth every 1 second
    maxRetries: 30, // Stop checking after 30 seconds
    debug: false,
  };

  let retryCount = 0;
  let isMonitoring = false;

  // Debug logging
  function log(...args) {
    if (CONFIG.debug) {
      console.log("[Sift Auth Bridge]", ...args);
    }
  }

  // Send token to extension
  function sendTokenToExtension(token, user) {
    log("Sending token to extension:", {
      token: token.substring(0, 20) + "...",
      user,
    });

    // Method 1: PostMessage to current window (for same-origin scenarios)
    window.postMessage(
      {
        type: "Sift_AUTH_SUCCESS",
        token: token,
        user: user,
        timestamp: Date.now(),
        source: "auth-bridge",
      },
      window.location.origin
    );

    // Method 2: Try to communicate with extension directly (if available)
    if (window.chrome && window.chrome.runtime) {
      try {
        window.chrome.runtime.sendMessage(
          CONFIG.extensionId,
          {
            type: "Sift_AUTH_SUCCESS",
            token: token,
            user: user,
            timestamp: Date.now(),
            source: "website",
          },
          function (response) {
            if (chrome.runtime.lastError) {
              log("Extension communication failed:", chrome.runtime.lastError);
            } else {
              log("Extension response:", response);
            }
          }
        );
      } catch (error) {
        log("Chrome runtime not available or extension not installed:", error);
      }
    }

    // Method 3: LocalStorage for persistence
    try {
      localStorage.setItem("Sift_auth_token", token);
      localStorage.setItem("Sift_auth_user", JSON.stringify(user));
      localStorage.setItem("Sift_auth_timestamp", Date.now().toString());
      log("Stored auth data in localStorage");
    } catch (error) {
      log("Failed to store in localStorage:", error);
    }
  }

  // Check for Supabase auth
  function checkSupabaseAuth() {
    log("Checking for Supabase auth...");

    // Look for Supabase client in window object
    const supabaseInstances = [
      window.supabase,
      window._supabase,
      window.supabaseClient,
      // Check for common Supabase patterns
      ...Object.keys(window)
        .filter((key) => key.toLowerCase().includes("supabase"))
        .map((key) => window[key]),
    ].filter(Boolean);

    for (const supabase of supabaseInstances) {
      if (supabase && typeof supabase.auth === "object") {
        log("Found Supabase instance:", supabase);

        // Try to get current session
        if (typeof supabase.auth.getSession === "function") {
          supabase.auth
            .getSession()
            .then(({ data: { session }, error }) => {
              if (session && session.access_token) {
                log("Found active Supabase session");
                sendTokenToExtension(session.access_token, session.user);
                stopMonitoring();
              }
            })
            .catch((error) => {
              log("Error getting Supabase session:", error);
            });
        }

        // Set up auth state change listener
        if (typeof supabase.auth.onAuthStateChange === "function") {
          log("Setting up Supabase auth state change listener");
          supabase.auth.onAuthStateChange((event, session) => {
            log("Supabase auth state changed:", event, session);
            if (event === "SIGNED_IN" && session && session.access_token) {
              sendTokenToExtension(session.access_token, session.user);
              stopMonitoring();
            }
          });
        }

        return true; // Found Supabase
      }
    }

    return false; // No Supabase found
  }

  // Check for manual auth integration
  function checkManualAuth() {
    log("Checking for manual auth integration...");

    // Check if auth data was manually set
    const authToken = localStorage.getItem("Sift_manual_token");
    const authUser = localStorage.getItem("Sift_manual_user");

    if (authToken && authUser) {
      try {
        const user = JSON.parse(authUser);
        log("Found manual auth data");
        sendTokenToExtension(authToken, user);
        // Clean up manual auth data
        localStorage.removeItem("Sift_manual_token");
        localStorage.removeItem("Sift_manual_user");
        stopMonitoring();
        return true;
      } catch (error) {
        log("Error parsing manual auth data:", error);
      }
    }

    return false;
  }

  // Stop monitoring
  function stopMonitoring() {
    log("Stopping auth monitoring");
    isMonitoring = false;
  }

  // Main monitoring function
  function monitorAuth() {
    if (!isMonitoring) return;

    retryCount++;
    log(`Auth check attempt ${retryCount}/${CONFIG.maxRetries}`);

    // Check different auth methods
    const foundAuth = checkSupabaseAuth() || checkManualAuth();

    if (!foundAuth && retryCount < CONFIG.maxRetries) {
      setTimeout(monitorAuth, CONFIG.retryInterval);
    } else if (retryCount >= CONFIG.maxRetries) {
      log("Max retries reached, stopping auth monitoring");
      stopMonitoring();
    }
  }

  // Start monitoring when page loads
  function startMonitoring() {
    if (isMonitoring) return;

    log("Starting auth monitoring...");
    isMonitoring = true;
    retryCount = 0;

    // Start monitoring immediately
    monitorAuth();
  }

  // Listen for manual auth messages
  window.addEventListener("message", function (event) {
    if (event.data && event.data.type === "Sift_MANUAL_AUTH") {
      log("Received manual auth message:", event.data);
      if (event.data.token && event.data.user) {
        sendTokenToExtension(event.data.token, event.data.user);
        stopMonitoring();
      }
    }
  });

  // Initialize when DOM is ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", startMonitoring);
  } else {
    startMonitoring();
  }

  // Also start monitoring when window loads (fallback)
  window.addEventListener("load", function () {
    if (!isMonitoring) {
      startMonitoring();
    }
  });

  log("Auth bridge initialized");
})();
