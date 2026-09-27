function Footer() {
  return (
    <footer className="footer">

      <div className="footer-top">

        {/* BRAND */}
        <div className="footer-brand">

          <div className="footer-logo">
            UZUN
          </div>

          <p
            data-de="Bau & Renovierung"
            data-tr="İnşaat & Renovasyon"
          >
            Bau & Renovierung
          </p>

          <span
            data-de="Räume neu gedacht."
            data-tr="Mekânlara yeni bir bakış."
          >
            Räume neu gedacht.
          </span>

        </div>


        {/* NAVIGATION */}
        <div className="footer-column">

          <span
            data-de="NAVIGATION"
            data-tr="NAVİGASYON"
          >
            NAVIGATION
          </span>

          <a
            href="#leistungen"
            data-de="Leistungen"
            data-tr="Hizmetler"
          >
            Leistungen
          </a>

          <a
            href="#projekte"
            data-de="Projekte"
            data-tr="Projeler"
          >
            Projekte
          </a>

          <a
            href="#ueber-uns"
            data-de="Über uns"
            data-tr="Hakkımızda"
          >
            Über uns
          </a>

          <a
            href="#preisrechner"
            data-de="Preisrechner"
            data-tr="Fiyat Hesaplayıcı"
          >
            Preisrechner
          </a>

          <a
            href="#kontakt"
            data-de="Kontakt"
            data-tr="İletişim"
          >
            Kontakt
          </a>

        </div>


        {/* CONTACT */}
        <div className="footer-column">

          <span
            data-de="KONTAKT"
            data-tr="İLETİŞİM"
          >
            KONTAKT
          </span>

          <a href="mailto:info@uzun-bau.de">
            info@uzun-bau.de
          </a>

          <a href="tel:+490000000000">
            +49 000 0000000
          </a>

          <p
            data-de="Solingen • Düsseldorf • NRW"
            data-tr="Solingen • Düsseldorf • NRW"
          >
            Solingen • Düsseldorf • NRW
          </p>

        </div>


        {/* CTA */}
        <div className="footer-column footer-action">

          <span
            data-de="IHR PROJEKT"
            data-tr="PROJENİZ"
          >
            IHR PROJEKT
          </span>

          <a
            href="#kontakt"
            className="footer-cta"
            data-de="Angebot anfragen ↗"
            data-tr="Teklif al ↗"
          >
            Angebot anfragen ↗
          </a>

        </div>

      </div>


      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">

        <span>
          © 2026 UZUN Bau & Renovierung
        </span>

        <div className="footer-legal">

          <a
            href="impressum.html"
            data-de="Impressum"
            data-tr="Künye"
          >
            Impressum
          </a>

          <a
            href="datenschutz.html"
            data-de="Datenschutz"
            data-tr="Gizlilik"
          >
            Datenschutz
          </a>

        </div>

        <span>
          DE / TR
        </span>

      </div>

    </footer>
  )
}

export default Footer