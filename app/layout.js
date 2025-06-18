import localFont from 'next/font/local';
import './globals.css';
import AOSInit from '@/utils/AOSInit';
import 'aos/dist/aos.css';
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Icon from '@/assets/icon.png';

const mechanismo = localFont({
  src: "../fonts/Mechanismo.ttf",
  variable: "--font-mechanismo"
})

export const metadata = {
  title: 'SHASTRA 2025 - College Tech Fest',
  description: 'The premier techno-managerial festival showcasing innovation and creativity',
  icons: {
    icon: Icon.src,
    shortcut: Icon.src,
    apple: Icon.src,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${mechanismo.variable} `}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Huninn&display=swap" rel="stylesheet" />
        <link rel="icon" href={Icon.src} type="image/png" />
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
