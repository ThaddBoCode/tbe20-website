import type { Metadata } from 'next'
import { UeberMichContent } from './UeberMichContent'

export const metadata: Metadata = {
  title: 'Über mich - Thaddäus Bohne',
  description:
    'Diplom-Informatiker (TU Berlin) und Microsoft Dynamics 365 Berater. 10+ Jahre Automotive-Erfahrung bei ZF Friedrichshafen, ORBIS SE und BE-terna. Persönliche CRM-Beratung.',
}

export default function UeberMichPage() {
  return <UeberMichContent />
}
