import type { Metadata } from 'next'
import { KontaktContent } from './KontaktContent'

export const metadata: Metadata = {
  title: 'Kontakt - Kostenlose Erstberatung',
  description:
    'Vereinbaren Sie eine kostenlose 30-minütige Erstberatung zu Microsoft Dynamics 365. Kontaktieren Sie TBe20 Solutions.',
}

export default function KontaktPage() {
  return <KontaktContent />
}
