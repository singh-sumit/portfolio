import './globals.css'
import type {Metadata} from 'next'
import {Inter, Orbitron, Questrial} from 'next/font/google'
import {Providers} from "@/app/providers";

const inter = Inter({subsets: ['latin']})
const questrial = Questrial({
  subsets: ['latin'],
  weight: ['400']
})

const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['400']
})

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Explore the portfolio of Er. Sumit Kumar Singh, a skilled Software Engineer specializing in Python, Django, ReactJS, and more. Discover innovative projects, certifications, and expertise in software development.',
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='dark text-foreground bg-background tracking-normal'>
    <body className={questrial.className}>
    <Providers>
      {children}
    </Providers>
    </body>
    </html>
  )
}
