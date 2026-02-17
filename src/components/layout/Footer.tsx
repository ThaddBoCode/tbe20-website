import Link from 'next/link'
import { Mail, MapPin } from 'lucide-react'

const footerLinks = {
  leistungen: [
    { name: 'Microsoft Dynamics 365', href: '/dynamics-365' },
    { name: 'Salesforce', href: '/salesforce' },
    { name: 'Power Platform', href: '/power-platform' },
    { name: 'Dokumenten-Digitalisierung', href: '/digitalisierung' },
  ],
  unternehmen: [
    { name: 'Über mich', href: '/ueber-mich' },
    { name: 'Blog', href: '/blog' },
    { name: 'Kontakt', href: '/kontakt' },
  ],
  rechtliches: [
    { name: 'Impressum', href: '/impressum' },
    { name: 'Datenschutz', href: '/datenschutz' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-dark text-gray-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex items-center gap-2 mb-4">
              <span className="text-xl font-bold text-white">
                TBe<span className="text-primary-400">20</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 mb-4">
              CRM-Beratung (Dynamics 365 &amp; Salesforce) und Implementierung aus Konstanz.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <a
                href="mailto:info@tbe20.com"
                className="flex items-center gap-2 hover:text-primary-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@tbe20.com
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Eichhornstraße 23, 78464 Konstanz
              </div>
            </div>
          </div>

          {/* Leistungen */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Leistungen
            </h3>
            <ul className="space-y-2">
              {footerLinks.leistungen.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Unternehmen */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Unternehmen
            </h3>
            <ul className="space-y-2">
              {footerLinks.unternehmen.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Rechtliches */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Rechtliches
            </h3>
            <ul className="space-y-2">
              {footerLinks.rechtliches.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} TBe20 Solutions GmbH. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}
