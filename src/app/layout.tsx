import type { Metadata } from 'next'
import '@/styles/globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher'

export const metadata: Metadata = {
  title: {
    default: 'TBe20 Solutions - Dynamics 365 & Salesforce CRM-Beratung',
    template: '%s | TBe20 Solutions',
  },
  description:
    'Dynamics 365 & Salesforce CRM-Beratung mit über 10 Jahren Automotive-Erfahrung (ZF Friedrichshafen). Persönliche CRM-Implementierung und -Migration von einem Ex-ORBIS & BE-terna Consultant. Kostenlose Erstberatung.',
  keywords: [
    'Microsoft Dynamics 365',
    'Salesforce',
    'CRM Beratung',
    'CRM Migration',
    'Dynamics 365 Berater',
    'Salesforce Berater',
    'Dynamics 365 Automotive',
    'Power Platform',
    'Digitalisierung',
    'CRM Implementierung',
    'ZF Friedrichshafen',
    'SSIS Datenmigration',
  ],
  authors: [{ name: 'TBe20 Solutions GmbH' }],
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://www.tbe20.com',
    siteName: 'TBe20 Solutions',
    title: 'TBe20 Solutions - Dynamics 365 & Salesforce CRM-Beratung',
    description:
      'Persönliche CRM-Beratung (Dynamics 365 & Salesforce) und Implementierung. Kostenlose Erstberatung.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="min-h-screen flex flex-col bg-white text-gray-900 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ThemeSwitcher />
      </body>
    </html>
  )
}
