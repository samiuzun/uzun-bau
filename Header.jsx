function Header({ language, setLanguage }) {
  return (
    <header className="header">
      <a href="#" className="logo">
        UZUN
      </a>

      <nav className="nav">
        <a href="#leistungen" data-de="Leistungen" data-tr="Hizmetler">
          Leistungen
        </a>

        <a href="#projekte" data-de="Projekte" data-tr="Projeler">
          Projekte
        </a>

        <a href="#ueber-uns" data-de="Über uns" data-tr="Hakkımızda">
          Über uns
        </a>

        <a
          href="#preisrechner"
          data-de="Preisrechner"
          data-tr="Fiyat Hesaplayıcı"
        >
          Preisrechner
        </a>

        <a href="#kontakt" data-de="Kontakt" data-tr="İletişim">
          Kontakt
        </a>
      </nav>

      <div className="language-switcher">
        <button
          className={`lang-button ${
            language === 'de' ? 'active' : ''
          }`}
          data-lang="de"
          onClick={() => setLanguage('de')}
        >
          DE
        </button>

        <span>/</span>

        <button
          className={`lang-button ${
            language === 'tr' ? 'active' : ''
          }`}
          data-lang="tr"
          onClick={() => setLanguage('tr')}
        >
          TR
        </button>
      </div>

      <a
        href="#kontakt"
        className="nav-button"
        data-de="Angebot anfragen"
        data-tr="Teklif al"
      >
        Angebot anfragen
      </a>
    </header>
  )
}

export default Header