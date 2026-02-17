'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ArrowRight, Phone } from 'lucide-react'

export function ContactCTA() {
  return (
    <section className="py-20 lg:py-28 bg-dark relative overflow-hidden">
      {/* Geometric accents */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary-500/10 rounded-3xl rotate-12" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-500/5 rounded-2xl -rotate-6" />
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-primary-500/8 rounded-xl rotate-45" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-semibold text-primary-400 uppercase tracking-wider mb-4">
            Jetzt starten
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Bereit für eine persönliche Beratung?
          </h2>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            In einem kostenlosen 30-minütigen Erstgespräch besprechen wir Ihre Anforderungen und
            ich zeige Ihnen, wie Microsoft Dynamics 365 Ihre Prozesse verbessern kann.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/kontakt" size="lg">
              Erstberatung vereinbaren
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button href="mailto:info@tbe20.com" variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white">
              <Phone className="mr-2 w-5 h-5" />
              info@tbe20.com
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
