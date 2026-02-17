import type { Metadata } from 'next'
import { Container } from '@/components/ui/Container'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
}

export default function DatenschutzPage() {
  return (
    <section className="py-20 lg:py-28">
      <Container>
        <div className="max-w-3xl mx-auto prose prose-gray">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Datenschutzerklärung</h1>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">1. Datenschutz auf einen Blick</h2>
          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Allgemeine Hinweise</h3>
          <p className="text-gray-600">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
            personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
            Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
            werden können.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">2. Verantwortlicher</h2>
          <p className="text-gray-600">
            TBe20 Solutions GmbH<br />
            Eichhornstraße 23<br />
            78464 Konstanz<br />
            E-Mail: info@tbe20.com
          </p>
          <p className="text-gray-600">
            Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder
            gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von
            personenbezogenen Daten entscheidet.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">3. Datenerfassung auf dieser Website</h2>
          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Kontaktformular</h3>
          <p className="text-gray-600">
            Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus
            dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks
            Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
          </p>
          <p className="text-gray-600">
            Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
            sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur
            Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen
            beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven
            Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf
            Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Hosting</h3>
          <p className="text-gray-600">
            Diese Website wird bei einem externen Dienstleister gehostet (Hoster). Die
            personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den
            Servern des Hosters gespeichert. Hierbei kann es sich v. a. um IP-Adressen,
            Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten,
            Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden,
            handeln.
          </p>

          <h2 className="text-xl font-bold text-gray-900 mt-8 mb-4">4. Ihre Rechte</h2>
          <p className="text-gray-600">
            Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
            Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem
            ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine
            Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung
            jederzeit für die Zukunft widerrufen. Hierzu sowie zu weiteren Fragen zum Thema
            Datenschutz können Sie sich jederzeit an uns wenden.
          </p>

          <p className="text-gray-600 mt-8 text-sm italic">
            Hinweis: Diese Datenschutzerklärung ist ein Entwurf und sollte von einem Rechtsanwalt
            geprüft und an die spezifischen Gegebenheiten angepasst werden.
          </p>
        </div>
      </Container>
    </section>
  )
}
