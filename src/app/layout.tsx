import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '@/app/components/Header'
import { Analytics } from '@vercel/analytics/react'
import Footer from '@/app/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.location-cabinet-sceaux.fr/'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Location espace conusltation Sceaux',
    url: 'https://www.location-cabinet-sceaux.fr/',
    siteName: 'Location espace conusltation Sceaux',
    images: '/cabinet-houdan-paysage-1.jpg',
    locale: 'fr_FR',
    type: 'website',
  },
  title: 'Location espace conusltation Sceaux',
  description:
    "Cabinet pluridisciplinaire à Sceaux offrant des bureaux équipés pour les professionnels. Emplacement central, idéal pour psychologues, thérapeutes et experts en bien-être. Réservez dès aujourd'hui.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
