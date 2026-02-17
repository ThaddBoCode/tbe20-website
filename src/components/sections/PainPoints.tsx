'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { DollarSign, Clock, UserX } from 'lucide-react'

const painPoints = [
  {
    icon: DollarSign,
    problem: 'Zu teuer',
    description:
      'Große Beratungshäuser berechnen hohe Tagessätze, weil sie Overhead für Vertrieb, Management und Büros mitfinanzieren müssen.',
    solution:
      'Bei mir zahlen Sie nur für die tatsächliche Beratungsleistung &ndash; kein Overhead, keine versteckten Kosten.',
  },
  {
    icon: UserX,
    problem: 'Zu unpersönlich',
    description:
      'Der erfahrene Partner gewinnt den Auftrag, aber umgesetzt wird von Junioren, die Ihr Geschäft nicht kennen.',
    solution:
      'Ich bin Ihr einziger Ansprechpartner &ndash; von der Analyse bis zur Schulung. Immer der gleiche erfahrene Berater.',
  },
  {
    icon: Clock,
    problem: 'Zu langsam',
    description:
      'Abstimmungsrunden, interne Freigaben und Ressourcen-Engpässe verzögern große Beratungsprojekte unnötig.',
    solution:
      'Kurze Wege, schnelle Entscheidungen. Ich bin flexibel verfügbar und reagiere direkt auf Ihre Anforderungen.',
  },
]

export function PainPoints() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <Container>
        <SectionHeading
          label="Das Problem"
          title="Warum klassische CRM-Beratung oft frustriert"
          description="Drei typische Herausforderungen, die Unternehmen bei der Suche nach dem richtigen Dynamics 365 Partner erleben."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {painPoints.map((item, index) => (
            <motion.div
              key={item.problem}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 h-full">
                <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.problem}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-sm font-medium text-primary-600">
                    <span className="font-bold">Mein Ansatz:</span>{' '}
                    <span dangerouslySetInnerHTML={{ __html: item.solution }} />
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
