import { Roboto_Mono } from 'next/font/google'
import type { Metadata } from "next"

const roboto = Roboto_Mono({
    weight: ['400', '500', '600', '700'],
    variable: '--font-roboto',
    subsets: ['latin'],
})

// eslint-disable-next-line react-refresh/only-export-components
export const metadata: Metadata = {
    title: 'Eduardo Morales',
    description: 'Hello! Welcome to my corner of the web.',
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <html lang="en" className={`${roboto.variable}`}>
            <head>
                <title>Eduardo Morales</title>
            </head>
            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    )
  }