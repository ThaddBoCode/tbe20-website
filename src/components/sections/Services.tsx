'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ArrowRight, BarChart3, Cloud, Cog, FileText } from 'lucide-react'

const services = [
  {
    icon: BarChart3,
    title: 'Microsoft Dynamics 365',
    description:
      'Beratung und Implementierung von Dynamics 365 Sales, Datenmigration (SSIS), ERP-Schnittstellen und SSRS-Reporting. Über 10 Jahre Automotive-Erfahrung.',
    href: '/dynamics-365',
    features: ['CRM & Sales', 'SSIS & Datenmigration', 'ERP-Schnittstellen'],
  },
  {
    icon: Cloud,
    title: 'Salesforce',
    description:
      'CRM-Migration von Dynamics 365 zu Salesforce, Sales Cloud und Datenintegration. Aktuell im Einsatz bei einem führenden Automotive-Konzern.',
    href: '/salesforce',
    features: ['CRM-Migration', 'Sales Cloud', 'Datenintegration'],
  },
  {
    icon: Cog,
    title: 'Power Platform',
    description:
      'Individuelle Lösungen mit Power Apps, Power Automate, Power BI und Copilot Studio. Automatisierung ohne klassische Programmierung.',
    href: '/power-platform',
    features: ['Power Apps', 'Power Automate', 'Power BI'],
  },
  {
    icon: FileText,
    title: 'Dokumenten-Digitalisierung',
    description:
      'Professionelle Digitalisierung Ihrer Akten und Dokumente in Zusammenarbeit mit unserem ISO-zertifizierten Partner A8 Medienservice (Berlin).',
    href: '/digitalisierung',
    features: ['ISO 9001 zertifiziert', 'BSI TR-RESISCAN', 'Bundesweit mobil'],
  },
]

export function Services() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50 geometric-pattern">
      <Container>
        <SectionHeading
          label="Leistungen"
          title="Wie ich Ihnen helfen kann"
          description="Vier Kernbereiche, in denen ich Unternehmen bei CRM und Digitalisierung unterstütze."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm mb-4 flex-1">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button href={service.href} variant="outline" size="sm" className="self-start">
                  Mehr erfahren
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
