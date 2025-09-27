import * as React from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslation } from 'react-i18next'

interface SlideDef { id: string; image: string; href?: string }

const SLIDES: SlideDef[] = [
  {
    id: 'fulfillment',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop',
    href: '#',
  },
  {
    id: 'network',
    image:
      'https://i.pinimg.com/1200x/31/53/c5/3153c51086f93e69eccb1782f65e712f.jpg',
    href: '#',
  },
  {
    id: 'brands',
    image:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop',
    href: '#',
  },
]

export default function BrandCarousel({ interval = 3500 }: { interval?: number }) {
  const { t } = useTranslation()
  const [index, setIndex] = React.useState(0)
  const timeoutRef = React.useRef<number | null>(null)
  const pausedRef = React.useRef(false)

  const clear = () => {
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
  }

  const next = React.useCallback(() => setIndex((i) => (i + 1) % SLIDES.length), [])
  const prev = React.useCallback(() => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length), [])

  React.useEffect(() => {
    clear()
    if (!pausedRef.current) {
      timeoutRef.current = window.setTimeout(next, interval)
    }
    return clear
  }, [index, interval, next])

  const handleMouseEnter = () => {
    pausedRef.current = true
    clear()
  }
  const handleMouseLeave = () => {
    pausedRef.current = false
    // relanzar ciclo
    timeoutRef.current = window.setTimeout(next, interval)
  }

  const onKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'ArrowRight') next()
    if (e.key === 'ArrowLeft') prev()
  }

  const slide = SLIDES[index]
  const title = t(`carousel.slides.${slide.id}.title`)
  const subtitle = t(`carousel.slides.${slide.id}.subtitle`)
  const ctaLabel = t(`carousel.slides.${slide.id}.cta`)

  return (
    <section
      className="relative isolate overflow-hidden border-b bg-background"
      role="region"
      aria-label={t('carousel.label')}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Fondo imagen */}
      <div
        className="relative h-[260px] w-full sm:h-[320px] md:h-[380px]"
        tabIndex={0}
        onKeyDown={onKeyDown}
        aria-roledescription="carousel"
        aria-live="polite"
      >
        {SLIDES.map((s, i) => (
          <img
            key={s.id}
            src={s.image}
            alt={t(`carousel.slides.${s.id}.title`)}
            className={
              'absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-out ' +
              (i === index ? 'opacity-100' : 'opacity-0')
            }
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/40 to-transparent" />
  {/* Controles Prev/Next (ocultos en pantallas pequeñas) */}
  <div className="pointer-events-none absolute inset-y-0 left-0 right-0 hidden items-center justify-between px-2 sm:flex">
          <button
            aria-label={t('carousel.prev')}
            onClick={prev}
            className="pointer-events-auto inline-flex size-9 items-center justify-center rounded-full border bg-background/70 text-foreground backdrop-blur transition hover:bg-background/90"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            aria-label={t('carousel.next')}
            onClick={next}
            className="pointer-events-auto inline-flex size-9 items-center justify-center rounded-full border bg-background/70 text-foreground backdrop-blur transition hover:bg-background/90"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Texto y controles */}
      <div className="pointer-events-none absolute inset-0 flex items-end">
        <div className="pointer-events-auto mx-auto w-full max-w-7xl px-4 pb-6 sm:px-6 lg:px-8">
          <div className="max-w-xl rounded-lg border bg-background/70 p-4 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <h3 className="text-lg font-semibold sm:text-xl">{title}</h3>
            {subtitle && (
              <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
            )}
            <a
              href={slide.href ?? '#'}
              className="mt-3 inline-flex text-sm font-medium text-primary underline-offset-4 hover:underline"
            >
              {ctaLabel}
            </a>
          </div>

          {/* Indicadores */}
          <div className="mt-3 flex items-center gap-2">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                aria-label={`Ir al slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={
                  'h-1.5 w-8 rounded-full transition-all ' +
                  (i === index ? 'bg-primary' : 'bg-muted hover:bg-muted-foreground/30')
                }
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
