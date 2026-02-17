'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { ContactCTA } from '@/components/sections/ContactCTA'
import {
  ArrowRight,
  FileText,
  Truck,
  ScanLine,
  Shield,
  CheckCircle,
  MapPin,
  Building2,
  Award,
  Clock,
} from 'lucide-react'

const steps = [
  {
    step: '01',
    title: 'Beratung & Vereinbarung',
    description: 'Geheimhaltungsvereinbarung und DSGVO-konforme Auftragsverarbeitung werden abgeschlossen.',
  },
  {
    step: '02',
    title: 'Testphase',
    description: 'Probe-Scans werden erstellt, um Qualität und Struktur abzustimmen.',
  },
  {
    step: '03',
    title: 'Transport & Vorbereitung',
    description: 'Sichere Abholung und Vorbereitung der Dokumente (Entklammern, Sortieren).',
  },
  {
    step: '04',
    title: 'Digitalisierung',
    description: 'Professionelle Erfassung nach Ihren Anforderungen mit Verschlagwortung.',
  },
  {
    step: '05',
    title: 'Lieferung & Vernichtung',
    description: 'Übergabe der digitalen Daten und zertifizierte Aktenvernichtung auf Wunsch.',
  },
]

const documentTypes = [
  {
    icon: FileText,
    title: 'Geschäftsunterlagen',
    description: 'Korrespondenzen, Verträge und Belege mit vollständiger Verschlagwortung und Historie.',
  },
  {
    icon: Shield,
    title: 'Personalakten',
    description: 'Hochsensible personenbezogene Daten, digitalisiert unter strengsten Datenschutzvorgaben.',
  },
  {
    icon: FileText,
    title: 'Mieter- & Immobilienakten',
    description: 'Verträge, Korrespondenzen und Unterlagen der Immobilienwirtschaft für schnellen Zugriff.',
  },
  {
    icon: ScanLine,
    title: 'Komplette Aktenbestände',
    description: 'BSI TR-RESISCAN konforme Digitalisierung für rechtssichere digitale Archivierung.',
  },
]

export function DigitalisierungContent() {
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
              Dokumenten-Digitalisierung
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6"
            >
              Vom Papier zur{' '}
              <span className="gradient-text">digitalen Zukunft</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 mb-8"
            >
              Professionelle Digitalisierung Ihrer Akten und Dokumente &ndash; DSGVO-konform,
              revisionssicher und auf Wunsch direkt bei Ihnen vor Ort. In Zusammenarbeit mit
              unserem Partner A8 Medienservice GmbH (Berlin), an dem TBe20 beteiligt ist.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button href="/kontakt" size="lg">
                Angebot anfragen
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Partner: A8 Medienservice */}
      <section className="py-16 lg:py-20 bg-white border-b border-gray-100">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto rounded-2xl bg-gradient-to-r from-primary-50 to-primary-100/50 border border-primary-200 p-8 lg:p-10"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-primary-200 rounded-xl flex items-center justify-center shrink-0">
                <Building2 className="w-6 h-6 text-primary-700" />
              </div>
              <div>
                <p className="text-xs font-semibold text-primary-500 uppercase tracking-wider mb-1">
                  Unser Partner
                </p>
                <h3 className="text-xl font-bold text-gray-900">A8 Medienservice GmbH, Berlin</h3>
              </div>
            </div>
            <p className="text-gray-600 mb-6">
              Wir arbeiten nicht mit einem beliebigen externen Dienstleister &ndash; die TBe20 Solutions
              ist an der A8 Medienservice GmbH beteiligt. Seit 2013 ist die A8 Medienservice als
              professioneller Scan-Dienstleister bundesweit im Einsatz und steht für Qualität,
              Datenschutz und Zuverlässigkeit.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Award className="w-4 h-4 text-primary-500 shrink-0" />
                DIN ISO 9001:2015 zertifiziert
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Shield className="w-4 h-4 text-primary-500 shrink-0" />
                BSI TR-RESISCAN konform
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Clock className="w-4 h-4 text-primary-500 shrink-0" />
                Bundesweit innerhalb 48h
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Two service types */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <SectionHeading
            label="Services"
            title="Zwei Wege zur Digitalisierung"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                  <Truck className="w-6 h-6 text-primary-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Stationärer Scan-Service</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Wir holen Ihre Dokumente datenschutzkonform per Direktfahrt ab, digitalisieren
                  sie in unserem Scancentern und liefern die Daten an Sie.
                </p>
                <ul className="space-y-2">
                  {['Bundesweite Abholung', 'Hochleistungsscanner', 'Zertifizierte Vernichtung'].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-primary-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="h-full">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mb-4">
                  <MapPin className="w-6 h-6 text-primary-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Mobiler Scan-Service</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Geschulte Mitarbeiter kommen direkt zu Ihnen und digitalisieren Ihre Dokumente
                  vor Ort. Ideal für sensible Unterlagen.
                </p>
                <ul className="space-y-2">
                  {['Dokumente bleiben im Haus', 'Direkte Qualitätskontrolle', 'Schwerpunkt DACH-Raum'].map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-primary-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Document types */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <Container>
          <SectionHeading
            label="Dokumententypen"
            title="Was wir digitalisieren"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {documentTypes.map((doc, index) => (
              <motion.div
                key={doc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                  <doc.icon className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{doc.title}</h3>
                  <p className="text-sm text-gray-600">{doc.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Process steps */}
      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <SectionHeading
            label="Ablauf"
            title="So funktioniert die Digitalisierung"
          />
          <div className="max-w-3xl mx-auto space-y-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-6"
              >
                <div className="text-3xl font-bold text-primary-200 shrink-0 w-12">{step.step}</div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </>
  )
}
