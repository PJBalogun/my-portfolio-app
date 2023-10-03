import './globals.css'
import Footer from '@/components/global/Footer'
import Navbar from '@/components/global/Navbar'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'

const poppins = Poppins({weight:"400",subsets:["latin"]});

export const metadata: Metadata = {
  title: 'my portfolio app',
  description: 'a portfolio app for all',
}

type RootLayoutProps={
  children: React.ReactNode
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
      <main className='w-full m-auto flex flex-col items-center justify-center min-h-screen opening-box-animate-paddin text-white overflow-hidden md:overflow-visible' style={{ maxWidth: "1200px" }}>
      <div className="p-5 w-full flex-1 text-center bg-bg">
        <div className="hidden sm:block z-100">
          <Navbar />
        </div>
        <div className="-m-5 block sm:hidden z-100">
          {/* <MobileNavbar /> */}
        </div>
        {children}
      </div>
      </main>
      <Footer />
      </body>
    </html>
  )
}
