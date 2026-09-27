function Ablauf() {
  return (
    <section
      id="ablauf"
      className="process-section"
    >

      <div className="process-inner">

        <div className="process-heading">

          <p
            data-de="UNSER ABLAUF"
            data-tr="SÜRECİMİZ"
          >
            UNSER ABLAUF
          </p>

          <h2
            data-de="Von der ersten Idee bis zur Fertigstellung."
            data-tr="İlk fikirden tamamlanmaya kadar."
          >
            Von der ersten Idee bis zur Fertigstellung.
          </h2>

        </div>

        <div className="process-list">

          {/* STEP 01 */}
          <a
            href="#kontakt"
            className="process-step"
          >
            <div className="process-number">
              01
            </div>

            <div className="process-content">

              <h3
                data-de="Anfrage"
                data-tr="Talep"
              >
                Anfrage
              </h3>

              <p
                data-de="Sie erzählen uns von Ihrem Projekt und Ihren Vorstellungen."
                data-tr="Projenizden ve beklentilerinizden bize bahsedersiniz."
              >
                Sie erzählen uns von Ihrem Projekt und Ihren Vorstellungen.
              </p>

            </div>

            <span className="process-arrow">
              ↗
            </span>
          </a>

          {/* STEP 02 */}
          <article className="process-step">

            <div className="process-number">
              02
            </div>

            <div className="process-content">

              <h3
                data-de="Besichtigung"
                data-tr="Keşif"
              >
                Besichtigung
              </h3>

              <p
                data-de="Wir besprechen die Details und verschaffen uns einen Überblick vor Ort."
                data-tr="Detayları konuşur ve yerinde inceleme gerçekleştiririz."
              >
                Wir besprechen die Details und verschaffen uns einen Überblick vor Ort.
              </p>

            </div>

            <span className="process-arrow">
              ↗
            </span>

          </article>

          {/* STEP 03 */}
          <article className="process-step">

            <div className="process-number">
              03
            </div>

            <div className="process-content">

              <h3
                data-de="Angebot"
                data-tr="Teklif"
              >
                Angebot
              </h3>

              <p
                data-de="Sie erhalten ein klares und transparentes Angebot für Ihr Projekt."
                data-tr="Projeniz için açık ve şeffaf bir teklif sunarız."
              >
                Sie erhalten ein klares und transparentes Angebot für Ihr Projekt.
              </p>

            </div>

            <span className="process-arrow">
              ↗
            </span>

          </article>

          {/* STEP 04 */}
          <article className="process-step">

            <div className="process-number">
              04
            </div>

            <div className="process-content">

              <h3
                data-de="Umsetzung"
                data-tr="Uygulama"
              >
                Umsetzung
              </h3>

              <p
                data-de="Unser Team setzt Ihr Projekt zuverlässig und sauber um."
                data-tr="Ekibimiz projenizi güvenilir ve özenli şekilde hayata geçirir."
              >
                Unser Team setzt Ihr Projekt zuverlässig und sauber um.
              </p>

            </div>

            <span className="process-arrow">
              ↗
            </span>

          </article>

          {/* STEP 05 */}
          <article className="process-step">

            <div className="process-number">
              05
            </div>

            <div className="process-content">

              <h3
                data-de="Übergabe"
                data-tr="Teslim"
              >
                Übergabe
              </h3>

              <p
                data-de="Am Ende steht ein sauberes Ergebnis, mit dem Sie zufrieden sind."
                data-tr="Sonunda memnun kalacağınız temiz ve tamamlanmış bir sonuç ortaya çıkar."
              >
                Am Ende steht ein sauberes Ergebnis, mit dem Sie zufrieden sind.
              </p>

            </div>

            <span className="process-arrow">
              ↗
            </span>

          </article>

        </div>
      </div>
    </section>
  )
}

export default Ablauf