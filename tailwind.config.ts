import type { Config } from 'tailwindcss'
const { nextui } = require("@nextui-org/react")

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'text-gradient-v1': 'linear-gradient(91deg, #172554 34.15%, #1D4ED8 98.75%)',
        'text-gradient-v2': 'linear-gradient(90deg, #1D4ED8 30.4%, #3B82F6 105.01%);',
        'text-gradient-v3': 'linear-gradient(90deg, #3B82F6 65.92%, #60A5FA 104.62%)',
        'text-gradient-v4': 'linear-gradient(90deg, #1E40AF 60.03%, #3B82F6 104.46%)',
        'text-gradient-v5': 'linear-gradient(0deg, #1E3A8A 4.17%, #1D4ED8 39.06%)',
        'text-gradient-v6': 'linear-gradient(90deg, #2563EB 22.95%, #60A5FA 77.42%)',

        'social-media-gradient': 'linear-gradient(135deg, #1E3A8A 15.55%, #1D4ED8 100%)',
      },
    },
  },
  colors: {
    'neutral': {
      50: '#E8EAED',
      100: '#D8DBE1',
      200: '#C4C9D2',
      300: '#B1B8C4',
      400: '#9DA6B5',
      500: '#8A94A6',
      600: '#737B8A',
      700: '#5C636F',
      800: '#454A53',
      900: '#2E3137',
    },
    'support': {
      'white': {
        100: '#FFFFFF',
        200: '#CCCCCC',
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "#FFFFFF",
            foreground: "#454A53",
            primary: {
              50: "#1E3A8A",
              100: "#1E40AF",
              200: "#1D4ED8",
              300: "#2563EB",
              400: "#3B82F6",
              500: "#60A5FA",
              600: "#93C5FD",
              700: "#BFDBFE",
              800: "#DBEAFE",
              900: "#EFF6FF",
              DEFAULT: "#1E40AF",
              foreground: "#DBEAFE",
            },
            focus: "#1D4ED8",
          },
        },
        dark: {
          colors: {
            background: "#0F172A",
            foreground: "#D8DBE1",
            primary: {
              50: "#0F172A",
              100: "#1e293b",
              200: "#334155",
              300: "#475569",
              400: "#64748b",
              500: "#94a3b8",
              600: "#cbd5e1",
              700: "#e2e8f0",
              800: "#f1f5f9",
              900: "#f8fafc",
              DEFAULT: "#1E40AF",
              foreground: "#DBEAFE",
            },
            focus: "#1D4ED8",
          },
        },
      }
    }),
  ],
}
export default config
