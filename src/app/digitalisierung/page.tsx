import type { Metadata } from 'next'
import { DigitalisierungContent } from './DigitalisierungContent'

export const metadata: Metadata = {
  title: 'Dokumenten-Digitalisierung & Scan-Service',
  description:
    'Professionelle Digitalisierung von Akten und Dokumenten. DSGVO-konform, BSI TR-RESISCAN zertifiziert. Stationär und mobil in DACH.',
}

export default function DigitalisierungPage() {
  return <DigitalisierungContent />
}
