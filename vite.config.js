import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://port-0-movieit-backend-fhrtg2blubc29w6.sel5.cloudtype.app/'
    }
  }
})
