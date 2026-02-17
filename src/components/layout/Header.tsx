'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navigation = [
  { name: 'Startseite', href: '/' },
  { name: 'Dynamics 365', href: '/dynamics-365' },
  { name: 'Salesforce', href: '/salesforce' },
  { name: 'Power Platform', href: '/power-platform' },
  { name: 'Digitalisierung', href: '/digitalisierung' },
  { name: 'Über mich', href: '/ueber-mich' },
  { name: 'Blog', href: '/blog' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center gap-1">
              <div className="grid grid-cols-3 gap-0.5">
                <div className="w-2 h-2 bg-primary-500 rounded-sm opacity-40" />
                <div className="w-2 h-2 bg-primary-500 rounded-sm opacity-70" />
                <div className="w-2 h-2 bg-primary-500 rounded-sm" />
                <div className="w-2 h-2 bg-primary-500 rounded-sm opacity-60" />
                <div className="w-2 h-2 bg-primary-500 rounded-sm opacity-90" />
                <div className="w-2 h-2 bg-primary-500 rounded-sm opacity-50" />
              </div>
            </div>
            <span className="text-xl font-bold text-dark">
              TBe<span className="text-primary-500">20</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-600 hover:text-primary-500 transition-colors rounded-lg hover:bg-gray-50"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/kontakt"
              className="ml-4 inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-primary-500 hover:bg-primary-600 rounded-lg transition-colors"
            >
              Kontakt
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-base font-medium text-gray-600 hover:text-primary-500 hover:bg-gray-50 rounded-lg"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/kontakt"
                className="mt-2 inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-primary-500 hover:bg-primary-600 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kostenlose Erstberatung
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
