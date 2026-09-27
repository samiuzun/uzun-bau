
function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <p
          className="eyebrow"
          data-de="BAU • RENOVIERUNG • SANIERUNG"
          data-tr="İNŞAAT • RENOVASYON • TADİLAT"
        >
          BAU • RENOVIERUNG • SANIERUNG
        </p>

        <h1
          data-de="WIR VERWANDELN<br />RÄUME."
          data-tr="MEKÂNLARI<br />DÖNÜŞTÜRÜYORUZ."
        >
          WIR VERWANDELN
          <br />
          RÄUME.
        </h1>

        <p
          className="hero-description"
          data-de="Professionelle Renovierung und Innenausbau mit Qualität, Präzision und Leidenschaft."
          data-tr="Kalite, hassasiyet ve tutkuyla profesyonel renovasyon ve iç mekân uygulamaları."
        >
          Professionelle Renovierung und
          Innenausbau mit Qualität,
          Präzision und Leidenschaft.
        </p>

        <a
          href="#kontakt"
          className="hero-button"
          data-de="KOSTENLOSES ANGEBOT"
          data-tr="ÜCRETSİZ TEKLİF AL"
        >
          KOSTENLOSES ANGEBOT
          <span>↗</span>
        </a>

      </div>

      <div className="hero-number">
        01 / 01
      </div>

    </section>
  )
}

export default Hero