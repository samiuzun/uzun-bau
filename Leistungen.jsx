function Leistungen() {
  return (
    <section id="leistungen" className="services">

      <div className="section-heading">
        <p
          data-de="UNSERE LEISTUNGEN"
          data-tr="HİZMETLERİMİZ"
        >
          UNSERE LEISTUNGEN
        </p>

        <h2
          data-de="Was wir für Sie tun."
          data-tr="Sizin için neler yapıyoruz."
        >
          Was wir für Sie tun.
        </h2>
      </div>

      <div className="service-grid">

        {/* 01 — BODENVERLEGUNG */}
        <a
          href="bodenverlegung.html"
          className="service-card floor-service-card"
          id="floorServiceCard"
        >
          <div className="service-image">
            <img
              src="https://images.unsplash.com/photo-1615529162924-f8605388461d?auto=format&fit=crop&w=1200&q=90"
              alt="Bodenverlegung"
            />
            <span className="service-number">01</span>
          </div>

          <div className="service-content">
            <h3
              data-de="Bodenverlegung"
              data-tr="Zemin Döşeme"
            >
              Bodenverlegung
            </h3>

            <p
              data-de="Laminat, Vinyl, Parkett und Teppich präzise verlegt."
              data-tr="Laminat, vinil, parke ve halı uygulamalarını titizlikle gerçekleştiriyoruz."
            >
              Laminat, Vinyl, Parkett und Teppich präzise verlegt.
            </p>

            <span className="service-arrow">↗</span>
          </div>
        </a>

        {/* 02 — RENOVIERUNG */}
        <article className="service-card">
          <div className="service-image">
            <img
              src="https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?auto=format&fit=crop&w=1200&q=90"
              alt="Renovierung"
            />
            <span className="service-number">02</span>
          </div>

          <div className="service-content">
            <h3
              data-de="Renovierung"
              data-tr="Renovasyon"
            >
              Renovierung
            </h3>

            <p
              data-de="Bestehende Räume modernisieren und neu gestalten."
              data-tr="Mevcut alanları yeniliyor ve modern bir görünüme kavuşturuyoruz."
            >
              Bestehende Räume modernisieren und neu gestalten.
            </p>

            <span className="service-arrow">↗</span>
          </div>
        </article>

        {/* 03 — INNENAUSBAU */}
        <article className="service-card">
          <div className="service-image">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=90"
              alt="Innenausbau"
            />
            <span className="service-number">03</span>
          </div>

          <div className="service-content">
            <h3
              data-de="Innenausbau"
              data-tr="İç Mekân Uygulamaları"
            >
              Innenausbau
            </h3>

            <p
              data-de="Moderne und funktionale Innenräume nach Maß."
              data-tr="Modern, kullanışlı ve ihtiyaca özel iç mekânlar oluşturuyoruz."
            >
              Moderne und funktionale Innenräume nach Maß.
            </p>

            <span className="service-arrow">↗</span>
          </div>
        </article>

        {/* 04 — TROCKENBAU */}
        <article className="service-card">
          <div className="service-image">
            <img
              src="https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=90"
              alt="Trockenbau"
            />
            <span className="service-number">04</span>
          </div>

          <div className="service-content">
            <h3
              data-de="Trockenbau"
              data-tr="Alçıpan / Kuru Yapı"
            >
              Trockenbau
            </h3>

            <p
              data-de="Wände, Decken und Raumaufteilungen präzise umgesetzt."
              data-tr="Duvar, tavan ve alan bölme uygulamalarını profesyonel şekilde gerçekleştiriyoruz."
            >
              Wände, Decken und Raumaufteilungen präzise umgesetzt.
            </p>

            <span className="service-arrow">↗</span>
          </div>
        </article>

        {/* 05 — MONTAGE */}
        <article className="service-card">
          <div className="service-image">
            <img
              src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1200&q=90"
              alt="Montage"
            />
            <span className="service-number">05</span>
          </div>

          <div className="service-content">
            <h3
              data-de="Montage"
              data-tr="Montaj"
            >
              Montage
            </h3>

            <p
              data-de="Präzise Montage von Möbeln, Türen und Bauelementen."
              data-tr="Mobilya, kapı ve yapı elemanlarının profesyonel montajı."
            >
              Präzise Montage von Möbeln, Türen und Bauelementen.
            </p>

            <span className="service-arrow">↗</span>
          </div>
        </article>

        {/* 06 — KOMPLETTSANIERUNG */}
        <article className="service-card">
          <div className="service-image">
            <img
              src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=90"
              alt="Komplettsanierung"
            />
            <span className="service-number">06</span>
          </div>

          <div className="service-content">
            <h3
              data-de="Komplettsanierung"
              data-tr="Komple Renovasyon"
            >
              Komplettsanierung
            </h3>

            <p
              data-de="Planung und Umsetzung aus einer Hand."
              data-tr="Planlama, koordinasyon ve uygulamayı tek elden gerçekleştiriyoruz."
            >
              Planung und Umsetzung aus einer Hand.
            </p>

            <span className="service-arrow">↗</span>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Leistungen