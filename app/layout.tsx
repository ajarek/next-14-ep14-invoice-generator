import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Generator Faktur',
  description:
    'Aplikacja internetowa do generowania faktur stanowi wydajne i przyjazne dla użytkownika rozwiązanie dla firm do tworzenia faktur i zarządzania nimi. Dzięki intuicyjnemu interfejsowi użytkownicy mogą łatwo wprowadzać informacje o klientach, dodawać produkty i usługi oraz obliczać sumy. Aplikacja umożliwia użytkownikom eksportowanie faktur bezpośrednio z aplikacji do formatu PDF, usprawniając proces fakturowania.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='pl'>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div className='max-w-7xl mx-auto'>
            <Navbar />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
