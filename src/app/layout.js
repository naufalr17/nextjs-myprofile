import { Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';

import './globals.css'

const plusjs = Plus_Jakarta_Sans({ subsets: ['latin'] })

export const metadata = {
  title: `Naufal's Profile`,
  description: 'My Awesome NextJS Profile Web',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={plusjs.className}>{children}
      <Analytics/></body>
    </html>
  )
}
