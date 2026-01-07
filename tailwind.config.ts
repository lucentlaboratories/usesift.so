import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'serif-hero': ['Source Serif Pro', 'serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				rhythm: {
					blue: '#3b82f6',
					lavender: '#9b87f5',
					coral: '#F97316',
					'soft-lavender': '#E5DEFF',
					'soft-coral': '#FDE1D3',
				},
				// Custom scrollytelling colors
				highlight: {
					DEFAULT: 'hsl(var(--highlight))',
					foreground: 'hsl(var(--highlight-foreground))'
				},
				inactive: 'hsl(var(--inactive))',
				'phone-bg': 'hsl(var(--phone-bg))',
				'phone-border': 'hsl(var(--phone-border))',
				'message-bg': 'hsl(var(--message-bg))',
				'message-text': 'hsl(var(--message-text))'
			},
			backgroundImage: {
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-bg': 'var(--gradient-bg)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { 
						height: '0',
						opacity: '0'
					},
					to: { 
						height: 'var(--radix-accordion-content-height)',
						opacity: '1'
					}
				},
				'accordion-up': {
					from: { 
						height: 'var(--radix-accordion-content-height)',
						opacity: '1'
					},
					to: { 
						height: '0',
						opacity: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translate3d(0, 0, 0)' },
					'50%': { transform: 'translate3d(0, -10px, 0)' },
				},
				'pulse-glow': {
					'0%, 100%': { 
						opacity: '0.8',
						boxShadow: '0 0 20px rgba(96, 165, 250, 0.3)'
					},
					'50%': { 
						opacity: '1',
						boxShadow: '0 0 30px rgba(96, 165, 250, 0.6)'
					},
				},
				'wave': {
					'0%, 100%': { transform: 'scaleY(1)' },
					'50%': { transform: 'scaleY(0.5)' },
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translate3d(0, 20px, 0)'
					},
					'100%': {
						opacity: '1',
						transform: 'translate3d(0, 0, 0)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.3s ease-in-out',
				'accordion-up': 'accordion-up 0.3s ease-in-out',
				'float': 'float 8s cubic-bezier(0.4, 0, 0.2, 1) infinite',
				'pulse-glow': 'pulse-glow 3s cubic-bezier(0.4, 0, 0.2, 1) infinite',
				'wave-1': 'wave 2s ease-in-out infinite',
				'wave-2': 'wave 2s ease-in-out infinite 0.3s',
				'wave-3': 'wave 2s ease-in-out infinite 0.5s',
				'wave-4': 'wave 2s ease-in-out infinite 0.7s',
				'fade-in-up': 'fade-in-up 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards',
				'scale-in': 'scale-in 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards',
			}
		}
	},
	plugins: [tailwindcssAnimate],
} satisfies Config;
