import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SHASTRA 2024 - College Tech Fest',
  description: 'The premier techno-managerial festival showcasing innovation and creativity',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-[90px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
