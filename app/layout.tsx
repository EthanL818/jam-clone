
import './globals.css'
import type { Metadata } from 'next'
import { ChakraProvider } from '@chakra-ui/react'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Sky } from '@/components/layout/components/Sky/sky'

export const metadata: Metadata = {
  title: 'Jet Aircraft Museum',
  description: 'Jet Aircraft Museum Web',
}
const pages = ["about", "events", "collection", "flights", "education", "virtual tour", "join"]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body>
        <ChakraProvider>
          <Header pages={pages} />
          <Sky />

          <div className="mx-2 my-5 sl-screen:mx-auto sl-screen:max-w-[1280px]">
            {children}
          </div>
          <Footer pages={pages} />
        </ChakraProvider>
      </body>
    </html>
  )
}
