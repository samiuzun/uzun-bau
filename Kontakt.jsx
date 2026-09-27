import { useState } from 'react'

function Kontakt() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch(
        'https://formspree.io/f/xrpzryar',
        {
          method: 'POST',
          body: formData,
          headers: {
            Accept: 'application/json'
          }
        }
      )

      if (!response.ok) {
        throw new Error('Form gönderilemedi.')
      }

      setSubmitted(true)
      form.reset()

    } catch (error) {
      console.error(error)
      alert('Die Anfrage konnte nicht gesendet werden.')
    }
  }

  return (
    <section
      id="kontakt"
      className="contact"
    >

      <div className="contact-top">

        <div className="contact-label">

          <p
            data-de="KONTAKT"
            data-tr="İLETİŞİM"
          >
            KONTAKT
          </p>

          <span>
            04 / 06
          </span>

        </div>

        <div className="contact-title">

          <h2
            data-de="Sie haben ein<br><span>Projekt?</span>"
            data-tr="Bir projeniz<br><span>mi var?</span>"
          >
            Sie haben ein
            <br />
            <span>
              Projekt?
            </span>
          </h2>

          <p
            data-de="Erzählen Sie uns kurz von Ihrem Vorhaben. Wir melden uns bei Ihnen."
            data-tr="Projenizden kısaca bahsedin. Ardından sizinle iletişime geçelim."
          >
            Erzählen Sie uns kurz von Ihrem Vorhaben.
            Wir melden uns bei Ihnen.
          </p>

        </div>

      </div>

      <div className="contact-main">

        {/* CONTACT INFO */}
        <div className="contact-info">

          <div className="contact-info-item">

            <span
              data-de="E-MAIL"
              data-tr="E-POSTA"
            >
              E-MAIL
            </span>

            <a href="mailto:info@uzun-bau.de">
              info@uzun-bau.de
            </a>

          </div>

          <div className="contact-info-item">

            <span
              data-de="TELEFON"
              data-tr="TELEFON"
            >
              TELEFON
            </span>

            <a href="tel:+490000000000">
              +49 000 0000000
            </a>

          </div>

          <div className="contact-info-item">

            <span
              data-de="ARBEITSBEREICH"
              data-tr="HİZMET BÖLGESİ"
            >
              ARBEITSBEREICH
            </span>

            <p
              data-de="Solingen • Düsseldorf • NRW"
              data-tr="Solingen • Düsseldorf • NRW"
            >
              Solingen • Düsseldorf • NRW
            </p>

          </div>

        </div>

        {/* OFFER FORM */}
        <form
          className="offer-form"
          id="offerForm"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >

          {submitted && (
            <div
              className="form-success"
              id="formSuccess"
            >

              <div className="form-success-number">
                01
              </div>

              <div>

                <p
                  data-de="ANFRAGE GESENDET"
                  data-tr="TALEBİNİZ GÖNDERİLDİ"
                >
                  ANFRAGE GESENDET
                </p>

                <h3
                  data-de="Vielen Dank."
                  data-tr="Teşekkür ederiz."
                >
                  Vielen Dank.
                </h3>

                <span
                  data-de="Wir haben Ihre Anfrage erhalten und melden uns so schnell wie möglich bei Ihnen."
                  data-tr="Talebinizi aldık. En kısa sürede sizinle iletişime geçeceğiz."
                >
                  Wir haben Ihre Anfrage erhalten
                  und melden uns so schnell wie möglich
                  bei Ihnen.
                </span>

              </div>

            </div>
          )}

          {/* NAME */}
          <div className="form-row">

            <div className="form-group">

              <label
                htmlFor="vorname"
                data-de="VORNAME"
                data-tr="AD"
              >
                VORNAME
              </label>

              <input
                type="text"
                id="vorname"
                name="vorname"
                placeholder="Max"
                required
              />

            </div>

            <div className="form-group">

              <label
                htmlFor="nachname"
                data-de="NACHNAME"
                data-tr="SOYAD"
              >
                NACHNAME
              </label>

              <input
                type="text"
                id="nachname"
                name="nachname"
                placeholder="Mustermann"
                required
              />

            </div>

          </div>

          {/* EMAIL / PHONE */}
          <div className="form-row">

            <div className="form-group">

              <label
                htmlFor="email"
                data-de="E-MAIL"
                data-tr="E-POSTA"
              >
                E-MAIL
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="max@beispiel.de"
                required
              />

            </div>

            <div className="form-group">

              <label
                htmlFor="telefon"
                data-de="TELEFON"
                data-tr="TELEFON"
              >
                TELEFON
              </label>

              <input
                type="tel"
                id="telefon"
                name="telefon"
                placeholder="+49 ..."
              />

            </div>

          </div>

          {/* SERVICE */}
          <div className="form-group">

            <label
              htmlFor="service"
              data-de="PROJEKTART"
              data-tr="PROJE TÜRÜ"
            >
              PROJEKTART
            </label>

            <select
              id="service"
              name="service"
              required
            >
              <option
  value=""
  data-de="Bitte auswählen"
  data-tr="Lütfen seçin"
>
  Bitte auswählen
</option>

              <option value="boden">
                Bodenverlegung
              </option>

              <option value="renovierung">
                Renovierung
              </option>

              <option value="innenausbau">
                Innenausbau
              </option>

              <option value="trockenbau">
                Trockenbau
              </option>

              <option value="montage">
                Montage
              </option>

              <option value="komplett">
                Komplettsanierung
              </option>
            </select>

          </div>

          {/* LOCATION */}
          <div className="form-row">

            <div className="form-group">

              <label
                htmlFor="plz"
                data-de="PLZ"
                data-tr="POSTA KODU"
              >
                PLZ
              </label>

              <input
                type="text"
                id="plz"
                name="plz"
                placeholder="42651"
                required
              />

            </div>

            <div className="form-group">

              <label
                htmlFor="ort"
                data-de="ORT"
                data-tr="ŞEHİR"
              >
                ORT
              </label>

              <input
                type="text"
                id="ort"
                name="ort"
                placeholder="Solingen"
                required
              />

            </div>

          </div>

          {/* MESSAGE */}
          <div className="form-group">

            <label
              htmlFor="nachricht"
              data-de="ERZÄHLEN SIE UNS VON IHREM PROJEKT"
              data-tr="PROJENİZDEN BAHSEDİN"
            >
              ERZÄHLEN SIE UNS VON IHREM PROJEKT
            </label>

            <textarea
              id="nachricht"
              name="nachricht"
              rows="6"
              placeholder="..."
              required
            />

          </div>

          {/* PROJECT DETAILS */}
          <div className="form-row">

            <div className="form-group">

              <label
                htmlFor="flaeche"
                data-de="CA. FLÄCHE (M²)"
                data-tr="YAKLAŞIK ALAN (M²)"
              >
                CA. FLÄCHE (M²)
              </label>

              <input
                type="number"
                id="flaeche"
                name="flaeche"
                placeholder="z. B. 85"
                min="1"
              />

            </div>

            <div className="form-group">

              <label
                htmlFor="objekt"
                data-de="OBJEKTART"
                data-tr="MEKÂN TÜRÜ"
              >
                OBJEKTART
              </label>

              <select
                id="objekt"
                name="objekt"
              >
                <option
  value=""
  data-de="Bitte auswählen"
  data-tr="Lütfen seçin"
>
  Bitte auswählen
</option>

                <option value="wohnung">
                  Wohnung
                </option>

                <option value="haus">
                  Haus
                </option>

                <option value="buero">
                  Büro
                </option>

                <option value="gewerbe">
                  Gewerbeobjekt
                </option>
              </select>

            </div>

          </div>

          {/* START DATE */}
          <div className="form-group">

            <label
              htmlFor="startdatum"
              data-de="GEWÜNSCHTER BEGINN"
              data-tr="İSTENEN BAŞLANGIÇ TARİHİ"
            >
              GEWÜNSCHTER BEGINN
            </label>

            <input
              type="date"
              id="startdatum"
              name="startdatum"
            />

          </div>

          {/* FILE UPLOAD */}
          <div className="form-group file-upload-group">

            <label
              htmlFor="projektfoto"
              data-de="PROJEFOTOS / DATEIEN"
              data-tr="PROJE FOTOĞRAFLARI / DOSYALAR"
            >
              PROJEFOTOS / DATEIEN
            </label>

            <div className="file-upload">

              <input
                type="file"
                id="projektfoto"
                name="projektfoto"
                accept="image/*,.pdf"
                multiple
              />

              <label
                htmlFor="projektfoto"
                className="file-upload-button"
              >
                <span
                  data-de="DATEIEN AUSWÄHLEN"
                  data-tr="DOSYA SEÇ"
                >
                  DATEIEN AUSWÄHLEN
                </span>

                <span>
                  ＋
                </span>
              </label>

              <div
                className="file-upload-name"
                id="fileUploadName"
              >
                <span
                  data-de="Keine Dateien ausgewählt"
                  data-tr="Henüz dosya seçilmedi"
                >
                  Keine Dateien ausgewählt
                </span>
              </div>

            </div>

          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="offer-submit"
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
          </button>

        </form>

      </div>

    </section>
  )
}

export default Kontakt