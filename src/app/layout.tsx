import NavBar from '@/components/NavBar/NavBar'
import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: 'Alkimi - Assignment',
  description: 'Developed by Rahul Kumar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <NavBar/>
        {children}
        </body>
    </html>
  )
}
