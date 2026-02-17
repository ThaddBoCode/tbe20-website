'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ContactCTA } from '@/components/sections/ContactCTA'
import {
  ArrowRight,
  Zap,
  Layout,
  BarChart3,
  Bot,
} from 'lucide-react'

const tools = [
  {
    icon: Zap,
    title: 'Power Automate',
    subtitle: 'Workflows automatisieren',
    description:
      'Automatisieren Sie wiederkehrende Aufgaben mit visuellen Drag-and-Drop-Workflows. Verbinden Sie hunderte Anwendungen und Dienste ohne Code.',
    useCases: [
      'Genehmigungsprozesse automatisieren',
      'Daten zwischen Systemen synchronisieren',
      'Echtzeit-Benachrichtigungen einrichten',
      'Dokumente automatisch verarbeiten',
    ],
  },
  {
    icon: Layout,
    title: 'Power Apps',
    subtitle: 'Business Apps erstellen',
    description:
      'Entwickeln Sie maßgeschneiderte Business-Anwendungen ohne Programmierkenntnisse. Funktioniert nahtlos mit Ihren bestehenden Datenquellen.',
    useCases: [
      'Mobile Datenerfassung im Außendienst',
      'Interne Verwaltungstools',
      'Inventar- und Bestandsmanagement',
      'Kundenselfservice-Portale',
    ],
  },
  {
    icon: BarChart3,
    title: 'Power BI',
    subtitle: 'Daten visualisieren',
    description:
      'Verwandeln Sie Ihre Unternehmensdaten in aussagekräftige Dashboards und Berichte. Echtzeit-Analysen für fundierte Entscheidungen.',
    useCases: [
      'Vertriebs-Dashboards und KPIs',
      'Finanz-Reporting',
      'Kundenanalysen',
      'Operative Kennzahlen',
    ],
  },
  {
    icon: Bot,
    title: 'Copilot Studio',
    subtitle: 'KI-Chatbots bauen',
    description:
      'Erstellen Sie intelligente Chatbots für Kunden- und Mitarbeiter-Support. Integration in Teams, Websites und weitere Kanäle.',
    useCases: [
      'FAQ-Bots für den Kundenservice',
      'IT-Support-Automatisierung',
      'Onboarding-Assistenten',
      'Verkaufsberatung per Chat',
    ],
  },
]

export function PowerPlatformContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary-500/5 rounded-3xl rotate-12" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-500/5 rounded-2xl -rotate-6" />
        </div>
        <Container className="relative">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-sm font-semibold text-primary-500 uppercase tracking-wider mb-4"
            >
              Microsoft Power Platform
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6"
            >
              Individuelle Lösungen{' '}
              <span className="gradient-text">ohne klassische Programmierung</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 mb-8"
            >
              Die Microsoft Power Platform ermöglicht es, maßgeschneiderte Business-Anwendungen,
              Automatisierungen und Analysen zu erstellen &ndash; schnell, flexibel und ohne
              aufwendige Softwareentwicklung.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Button href="/kontakt" size="lg">
                Beratung anfragen
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Tools */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <SectionHeading
            label="Die Tools"
            title="Vier Tools, unbegrenzte Möglichkeiten"
            description="Jedes Tool der Power Platform löst spezifische Herausforderungen &ndash; zusammen bilden sie ein mächtiges Ökosystem."
          />
          <div className="space-y-12">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                      <tool.icon className="w-6 h-6 text-primary-500" />
                    </div>
                    <p className="text-xs font-semibold text-primary-500 uppercase tracking-wider mb-1">
                      {tool.subtitle}
                    </p>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{tool.title}</h3>
                    <p className="text-gray-600">{tool.description}</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-4">Typische Anwendungsfälle:</h4>
                    <ul className="space-y-3">
                      {tool.useCases.map((useCase) => (
                        <li key={useCase} className="flex items-start gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 shrink-0" />
                          {useCase}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  )
}
