function About() {
  return (
    <section
      id="ueber-uns"
      className="about"
    >
      <div className="about-inner">

        {/* LEFT */}
        <div className="about-content">

          <p
            className="about-label"
            data-de="ÜBER UZUN"
            data-tr="UZUN HAKKINDA"
          >
            ÜBER UZUN
          </p>

          <h2
            className="about-title"
            data-de="Wir bauen nicht nur Räume.<br><span>Wir schaffen Lebensräume.</span>"
            data-tr="Sadece mekânlar inşa etmiyoruz.<br><span>Yaşam alanları oluşturuyoruz.</span>"
          >
            Wir bauen nicht nur Räume.
            <br />
            <span>
              Wir schaffen Lebensräume.
            </span>
          </h2>

          <p
            className="about-text"
            data-de="Bei UZUN Bau & Renovierung verbinden wir hochwertige Handwerksarbeit mit einem modernen Anspruch an Design und Funktionalität. Unser Ziel ist es, Räume zu schaffen, die nicht nur gut aussehen, sondern sich auch langfristig gut anfühlen."
            data-tr="UZUN Bau & Renovierung olarak kaliteli işçiliği modern tasarım ve işlevsellik anlayışıyla birleştiriyoruz. Amacımız sadece güzel görünen değil, uzun yıllar keyifle kullanılabilecek yaşam alanları oluşturmaktır."
          >
            Bei UZUN Bau & Renovierung verbinden wir
            hochwertige Handwerksarbeit mit einem
            modernen Anspruch an Design und
            Funktionalität. Unser Ziel ist es, Räume
            zu schaffen, die nicht nur gut aussehen,
            sondern sich auch langfristig gut anfühlen.
          </p>

          {/* FEATURES */}
          <div className="about-features">

            <div className="about-feature">
              <span className="about-feature-number">
                01
              </span>

              <div>
                <h3
                  data-de="Qualität"
                  data-tr="Kalite"
                >
                  Qualität
                </h3>

                <p
                  data-de="Saubere Arbeit, hochwertige Materialien und Liebe zum Detail."
                  data-tr="Temiz işçilik, kaliteli malzemeler ve detaylara verilen önem."
                >
                  Saubere Arbeit, hochwertige
                  Materialien und Liebe zum Detail.
                </p>
              </div>
            </div>

            <div className="about-feature">
              <span className="about-feature-number">
                02
              </span>

              <div>
                <h3
                  data-de="Zuverlässigkeit"
                  data-tr="Güvenilirlik"
                >
                  Zuverlässigkeit
                </h3>

                <p
                  data-de="Klare Kommunikation und zuverlässige Umsetzung Ihres Projekts."
                  data-tr="Açık iletişim ve projenizin güvenilir şekilde uygulanması."
                >
                  Klare Kommunikation und
                  zuverlässige Umsetzung
                  Ihres Projekts.
                </p>
              </div>
            </div>

            <div className="about-feature">
              <span className="about-feature-number">
                03
              </span>

              <div>
                <h3
                  data-de="Aus einer Hand"
                  data-tr="Tek Elden Çözüm"
                >
                  Aus einer Hand
                </h3>

                <p
                  data-de="Renovierung und Innenausbau mit einem klaren Ansprechpartner."
                  data-tr="Renovasyon ve iç mekân uygulamalarında tek bir iletişim noktası."
                >
                  Renovierung und Innenausbau
                  mit einem klaren
                  Ansprechpartner.
                </p>
              </div>
            </div>

          </div>

          {/* QUOTE */}
          <div className="about-quote">

            <span>
              UZUN
            </span>

            <p
              data-de="Ihr Projekt beginnt mit einer Idee. Wir machen daraus einen Raum."
              data-tr="Projeniz bir fikirle başlar. Biz onu bir yaşam alanına dönüştürürüz."
            >
              Ihr Projekt beginnt mit einer Idee.
              Wir machen daraus einen Raum.
            </p>

          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="about-image">

          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=90"
            alt="Modern renovierter Innenraum"
            loading="lazy"
          />

          <div className="about-image-overlay">

            <span>
              UZUN
            </span>

            <p
              data-de="BAU • RENOVIERUNG • SANIERUNG"
              data-tr="İNŞAAT • RENOVASYON • TADİLAT"
            >
              BAU • RENOVIERUNG • SANIERUNG
            </p>

          </div>

        </div>

      </div>
    </section>
  )
}

export default About