function Projekte() {
  return (
    <section
      id="projekte"
      className="projects"
    >

      <div className="section-heading">
        <p
          data-de="REFERENZEN"
          data-tr="REFERANSLAR"
        >
          REFERENZEN
        </p>

        <h2
          data-de="Unsere Projekte."
          data-tr="Projelerimiz."
        >
          Unsere Projekte.
        </h2>
      </div>

      <div className="project-grid">

        {/* PROJECT 01 */}
        <article
          className="project-card"
          data-project="0"
        >
          <div className="project-image image-one">
            <div className="project-overlay">
              <span>01</span>
              <b>↗</b>
            </div>
          </div>

          <div className="project-info">
            <div>
              <h3
                data-de="Wohnungsrenovierung"
                data-tr="Daire Renovasyonu"
              >
                Wohnungsrenovierung
              </h3>

              <p
                data-de="Renovierung • Innenausbau"
                data-tr="Renovasyon • İç Mekân"
              >
                Renovierung • Innenausbau
              </p>
            </div>

            <span>01</span>
          </div>
        </article>


        {/* PROJECT 02 */}
        <article
          className="project-card"
          data-project="1"
        >
          <div className="project-image image-two">
            <div className="project-overlay">
              <span>02</span>
              <b>↗</b>
            </div>
          </div>

          <div className="project-info">
            <div>
              <h3
                data-de="Neue Bodenverlegung"
                data-tr="Yeni Zemin Döşeme"
              >
                Neue Bodenverlegung
              </h3>

              <p
                data-de="Boden • Vinyl • Parkett"
                data-tr="Zemin • Vinil • Parke"
              >
                Boden • Vinyl • Parkett
              </p>
            </div>

            <span>02</span>
          </div>
        </article>


        {/* PROJECT 03 */}
        <article
          className="project-card"
          data-project="2"
        >
          <div className="project-image image-three">
            <div className="project-overlay">
              <span>03</span>
              <b>↗</b>
            </div>
          </div>

          <div className="project-info">
            <div>
              <h3
                data-de="Moderner Innenausbau"
                data-tr="Modern İç Mekân"
              >
                Moderner Innenausbau
              </h3>

              <p
                data-de="Innenausbau • Trockenbau"
                data-tr="İç Mekân • Alçıpan"
              >
                Innenausbau • Trockenbau
              </p>
            </div>

            <span>03</span>
          </div>
        </article>


        {/* PROJECT 04 */}
        <article
          className="project-card"
          data-project="3"
        >
          <div className="project-image image-four">
            <div className="project-overlay">
              <span>04</span>
              <b>↗</b>
            </div>
          </div>

          <div className="project-info">
            <div>
              <h3
                data-de="Komplette Renovierung"
                data-tr="Komple Renovasyon"
              >
                Komplette Renovierung
              </h3>

              <p
                data-de="Sanierung • Renovierung"
                data-tr="Tadilat • Renovasyon"
              >
                Sanierung • Renovierung
              </p>
            </div>

            <span>04</span>
          </div>
        </article>


        {/* PROJECT 05 */}
<article
  className="project-card"
  data-project="4"
>
  <div className="project-image image-five">
    <div className="project-overlay">
      <span>05</span>
      <b>↗</b>
    </div>
  </div>

  <div className="project-info">
    <div>
      <h3
        data-de="Moderner Wohnbereich"
        data-tr="Modern Yaşam Alanı"
      >
        Moderner Wohnbereich
      </h3>

      <p
        data-de="Innenausbau • Renovierung"
        data-tr="İç Mekân • Renovasyon"
      >
        Innenausbau • Renovierung
      </p>
    </div>

    <span>05</span>
  </div>
</article>


        {/* PROJECT 06 */}
        <article
          className="project-card"
          data-project="5"
        >
          <div className="project-image image-six">
            <div className="project-overlay">
              <span>06</span>
              <b>↗</b>
            </div>
          </div>

          <div className="project-info">
            <div>
              <h3
                data-de="Hochwertige Sanierung"
                data-tr="Kaliteli Tadilat"
              >
                Hochwertige Sanierung
              </h3>

              <p
                data-de="Sanierung • Innenausbau"
                data-tr="Tadilat • İç Mekân"
              >
                Sanierung • Innenausbau
              </p>
            </div>

            <span>06</span>
          </div>
        </article>

      </div>
    </section>
  )
}

export default Projekte