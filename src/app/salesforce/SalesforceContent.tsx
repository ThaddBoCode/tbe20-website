'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ContactCTA } from '@/components/sections/ContactCTA'
import {
  ArrowRight,
  ArrowLeftRight,
  TrendingUp,
  Database,
  FileBarChart,
  Cloud,
  ShieldCheck,
  Car,
  MessageSquare,
  ClipboardCheck,
  Rocket,
  GraduationCap,
  Zap,
} from 'lucide-react'

const coreServices = [
  {
    icon: ArrowLeftRight,
    title: 'CRM-Migration',
    badge: 'Aktuelles Projekt',
    description:
      'Migration von Microsoft Dynamics 365 zu Salesforce &ndash; inkl. Datenmigration, Prozessanpassung und Change-Management. Aktuell im Einsatz im Automotive-Umfeld bei einem führenden DAX-Zulieferer.',
    features: [
      'Dynamics 365 \u2192 Salesforce Migration',
      'Datenübernahme und -bereinigung',
      'Prozess-Mapping zwischen Plattformen',
      'Parallelbetrieb und Umstellungsplanung',
    ],
  },
  {
    icon: TrendingUp,
    title: 'Sales Cloud',
    badge: 'CRM-Expertise',
    description:
      'Vertriebsprozesse in Salesforce optimieren. Meine jahrelange Erfahrung mit CRM-Vertriebsmodulen (Dynamics 365 Sales) bringe ich direkt in die Salesforce-Welt ein.',
    features: [
      'Lead- und Opportunity-Management',
      'Pipeline und Forecasting',
      'Automatisierte Vertriebsprozesse',
      'Reports und Dashboards',
    ],
  },
  {
    icon: Database,
    title: 'Datenintegration',
    badge: 'Kernkompetenz',
    description:
      'Nahtlose Integration von Salesforce mit ERP-Systemen und anderen Datenquellen. Meine SSIS- und Schnittstellenerfahrung übertrage ich auf die Salesforce-Welt.',
    features: [
      'ERP-Anbindung (SAP, etc.)',
      'ETL-Prozesse und Datenmigration',
      'API-Integration und Middleware',
      'Datenbereinigung und -qualität',
    ],
  },
  {
    icon: Cloud,
    title: 'Service Cloud',
    badge: 'Erweiterung',
    description:
      'Kundenservice-Prozesse in Salesforce aufbauen. Cases, Knowledge Base und Omnichannel-Support für bessere Kundenbindung.',
    features: [
      'Case-Management',
      'Knowledge Base',
      'Omnichannel-Support',
      'Service-Automatisierung',
    ],
  },
]

const uniqueAdvantages = [
  {
    icon: ArrowLeftRight,
    title: 'Zwei CRM-Welten',
    description:
      'Tiefgreifendes Verständnis beider Plattformen &ndash; Dynamics 365 und Salesforce. Ideal für Migrationen und hybride Umgebungen.',
  },
  {
    icon: Car,
    title: 'Automotive-Expertise',
    description:
      '10+ Jahre Automotive-CRM bei einem der weltweit führenden Automobilzulieferer. Branchenspezifisches Wissen, das direkt in Ihr Projekt einfließt.',
  },
  {
    icon: ShieldCheck,
    title: 'Datenqualität',
    description:
      'SSIS-Expertise und bewährte ETL-Prozesse sorgen für eine saubere, vollständige Datenübernahme ohne Informationsverlust.',
  },
  {
    icon: Zap,
    title: 'Praxiserfahrung',
    description:
      'Keine Theorie &ndash; aktuell im laufenden Migrationsprojekt Dynamics 365 → Salesforce bei einem DAX-Automobilzulieferer.',
  },
]

const processSteps = [
  {
    step: '01',
    icon: MessageSquare,
    title: 'Assessment',
    description:
      'Analyse Ihrer bestehenden CRM-Landschaft, Datenstrukturen und Geschäftsprozesse. Definition des Migrationsumfangs.',
  },
  {
    step: '02',
    icon: ClipboardCheck,
    title: 'Migrationskonzept',
    description:
      'Detaillierter Migrationsplan: Daten-Mapping, Prozess-Redesign, Integrationsarchitektur und Zeitplan.',
  },
  {
    step: '03',
    icon: Rocket,
    title: 'Migration & Test',
    description:
      'Iterative Datenmigration mit Testzyklen. Parallelbetrieb beider Systeme während der Übergangsphase.',
  },
  {
    step: '04',
    icon: GraduationCap,
    title: 'Go-Live & Schulung',
    description:
      'Umfassende Anwenderschulung, begleiteter Go-Live und Hypercare-Phase für einen reibungslosen Umstieg.',
  },
]

export function SalesforceContent() {
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3 mb-4"
            >
              <p className="text-sm font-semibold text-primary-500 uppercase tracking-wider">
                Salesforce
              </p>
              <span className="text-xs font-bold text-white bg-primary-500 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                Neu
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6"
            >
              Von Dynamics 365 zu Salesforce &ndash;{' '}
              <span className="gradient-text">und alles dazwischen</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 mb-8"
            >
              Als einer der wenigen Berater, die <strong>beide CRM-Welten</strong> aus der Praxis kennen,
              unterstütze ich Sie bei Salesforce-Einführungen, CRM-Migrationen und der Integration
              in Ihre bestehende IT-Landschaft. Aktuell im Einsatz: CRM-Migration
              im Automotive-Umfeld bei einem führenden DAX-Zulieferer.
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
              <Button href="/dynamics-365" variant="outline" size="lg">
                Dynamics 365 Leistungen
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Unique Selling Points */}
      <section className="py-16 lg:py-20 bg-white border-b border-gray-100">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {uniqueAdvantages.map((adv, index) => (
              <motion.div
                key={adv.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <adv.icon className="w-6 h-6 text-primary-500" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{adv.title}</h3>
                <p className="text-sm text-gray-600">
                  <span dangerouslySetInnerHTML={{ __html: adv.description }} />
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Core Services */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <Container>
          <SectionHeading
            label="Leistungen"
            title="Salesforce Beratung"
            description="CRM-Migration, Sales Cloud, Datenintegration &ndash; meine Dynamics 365 Expertise ist auch in der Salesforce-Welt zuhause."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreServices.map((mod, index) => (
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

      {/* Process */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <SectionHeading
            label="Vorgehen"
            title="Mein Migrations-Prozess"
            description="Strukturiert, transparent und praxiserprobt &ndash; von der Analyse bis zum erfolgreichen Go-Live."
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
                <p className="text-sm text-gray-600">
                  <span dangerouslySetInnerHTML={{ __html: step.description }} />
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA: Both worlds */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Dynamics 365 <span className="text-primary-500">&amp;</span> Salesforce
            </h2>
            <p className="text-gray-600 mb-8">
              Sie sind unsicher, welche CRM-Plattform die richtige für Sie ist? Oder Sie
              müssen zwischen beiden Welten wechseln? Als einer der wenigen Berater mit
              Erfahrung in beiden Systemen kann ich Sie neutral und praxisnah beraten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/kontakt" size="lg">
                Jetzt beraten lassen
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button href="/dynamics-365" variant="outline" size="lg">
                Dynamics 365 Leistungen
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      <ContactCTA />
    </>
  )
}
