import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container } from '@/components/ui/container';
import { Loader2 } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';
import Navbar from '@/components/Navbar';

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuthCallback = async () => {
      // The session is automatically handled by the Supabase client library.
      // We just need to wait for it to be set and then redirect.
      const { data: { session }, error } = await supabase.auth.getSession();
        
        if (error) {
        toast.error(error.message || 'Authentication failed. Please try again.');
        navigate('/auth', { replace: true });
          return;
        }

      if (session) {
        toast.success('Successfully logged in!');
          
        // This message can be picked up by a content script in a browser extension
          window.postMessage({
            type: 'Sift_AUTH_SUCCESS',
          payload: {
            accessToken: session.access_token,
            refreshToken: session.refresh_token,
            user: session.user,
          }
        }, window.location.origin);
          
        // Redirect to a protected route or dashboard
            navigate('/', { replace: true });
      }
      // If there's no session and no error, the listener will handle it.
    };
    
    // The onAuthStateChange listener is another good way to handle this,
    // but a direct call is often sufficient for the callback page.
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN' && session) {
        subscription?.unsubscribe();
        handleAuthCallback();
      } else if (event === 'TOKEN_REFRESHED' && !session) {
        subscription?.unsubscribe();
        toast.error('Authentication failed. Please try again.');
        navigate('/auth', { replace: true });
      } else if (event === 'SIGNED_OUT') {
        subscription?.unsubscribe();
        navigate('/auth', { replace: true });
      }
    });

    // Initial check in case the event was missed
    handleAuthCallback();

    return () => {
      subscription?.unsubscribe();
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Container className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="w-12 h-12 text-rhythm-blue animate-spin" />
          <h1 className="text-2xl font-semibold text-foreground">
            Finalizing your login...
          </h1>
          <p className="text-muted-foreground">
            Please wait a moment. You will be redirected shortly.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default AuthCallback; 