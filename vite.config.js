import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Tugas4 from './src/components/Tugas4.vue'



// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  build:{
    rollupOptions:{
      input:{
        Tugas4:"Tugas4.html",
      }
    }
  }

})
