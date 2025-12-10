import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Configure base path for GitHub Pages deployment
  // IMPORTANT: Update this to match your repository name!
  // Example: if your repo is github.com/username/life-dashboard
  //          then set base: '/life-dashboard/'
  // For custom domain or root domain, use base: '/'
  // Default is set to '/life-dashboard/' - CHANGE THIS!
  base: process.env.NODE_ENV === 'production' ? '/life-dashboard/' : '/',
})
