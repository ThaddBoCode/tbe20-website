import { Hero } from '@/components/sections/Hero'
import { PainPoints } from '@/components/sections/PainPoints'
import { Services } from '@/components/sections/Services'
import { References } from '@/components/sections/References'
import { ContactCTA } from '@/components/sections/ContactCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <PainPoints />
      <Services />
      <References />
      <ContactCTA />
    </>
  )
}
