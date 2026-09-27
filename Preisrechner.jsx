import { useState } from 'react'

function Preisrechner() {
  const [floor, setFloor] = useState('Vinyl')
  const [price, setPrice] = useState(25)

  const [priceLevel, setPriceLevel] = useState('Economy')
  const [multiplier, setMultiplier] = useState(0.85)

  const [area, setArea] = useState('')
  const [oldFloor, setOldFloor] = useState(false)
  const [floorPreparation, setFloorPreparation] = useState(false)

  const floorOptions = [
    {
      name: 'Vinyl',
      tr: 'Vinil',
      price: 25
    },
    {
      name: 'Laminat',
      tr: 'Laminat',
      price: 30
    },
    {
      name: 'Parkett',
      tr: 'Parke',
      price: 35
    },
    {
      name: 'Teppichboden',
      tr: 'Halı',
      price: 40
    },
    {
      name: 'Designboden',
      tr: 'Design Zemin',
      price: 45
    }
  ]

  const priceLevels = [
    {
      name: 'Economy',
      tr: 'Ekonomik',
      multiplier: 0.85,
      description: 'Preisbewusst',
      trDescription: 'Ekonomik seçenek'
    },
    {
      name: 'Standard',
      tr: 'Standart',
      multiplier: 1,
      description: 'Gutes Preis-Leistungs-Verhältnis',
      trDescription: 'Fiyat-performans'
    },
    {
      name: 'Premium',
      tr: 'Premium',
      multiplier: 1.25,
      description: 'Hochwertige Ausführung',
      trDescription: 'Üst kalite uygulama'
    }
  ]

  const calculatePrice = () => {
    const numericArea = Number(area)

    if (!numericArea || numericArea < 1) {
      return 0
    }

    let total = numericArea * price * multiplier

    if (oldFloor) {
      total += numericArea * 8
    }

    if (floorPreparation) {
      total += numericArea * 5
    }

    return Math.round(total)
  }

  const estimatedPrice = calculatePrice()

  return (
    <section
      id="preisrechner"
      className="price-calculator"
    >

      <div className="price-calculator-inner">

        <div className="price-calculator-heading">

          <p
            data-de="PREISRECHNER"
            data-tr="FİYAT HESAPLA"
          >
            PREISRECHNER
          </p>

          <h2
            data-de="Was kostet Ihr Projekt?"
            data-tr="Projenizin maliyeti ne kadar?"
          >
            Was kostet Ihr Projekt?
          </h2>

          <span
            data-de="Wählen Sie Ihren Boden, geben Sie die Fläche ein und erhalten Sie eine unverbindliche Preisschätzung."
            data-tr="Zemin türünü seçin, alanı girin ve yaklaşık bir fiyat tahmini alın."
          >
            Wählen Sie Ihren Boden, geben Sie die Fläche ein und erhalten Sie eine unverbindliche Preisschätzung.
          </span>

        </div>

        <div className="price-calculator-box">

          {/* BODENART */}
          <div className="calculator-field">

            <label
              data-de="1. Boden auswählen"
              data-tr="1. Zemin seçin"
            >
              1. Boden auswählen
            </label>

            <div className="floor-options">

              {floorOptions.map((option, index) => (
                <button
                  key={option.name}
                  type="button"
                  className={`floor-option ${
                    floor === option.name ? 'active' : ''
                  }`}
                  onClick={() => {
                    setFloor(option.name)
                    setPrice(option.price)
                  }}
                >

                  <span>
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <strong
                    data-de={option.name}
                    data-tr={option.tr}
                  >
                    {option.name}
                  </strong>

                  <small
                    data-de={`ab ${option.price} €/m²`}
                    data-tr={`${option.price} €/m²'den başlayan`}
                  >
                    ab {option.price} €/m²
                  </small>

                </button>
              ))}

            </div>

          </div>

          {/* PREISNIVEAU */}
          <div className="calculator-field">

            <label
              data-de="2. Preisniveau"
              data-tr="2. Fiyat seviyesi"
            >
              2. Preisniveau
            </label>

            <div className="price-level-options">

              {priceLevels.map((level, index) => (
                <button
                  key={level.name}
                  type="button"
                  className={`price-level-option ${
                    priceLevel === level.name ? 'active' : ''
                  }`}
                  onClick={() => {
                    setPriceLevel(level.name)
                    setMultiplier(level.multiplier)
                  }}
                >

                  <span>
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <strong
                    data-de={level.name}
                    data-tr={level.tr}
                  >
                    {level.name}
                  </strong>

                  <small
                    data-de={level.description}
                    data-tr={level.trDescription}
                  >
                    {level.description}
                  </small>

                </button>
              ))}

            </div>

          </div>

          {/* FLÄCHE */}
          <div className="calculator-field">

            <label
              htmlFor="floorArea"
              data-de="3. Fläche"
              data-tr="3. Alan"
            >
              3. Fläche
            </label>

            <div className="area-input">

              <input
                type="number"
                id="floorArea"
                min="1"
                placeholder="z.B. 50"
                data-de-placeholder="z.B. 50"
                data-tr-placeholder="örn. 50"
                value={area}
                onChange={(event) => setArea(event.target.value)}
              />

              <span>
                m²
              </span>

            </div>

          </div>

          {/* EXTRAS */}
          <div className="calculator-field">

            <label
              data-de="4. Zusatzleistungen"
              data-tr="4. Ek hizmetler"
            >
              4. Zusatzleistungen
            </label>

            <label className="calculator-checkbox">

              <input
                type="checkbox"
                id="oldFloor"
                checked={oldFloor}
                onChange={(event) => setOldFloor(event.target.checked)}
              />

              <span
                data-de="Alten Boden entfernen"
                data-tr="Eski zemini sökme"
              >
                Alten Boden entfernen
              </span>

              <strong>
                + 8 €/m²
              </strong>

            </label>

            <label className="calculator-checkbox">

              <input
                type="checkbox"
                id="floorPreparation"
                checked={floorPreparation}
                onChange={(event) =>
                  setFloorPreparation(event.target.checked)
                }
              />

              <span
                data-de="Untergrund vorbereiten"
                data-tr="Zemini hazırlama"
              >
                Untergrund vorbereiten
              </span>

              <strong>
                + 5 €/m²
              </strong>

            </label>

          </div>

          {/* RESULT */}
          <div className="calculator-result">

            <div>

              <p
                data-de="GESCHÄTZTER PREIS"
                data-tr="TAHMİNİ FİYAT"
              >
                GESCHÄTZTER PREIS
              </p>

              <strong>
                {estimatedPrice.toLocaleString('de-DE')} €
              </strong>

              <span
                className="price-estimate-note"
                data-de="Unverbindliche Preisindikation · Der endgültige Preis wird nach Besichtigung festgelegt."
                data-tr="Bağlayıcı olmayan fiyat göstergesidir · Kesin fiyat keşif sonrasında belirlenir."
              >
                Unverbindliche Preisindikation · Der endgültige Preis wird nach Besichtigung festgelegt.
              </span>

              <span
                data-de="Unverbindliche Preisschätzung"
                data-tr="Bağlayıcı olmayan yaklaşık fiyat"
              >
                Unverbindliche Preisschätzung
              </span>

            </div>

            <a
              href="#kontakt"
              className="calculator-button"
            >
              <span
                data-de="ANGEBOT ANFRAGEN"
                data-tr="TEKLİF TALEP ET"
              >
                ANGEBOT ANFRAGEN
              </span>

              <span>
                ↗
              </span>
            </a>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Preisrechner