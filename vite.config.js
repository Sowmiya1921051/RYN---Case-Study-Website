import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        // michroma: ['"Michroma"', 'sans-serif'],
        oswald: [ 'serif'], 
        orbitron: ['Orbitron', 'Arial', 'sans-serif'], 
        michroma: ['Michroma', 'sans-serif'],
        sharetech: ['Share Tech', 'sans-serif'],
      },
    },
  },
  plugins: [
    tailwindcss(),
    react()
  ],
})
