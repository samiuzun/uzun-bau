import { useEffect, useState } from 'react'
import './style.css'

import Header from './components/Header'
import Hero from './components/Hero'
import Leistungen from './components/Leistungen'
import Projekte from './components/Projekte'
import VorherNachher from './components/VorherNachher'
import WarumUzun from './components/WarumUzun'
import AngebotCTA from './components/AngebotCTA'
import Ablauf from './components/Ablauf'
import About from './components/About'
import Preisrechner from './components/Preisrechner'
import ExchangeRates from './components/ExchangeRates'
import Kontakt from './components/Kontakt'
import Footer from './components/Footer'

function App() {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('uzun-language') || 'de'
  })

  useEffect(() => {
  localStorage.setItem('uzun-language', language)
  document.documentElement.lang = language

  // Normal metinleri değiştir
  document.querySelectorAll('[data-de][data-tr]').forEach((element) => {
    const translation = element.dataset[language]

    if (!translation) return

    element.innerHTML = translation
  })

  // Input placeholder'larını değiştir
  document
    .querySelectorAll('[data-de-placeholder][data-tr-placeholder]')
    .forEach((element) => {
      const translation =
        language === 'de'
          ? element.dataset.dePlaceholder
          : element.dataset.trPlaceholder

      if (translation) {
        element.placeholder = translation
      }
    })

  // Aktif dil butonunu güncelle
  document.querySelectorAll('.lang-button').forEach((button) => {
    button.classList.toggle(
      'active',
      button.dataset.lang === language
    )
  })
}, [language])

  return (
    <>
      <Header
        language={language}
        setLanguage={setLanguage}
      />

      <main>
        <Hero />
        <Leistungen />
        <Projekte />
        <VorherNachher />
        <WarumUzun />
        <AngebotCTA />
        <Ablauf />
        <About />
        <Preisrechner />
        <ExchangeRates />
        <Kontakt />
      </main>

      <Footer />
    </>
  )
}

export default App