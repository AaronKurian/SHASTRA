import localFont from 'next/font/local';
import './globals.css';
import AOSInit from '@/utils/AOSInit';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const mechanismo = localFont({
  src: "../fonts/Mechanismo.ttf",
  variable: "--font-mechanismo"
})


export const metadata = {
  title: 'SHASTRA 2024 - College Tech Fest',
  description: 'The premier techno-managerial festival showcasing innovation and creativity',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${mechanismo.variable} `}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Huninn&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-slate-950 font-huninn text-gray-200">
        <Navbar />
        <AOSInit />

        <main className="pt-[90px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
