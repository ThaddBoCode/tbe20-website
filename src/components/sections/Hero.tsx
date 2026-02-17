'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ArrowRight, CheckCircle } from 'lucide-react'

const highlights = [
  '10+ Jahre Automotive-Erfahrung (ZF Friedrichshafen)',
  'Projekte bei ORBIS SE & BE-terna (freiberuflich)',
  'Kostenlose 30-Min Erstberatung',
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white">
      {/* Geometric background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary-500/5 rounded-3xl rotate-12" />
        <div className="absolute top-1/3 -left-8 w-48 h-48 bg-primary-500/5 rounded-2xl -rotate-6" />
        <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-primary-500/8 rounded-xl rotate-45" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-primary-400/10 rounded-lg rotate-12" />
        <div className="absolute bottom-8 left-16 w-24 h-24 bg-primary-500/5 rounded-2xl -rotate-12" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-semibold text-primary-500 uppercase tracking-wider mb-4">
              Dynamics 365 &amp; Salesforce Beratung &middot; Automotive &middot; Mittelstand
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
          >
            Die Erfahrung der Großen.{' '}
            <span className="gradient-text">Die Nähe eines Partners.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed"
          >
            Über 10 Jahre CRM-Projekterfahrung in der Automobilindustrie und bei führenden
            Beratungshäusern &ndash; in Dynamics 365 und Salesforce. Persönlich, flexibel und
            ohne den Overhead großer Konzerne.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Button href="/kontakt" size="lg">
              Kostenlose Erstberatung
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button href="/dynamics-365" variant="outline" size="lg">
              Leistungen entdecken
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            {highlights.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-gray-600">
                <CheckCircle className="w-4 h-4 text-primary-500 shrink-0" />
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
