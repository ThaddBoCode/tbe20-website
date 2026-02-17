import type { Metadata } from 'next'
import { SalesforceContent } from './SalesforceContent'

export const metadata: Metadata = {
  title: 'Salesforce Beratung & Migration | CRM-Experte',
  description:
    'Salesforce Beratung: CRM-Migration von Dynamics 365 zu Salesforce, Automotive CRM, Datenmigration und Integration. Erfahrener CRM-Berater mit Projekterfahrung bei ZF Friedrichshafen.',
}

export default function SalesforcePage() {
  return <SalesforceContent />
}
