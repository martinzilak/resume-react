import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { renderPdf } from './scripts/render-pdf.mjs'

// The PDF is only generated into dist/ by the build, so in dev it is rendered from the running page on request.
// Otherwise its URL would fall back to index.html, downloading a broken PDF.
const devPdf = (): Plugin => ({
  name: 'dev-pdf',
  apply: 'serve',
  configureServer: (server) => {
    server.middlewares.use(async (req, res, next) => {
      if (!req.url?.endsWith('.pdf')) {
        return next()
      }

      try {
        const pdf = await renderPdf(server.resolvedUrls!.local[0])
        if (!req.url.endsWith(`/${pdf.fileName}`)) {
          return next()
        }

        res.setHeader('Content-Type', 'application/pdf')
        res.end(pdf.bytes)
      } catch (error) {
        next(error)
      }
    })
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), devPdf()],
})
