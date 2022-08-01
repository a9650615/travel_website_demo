import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['**/*.{jsx,js,css,html}'],
    exclude: ['node_modules', '.git'],
  },
  theme: {
    extend: {
      fontSize: {
        'title': '1.5rem',
      },
      textShadow: {
        'default': '0px 4px 8px rgba(0, 0, 0, 0.25)'
      },
      boxShadow: {
        'default': '0px 4px 8px rgba(0, 0, 0, 0.25)'
      }
    }
  }
})
