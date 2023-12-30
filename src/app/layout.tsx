import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Bot from '@/components/Bot'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Roofing & Painting | Demo Bot',
  description: 'A demo app to experiment bot.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Bot/>
      </body>
    </html>
  )
}
