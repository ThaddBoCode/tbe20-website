'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ContactCTA } from '@/components/sections/ContactCTA'
import {
  ArrowRight,
  Award,
  Building2,
  Car,
  GraduationCap,
  MapPin,
  Target,
  Users,
  Zap,
} from 'lucide-react'

const values = [
  {
    icon: Users,
    title: 'Persönlich',
    description: 'Sie arbeiten immer direkt mit mir. Kein Weiterreichen an Junior-Berater.',
  },
  {
    icon: Zap,
    title: 'Flexibel',
    description: 'Schnelle Verfügbarkeit, kurze Entscheidungswege, keine Bürokratie.',
  },
  {
    icon: Target,
    title: 'Ergebnisorientiert',
    description: 'Fokus auf messbaren Mehrwert für Ihr Unternehmen, nicht auf maximale Projektstunden.',
  },
]

const milestones = [
  {
    period: 'Heute',
    title: 'TBe20 Solutions GmbH',
    role: 'Geschäftsführer & Berater',
    description: 'CRM-Beratung (Dynamics 365 & Salesforce) für Unternehmen, die einen erfahrenen Partner auf Augenhöhe suchen. Branchenschwerpunkt: Automotive & Industrie.',
    icon: Building2,
  },
  {
    period: '10+ Jahre',
    title: 'ZF Friedrichshafen AG',
    role: 'Dynamics 365 & Salesforce CRM Projekt',
    description: 'Langjährige Betreuung eines Großprojekts bei einem der weltweit größten Automobilzulieferer (160.000+ Mitarbeiter, 46 Mrd. EUR Umsatz). Aufbau der CRM-Lösung in Dynamics 365, aktuell Migration der Automotive Solution nach Salesforce.',
    icon: Car,
  },
  {
    period: 'Zuvor',
    title: 'ORBIS SE',
    role: 'Dynamics 365 Consultant',
    description: 'Projekterfahrung bei Deutschlands Microsoft Partner of the Year. Über 950 Mitarbeiter, zahlreiche Großprojekte in der Industrie.',
    icon: Award,
  },
  {
    period: 'Zuvor',
    title: 'BE-terna',
    role: 'Dynamics 365 Consultant',
    description: 'Projekterfahrung bei einem der führenden europäischen Microsoft-Partner mit über 1.100 Beratern an 28 Standorten.',
    icon: Award,
  },
  {
    period: 'Studium',
    title: 'Technische Universität Berlin',
    role: 'Diplom-Informatiker',
    description: 'Studium der Informatik an einer der renommiertesten technischen Universitäten Deutschlands. Solides technisches Fundament für komplexe IT-Beratungsprojekte.',
    icon: GraduationCap,
  },
]

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export function UeberMichContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary-500/5 rounded-3xl rotate-12" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-500/5 rounded-2xl -rotate-6" />
        </div>
        <Container className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-sm font-semibold text-primary-500 uppercase tracking-wider mb-4"
              >
                Über mich
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6"
              >
                Thaddäus Bohne
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-600 mb-4"
              >
                Diplom-Informatiker (TU Berlin) und CRM-Berater für Dynamics 365 und Salesforce mit über 10 Jahren
                Erfahrung in der Automotive-Branche und bei führenden Beratungshäusern. Heute bringe
                ich dieses Wissen direkt und persönlich zu Ihnen &ndash; ohne den Umweg über große Konzernstrukturen.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
                className="text-base text-gray-500 mb-4"
              >
                Mein Schwerpunkt liegt auf CRM-Lösungen für die <strong className="text-gray-700">Automobilindustrie und den Mittelstand</strong> &ndash;
                geprägt durch ein Jahrzehnt der Zusammenarbeit mit ZF Friedrichshafen, einem der weltweit größten
                Automobilzulieferer.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex items-center gap-2 text-sm text-gray-500 mb-8"
              >
                <MapPin className="w-4 h-4" />
                Konstanz am Bodensee &ndash; Remote für Kunden weltweit
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Button href="/kontakt" size="lg">
                  Lassen Sie uns sprechen
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            </div>

            {/* Profile photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="aspect-[3/4] max-w-md mx-auto rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src={`${basePath}/images/thaddaeus-bohne.jpg`}
                  alt="Thaddäus Bohne - Microsoft Dynamics 365 Berater"
                  width={600}
                  height={800}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
              {/* Geometric accents */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/10 rounded-xl rotate-12 -z-10" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-500/10 rounded-lg -rotate-6 -z-10" />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Automotive Banner / Highlight */}
      <section className="relative overflow-hidden">
        <div className="relative h-48 sm:h-56 lg:h-64">
          <Image
            src={`${basePath}/images/automotive-banner.png`}
            alt="Dynamics 365 CRM für die Automobilbranche"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-dark/40" />
          <div className="absolute inset-0 flex items-center">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <p className="text-primary-400 text-sm font-semibold uppercase tracking-wider mb-2">
                  Branchenschwerpunkt
                </p>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
                  Dynamics 365 CRM | Automotive
                </h2>
                <p className="text-gray-300 max-w-xl">
                  Über 10 Jahre Erfahrung in der Automobilindustrie &ndash; darunter ein langjähriges
                  CRM-Projekt bei ZF Friedrichshafen, einem der weltweit größten Zulieferer.
                </p>
              </motion.div>
            </Container>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Warum mit mir arbeiten?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Die Erfahrung von Top-Beratungshäusern und einem DAX-Zulieferer, kombiniert mit der Agilität und Nähe eines persönlichen Beraters.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary-500" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Career / Milestones */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Mein Werdegang</h2>
          </div>
          <div className="max-w-2xl mx-auto space-y-8">
            {milestones.map((ms, index) => (
              <motion.div
                key={ms.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
                      <ms.icon className="w-6 h-6 text-primary-500" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-primary-500 uppercase tracking-wider mb-1">
                        {ms.period} &ndash; {ms.role}
                      </p>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{ms.title}</h3>
                      <p className="text-sm text-gray-600">{ms.description}</p>
                    </div>
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
