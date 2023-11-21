import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { UserNameProvider } from '@/context/UserName'
import { SongsProvider } from '@/context/FavoriteSongs'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Welcome to Trybe Tunes!',
  description: 'Description about the project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <UserNameProvider>
          <SongsProvider>
            {children}
          </SongsProvider>
        </UserNameProvider>
      </body>
    </html>
  )
}
