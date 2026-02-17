import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'Impressum',
}

export default function ImpressumPage() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="max-w-3xl mx-auto prose prose-gray">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Impressum</h1>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Angaben gemäß § 5 TMG</h2>
          <p className="text-gray-600">
            TBe20 Solutions GmbH<br />
            Eichhornstraße 23<br />
            78464 Konstanz
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Vertreten durch</h2>
          <p className="text-gray-600">
            Geschäftsführer: Thaddäus Bohne
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Kontakt</h2>
          <p className="text-gray-600">
            E-Mail: info@tbe20.com
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Registereintrag</h2>
          <p className="text-gray-600">
            Registergericht: Amtsgericht Freiburg i. Br.<br />
            Registernummer: HRB 730866
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Umsatzsteuer-ID</h2>
          <p className="text-gray-600">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
            DE 334907433
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">Streitschlichtung</h2>
          <p className="text-gray-600">
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </Container>
    </section>
  )
}
