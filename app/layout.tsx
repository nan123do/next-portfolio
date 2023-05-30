import Script from 'next/script'
import './globals.css'
import 'aos/dist/aos.css'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export const metadata = {
  title: 'Nando Carera',
  description: 'Portfolio Nando Carera',
  icons: {
    icon: '/title.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Script src="https://unpkg.com/aos@next/dist/aos.js" />
      <Script src="assets/js/main.js" />
    </html>
  )
}
