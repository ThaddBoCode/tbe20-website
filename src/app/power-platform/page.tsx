import type { Metadata } from 'next'
import { PowerPlatformContent } from './PowerPlatformContent'

export const metadata: Metadata = {
  title: 'Microsoft Power Platform Beratung',
  description:
    'Power Apps, Power Automate, Power BI und Copilot Studio: Individuelle Lösungen für Ihr Unternehmen. Automatisierung ohne klassische Programmierung.',
}

export default function PowerPlatformPage() {
  return <PowerPlatformContent />
}
