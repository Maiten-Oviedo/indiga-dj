// Exporta /presskit-pdf a public/presskit/indiga-presskit.pdf.
// Requiere el dev server corriendo (astro dev). Uso: pnpm pdf [url]
import { chromium } from 'playwright'
import { mkdir } from 'node:fs/promises'

const url = process.argv[2] ?? 'http://localhost:4321/presskit-pdf'
const out = 'public/presskit/indiga-presskit.pdf'

const browser = await chromium.launch()
const page = await browser.newPage()
await page.goto(url, { waitUntil: 'networkidle' })
await page.evaluate(() => document.fonts.ready)
await mkdir('public/presskit', { recursive: true })
await page.pdf({ path: out, printBackground: true, preferCSSPageSize: true })
await browser.close()

console.log(`PDF generado: ${out}`)
