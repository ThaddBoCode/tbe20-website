'use client'

import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { ContactForm } from '@/components/forms/ContactForm'
import { Mail, MapPin, Clock } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    title: 'E-Mail',
    value: 'info@tbe20.com',
    href: 'mailto:info@tbe20.com',
  },
  {
    icon: MapPin,
    title: 'Adresse',
    value: 'Eichhornstraße 23, 78464 Konstanz',
    href: undefined,
  },
  {
    icon: Clock,
    title: 'Reaktionszeit',
    value: 'Innerhalb von 24 Stunden',
    href: undefined,
  },
]

export function KontaktContent() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <p className="text-sm font-semibold text-primary-500 uppercase tracking-wider mb-4">
                Kontakt
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Lassen Sie uns{' '}
                <span className="gradient-text">sprechen</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Erzählen Sie mir von Ihrem Vorhaben. In einem kostenlosen 30-minütigen
                Erstgespräch finden wir heraus, wie ich Ihnen am besten helfen kann.
              </p>
            </motion.div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center shrink-0">
                    <info.icon className="w-5 h-5 text-primary-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">{info.title}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-gray-900 font-medium hover:text-primary-500 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-900 font-medium">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card hover={false} className="shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Nachricht senden</h2>
              <ContactForm />
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
