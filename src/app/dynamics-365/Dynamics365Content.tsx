'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ContactCTA } from '@/components/sections/ContactCTA'
import {
  ArrowRight,
  Users,
  HeadphonesIcon,
  Target,
  TrendingUp,
  ClipboardCheck,
  GraduationCap,
  Rocket,
  MessageSquare,
  Database,
  FileBarChart,
  ArrowLeftRight,
} from 'lucide-react'

const coreModules = [
  {
    icon: TrendingUp,
    title: 'Dynamics 365 Sales',
    badge: 'Kernkompetenz',
    description:
      'Mein Schwerpunkt: Optimierung von Vertriebsprozessen mit Dynamics 365 Sales. Von der Lead-Erfassung bis zum Vertragsabschluss &ndash; mit 10+ Jahren Erfahrung in der Automotive-Branche.',
    features: [
      'Lead- und Opportunity-Management',
      'Pipeline-Analyse und Forecasting',
      'Automatisierte Vertriebsprozesse',
      'KI-gestützte Empfehlungen',
    ],
  },
  {
    icon: Database,
    title: 'Datenmigration & SSIS',
    badge: 'Kernkompetenz',
    description:
      'Professionelle Datenmigration aus Altsystemen in Dynamics 365. Saubere Datenübernahme, Reorganisation und Bereinigung mit SQL Server Integration Services (SSIS).',
    features: [
      'SSIS-basierte ETL-Prozesse',
      'Datenmigration aus Altsystemen',
      'Datenbereinigung und -reorganisation',
      'Mapping und Transformation',
    ],
  },
  {
    icon: ArrowLeftRight,
    title: 'ERP-Schnittstellen',
    badge: 'Kernkompetenz',
    description:
      'Nahtlose Integration von Dynamics 365 CRM mit ERP-Systemen. Bidirektionale Schnittstellen für durchgängige Geschäftsprozesse.',
    features: [
      'CRM-ERP-Integration',
      'Bidirektionale Datenflüsse',
      'SAP- und andere ERP-Anbindungen',
      'Middleware-Lösungen',
    ],
  },
  {
    icon: FileBarChart,
    title: 'SSRS Reporting',
    badge: 'Kernkompetenz',
    description:
      'Maßgeschneiderte Reports und Dashboards mit SQL Server Reporting Services (SSRS). Aussagekräftige Analysen für fundierte Geschäftsentscheidungen.',
    features: [
      'Individuelle SSRS-Reports',
      'Dashboards und KPIs',
      'Automatisierte Berichterstattung',
      'Datenexport und -verteilung',
    ],
  },
]

const additionalModules = [
  {
    icon: HeadphonesIcon,
    title: 'Customer Service',
    description: 'Omnichannel-Support, Fallmanagement, SLAs und Wissensdatenbank.',
  },
  {
    icon: Target,
    title: 'Marketing',
    description: 'Customer Journeys, Kampagnenautomatisierung und Lead Scoring.',
  },
  {
    icon: Users,
    title: 'Field Service',
    description: 'Ressourcenplanung, mobile Außendienst-App und IoT-Integration.',
  },
]

const processSteps = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Workshop & Analyse',
    description:
      'Gemeinsam analysieren wir Ihre bestehenden Prozesse, Datenquellen und Schnittstellen.',
  },
  {
    step: '02',
    icon: ClipboardCheck,
    title: 'Konzeption',
    description:
      'Maßgeschneidertes Konzept inkl. Datenmigrationsplan, Schnittstellenarchitektur und Reporting-Anforderungen.',
  },
  {
    step: '03',
    icon: Rocket,
    title: 'Implementierung',
    description:
      'Iterative Umsetzung mit regelmäßigen Feedback-Schleifen. SSIS-Pakete, Schnittstellen und Reports parallel.',
  },
  {
    step: '04',
    icon: GraduationCap,
    title: 'Schulung & Go-Live',
    description:
      'Umfassende Schulung Ihrer Mitarbeiter und begleiteter Go-Live für einen reibungslosen Start.',
  },
]

export function Dynamics365Content() {
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
              Microsoft Dynamics 365
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6"
            >
              CRM, Datenintegration &{' '}
              <span className="gradient-text">Reporting aus einer Hand</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 mb-8"
            >
              Nicht nur CRM-Einführung &ndash; ich decke den gesamten Technologie-Stack ab:
              Von der Datenmigration mit SSIS über ERP-Schnittstellen bis hin zu
              maßgeschneiderten SSRS-Reports. Alles aus einer Hand, von einem erfahrenen
              Diplom-Informatiker.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button href="/kontakt" size="lg">
                Kostenlose Erstberatung
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button href="/salesforce" variant="outline" size="lg">
                Auch Salesforce? &rarr;
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Core Modules */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <SectionHeading
            label="Kernkompetenzen"
            title="Meine Schwerpunkte"
            description="Sales-CRM, Datenmigration, ERP-Integration und Reporting &ndash; die Bereiche, in denen ich die meiste Erfahrung habe."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreModules.map((mod, index) => (
              <motion.div
                key={mod.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
                      <mod.icon className="w-6 h-6 text-primary-500" />
                    </div>
                    {mod.badge && (
                      <span className="text-[10px] font-bold text-primary-600 bg-primary-50 px-2 py-1 rounded-full uppercase tracking-wider">
                        {mod.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    <span dangerouslySetInnerHTML={{ __html: mod.title }} />
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    <span dangerouslySetInnerHTML={{ __html: mod.description }} />
                  </p>
                  <ul className="space-y-2">
                    {mod.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Additional modules */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <Container>
          <SectionHeading
            label="Weitere Module"
            title="Ebenfalls verfügbar"
            description="Neben meinen Kernkompetenzen unterstütze ich auch bei diesen Dynamics 365 Modulen."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {additionalModules.map((mod, index) => (
              <motion.div
                key={mod.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-100"
              >
                <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center mb-3">
                  <mod.icon className="w-5 h-5 text-gray-500" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{mod.title}</h3>
                <p className="text-sm text-gray-500">{mod.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <SectionHeading
            label="Vorgehen"
            title="Mein Projektablauf"
            description="Ein strukturierter, transparenter Prozess &ndash; von der ersten Analyse bis zum erfolgreichen Go-Live."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-5xl font-bold text-primary-100 mb-4">{step.step}</div>
                <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center mb-3">
                  <step.icon className="w-5 h-5 text-primary-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  )
}
