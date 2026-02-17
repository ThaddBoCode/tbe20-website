import type { Metadata } from 'next'
import { Dynamics365Content } from './Dynamics365Content'

export const metadata: Metadata = {
  title: 'Microsoft Dynamics 365 Beratung - Sales, SSIS, ERP-Schnittstellen & Reporting',
  description:
    'Microsoft Dynamics 365 Beratung: Sales, SSIS-Datenmigration, ERP-Schnittstellen und SSRS Reporting. Über 10 Jahre Automotive-Erfahrung bei ZF Friedrichshafen.',
}

export default function Dynamics365Page() {
  return <Dynamics365Content />
}
