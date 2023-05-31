import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
    base: '/mobile/',
    build: {
        outDir: 'mobile'
    },
    plugins: [vue()],
    resolve: {
        alias: [
            {
                find: '@',
                replacement: resolve(__dirname, 'src')
            },
            {
                find: 'components',
                replacement: resolve(__dirname, 'src/components')
            }
        ]
    }
})
