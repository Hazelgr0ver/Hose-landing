import { useEffect } from 'react'
import Hero from '../components/Hero'
import Product from '../components/sections/Product'
import Audience from '../components/sections/Audience'
import Applications from '../components/sections/Applications'
import Advantages from '../components/sections/Advantages'
import Pilot from '../components/sections/Pilot'
import Process from '../components/sections/Process'
import Partners from '../components/sections/Partners'
import FAQ from '../components/sections/FAQ'
import ContactForm from '../components/sections/ContactForm'

export default function HomePage() {
  // Плавный переход к якорю, если на главную пришли со ссылки вида /#contact
  useEffect(() => {
    const { hash } = window.location
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 80)
      }
    }
  }, [])

  return (
    <>
      <Hero />
      <Product />
      <Audience />
      <Applications />
      <Advantages />
      <Pilot />
      <Process />
      <Partners />
      <FAQ />
      <ContactForm />
    </>
  )
}
