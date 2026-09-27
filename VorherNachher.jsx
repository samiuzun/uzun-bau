import { useEffect, useRef } from 'react'

function VorherNachher() {
  const sliderRef = useRef(null)
  const beforeImageRef = useRef(null)

  useEffect(() => {
    const slider = sliderRef.current
    const beforeImage = beforeImageRef.current

    if (!slider || !beforeImage) return

    const updateSlider = (clientX) => {
      const rect = slider.parentElement.getBoundingClientRect()

      let position = ((clientX - rect.left) / rect.width) * 100

      position = Math.max(0, Math.min(100, position))

      beforeImage.style.width = `${position}%`
      slider.style.left = `${position}%`
    }

    const handleMouseMove = (event) => {
      updateSlider(event.clientX)
    }

    const handleTouchMove = (event) => {
      if (event.touches.length > 0) {
        updateSlider(event.touches[0].clientX)
      }
    }

    const handleMouseDown = () => {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    }

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }

    const handleTouchStart = () => {
      document.addEventListener('touchmove', handleTouchMove)
      document.addEventListener('touchend', handleTouchEnd)
    }

    const handleTouchEnd = () => {
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }

    slider.addEventListener('mousedown', handleMouseDown)
    slider.addEventListener('touchstart', handleTouchStart, {
      passive: true
    })

    return () => {
      slider.removeEventListener('mousedown', handleMouseDown)
      slider.removeEventListener('touchstart', handleTouchStart)

      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)

      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [])

  return (
    <>
      <section
        id="vorher-nachher"
        className="before-after-section"
      >

        <div className="section-heading">

          <p
            data-de="VORHER / NACHHER"
            data-tr="ÖNCE / SONRA"
          >
            VORHER / NACHHER
          </p>

          <h2
            data-de="Der Unterschied spricht für sich."
            data-tr="Farkı görün."
          >
            Der Unterschied spricht für sich.
          </h2>

        </div>


        <div className="before-after-wrapper">

          <div className="before-after-image">

            {/* NACHHER */}
            <div className="after-image">

              <span
                className="before-after-label after-label"
                data-de="NACHHER"
                data-tr="SONRA"
              >
                NACHHER
              </span>

            </div>


            {/* VORHER */}
            <div
              ref={beforeImageRef}
              className="before-image"
            >

              <span
                className="before-after-label before-label"
                data-de="VORHER"
                data-tr="ÖNCE"
              >
                VORHER
              </span>

            </div>


            {/* SLIDER */}
            <div
              ref={sliderRef}
              className="before-after-slider"
            >

              <div className="slider-line"></div>

              <div className="slider-button">
                ↔
              </div>

            </div>

          </div>

        </div>


        <div className="before-after-info">

          <div>

            <span
              data-de="WOHNUNGSRENOVIERUNG"
              data-tr="DAİRE RENOVASYONU"
            >
              WOHNUNGSRENOVIERUNG
            </span>

            <h3
              data-de="Von alt zu modern."
              data-tr="Eskiden moderne."
            >
              Von alt zu modern.
            </h3>

          </div>

          <p
            data-de="Renovierung, Bodenverlegung und moderner Innenausbau aus einer Hand."
            data-tr="Renovasyon, zemin döşeme ve modern iç mekân uygulamaları tek elden."
          >
            Renovierung, Bodenverlegung und moderner Innenausbau aus einer Hand.
          </p>

        </div>

      </section>


      <div className="projects-bottom">

        <p
          data-de="Sie planen ein ähnliches Projekt?"
          data-tr="Benzer bir proje mi planlıyorsunuz?"
        >
          Sie planen ein ähnliches Projekt?
        </p>

        <a href="#kontakt">

          <span
            data-de="PROJEKT ANFRAGEN"
            data-tr="PROJE TALEP ET"
          >
            PROJEKT ANFRAGEN
          </span>

          <span>↗</span>

        </a>

      </div>
    </>
  )
}

export default VorherNachher