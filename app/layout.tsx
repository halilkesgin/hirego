import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import AuthProvider from '@/components/providers/auth-provider'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'hiring',
    description: 'hiring',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <AuthProvider>
            <html lang="en">
                <body className={inter.className}>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem
                        disableTransitionOnChange
                    >
                        <Toaster />
                        {children}
                    </ThemeProvider>
                </body>
            </html>
        </AuthProvider>
    )
}
