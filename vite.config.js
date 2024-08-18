import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        secretSantaEvent: resolve(__dirname, 'src/pages/secret-santa-event.html'),
        collaborativePlaylist: resolve(__dirname, 'src/pages/collaborative-playlist.html'),
        storyTogether: resolve(__dirname, 'src/pages/story-together.html'),
        memoryVault: resolve(__dirname, 'src/pages/memory-vault.html'),
        characterCreator: resolve(__dirname, 'src/pages/character-creator.html'),
      }
    }
  }
})
