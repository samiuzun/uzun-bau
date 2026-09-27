import { useEffect, useState } from 'react'

function ExchangeRates() {
  const [rates, setRates] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getRates = async () => {
      try {
        const response = await fetch(
          'https://open.er-api.com/v6/latest/EUR'
        )

        const data = await response.json()

        if (data.result !== 'success') {
          throw new Error('Kur verisi alınamadı')
        }

        const eurTry = data.rates.TRY
        const eurUsd = data.rates.USD
        const usdTry = eurTry / eurUsd

        setRates({
          eurTry,
          usdTry,
          eurUsd
        })

        setError(false)
      } catch (error) {
        console.log('Kur API hatası:', error)
        setError(true)
      }
    }

    getRates()

    const interval = setInterval(getRates, 5 * 60 * 1000)

    return () => clearInterval(interval)
  }, [])

  const formatRate = (value) => {
    if (!value) return '—'

    return value.toLocaleString('de-DE', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 4
    })
  }

  return (
    <section className="exchange-rates" id="wechselkurse">
      <div className="exchange-rates-inner">

        <div className="exchange-rates-header">
          <div>
            <p
              className="section-label"
              data-de="LIVE WECHSELKURSE"
              data-tr="CANLI DÖVİZ KURLARI"
            >
              LIVE WECHSELKURSE
            </p>

            <h2>
              <span
                data-de="Aktuelle"
                data-tr="Güncel"
              >
                Aktuelle
              </span>{' '}
              <span
                data-de="Kurse."
                data-tr="Kurlar."
              >
                Kurse.
              </span>
            </h2>
          </div>

          <div className="exchange-rates-status">
            <span className="status-dot"></span>

            <span
              data-de={rates ? 'Live aktualisiert' : 'Kurse werden geladen...'}
              data-tr={rates ? 'Canlı güncellendi' : 'Kurlar yükleniyor...'}
            >
              {rates ? 'Live aktualisiert' : 'Kurse werden geladen...'}
            </span>
          </div>
        </div>

        <div className="exchange-rates-grid">

          {/* EUR / TRY */}
          <div className="exchange-rate-card">
            <div className="exchange-rate-top">
              <span>EUR / TRY</span>
              <span>€ → ₺</span>
            </div>

            <div className="exchange-rate-value">
              {rates ? formatRate(rates.eurTry) : '...'}
            </div>

            <p
              data-de="1 Euro"
              data-tr="1 Euro"
            >
              1 Euro
            </p>
          </div>

          {/* USD / TRY */}
          <div className="exchange-rate-card">
            <div className="exchange-rate-top">
              <span>USD / TRY</span>
              <span>$ → ₺</span>
            </div>

            <div className="exchange-rate-value">
              {rates ? formatRate(rates.usdTry) : '...'}
            </div>

            <p
              data-de="1 US-Dollar"
              data-tr="1 ABD Doları"
            >
              1 US-Dollar
            </p>
          </div>

          {/* EUR / USD */}
          <div className="exchange-rate-card">
            <div className="exchange-rate-top">
              <span>EUR / USD</span>
              <span>€ → $</span>
            </div>

            <div className="exchange-rate-value">
              {rates ? formatRate(rates.eurUsd) : '...'}
            </div>

            <p
              data-de="1 Euro"
              data-tr="1 Euro"
            >
              1 Euro
            </p>
          </div>

        </div>

        <div className="exchange-rates-footer">
          <span
            data-de={
              rates
                ? 'Kurse erfolgreich geladen'
                : 'Kurse werden geladen...'
            }
            data-tr={
              rates
                ? 'Kurlar başarıyla yüklendi'
                : 'Kurlar yükleniyor...'
            }
          >
            {rates
              ? 'Kurse erfolgreich geladen'
              : 'Kurse werden geladen...'}
          </span>

          <span
            data-de="Quelle: ExchangeRate-API"
            data-tr="Kaynak: ExchangeRate-API"
          >
            Quelle: ExchangeRate-API
          </span>
        </div>

        {error && (
          <div
            className="exchange-error"
            data-de="Wechselkurse konnten momentan nicht geladen werden."
            data-tr="Döviz kurları şu anda yüklenemiyor."
          >
            Wechselkurse konnten momentan nicht geladen werden.
          </div>
        )}

      </div>
    </section>
  )
}

export default ExchangeRates