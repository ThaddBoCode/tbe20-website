'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Building2, Award, Car } from 'lucide-react'

const references = [
  {
    name: 'ZF Friedrichshafen AG',
    type: 'Langjähriges Kundenprojekt · 10+ Jahre',
    description:
      'Langjährige Betreuung und Weiterentwicklung der CRM-Lösung bei einem der weltweit führenden Automobilzulieferer. Erfahrung mit CRM-Einführung, Systemerweiterung und Plattform-Migrationen.',
    icon: Car,
    highlight: true,
  },
  {
    name: 'Stiftung Liebenau',
    type: 'Kundenprojekt',
    description:
      'Implementierung von Microsoft Dynamics 365 CRM für eine der größten Sozialstiftungen Süddeutschlands. Zwei erfolgreiche Projekte im Bereich Kundenmanagement.',
    icon: Building2,
    highlight: false,
  },
]

const experience = [
  {
    name: 'ORBIS SE',
    description:
      'Freiberufliche Projekterfahrung als Dynamics 365 Consultant bei Deutschlands Microsoft Partner of the Year.',
  },
  {
    name: 'BE-terna',
    description:
      'Freiberufliche Projekterfahrung bei einem der führenden europäischen Microsoft Business Software Partner.',
  },
]

export function References() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <SectionHeading
          label="Erfahrung & Referenzen"
          title="Vertrauen durch Erfahrung"
          description="Über 10 Jahre Automotive-Erfahrung, Projekte bei führenden Microsoft-Partnern und erfolgreiche Kundenprojekte."
        />

        {/* Client projects */}
        <div className="mb-16 space-y-6 max-w-3xl mx-auto">
          {references.map((ref) => (
            <motion.div
              key={ref.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`rounded-2xl p-8 lg:p-10 ${
                ref.highlight
                  ? 'bg-gradient-to-r from-primary-50 to-primary-100/50 border border-primary-200'
                  : 'bg-gray-50'
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                    ref.highlight ? 'bg-primary-200' : 'bg-primary-100'
                  }`}
                >
                  <ref.icon className={`w-6 h-6 ${ref.highlight ? 'text-primary-700' : 'text-primary-600'}`} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-primary-500 uppercase tracking-wider mb-1">
                    {ref.type}
                  </p>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{ref.name}</h3>
                  <p className="text-gray-600">{ref.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience at partners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start gap-4 bg-gray-50 rounded-xl p-6"
            >
              <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center shrink-0">
                <Award className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{exp.name}</h3>
                <p className="text-sm text-gray-600">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
