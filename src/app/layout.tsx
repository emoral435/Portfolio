import type { Metadata } from "next"

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
        <html lang="en">
            <head>
                <title>Eduardo Morales</title>
            </head>
            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    )
  }