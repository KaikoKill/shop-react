import Layout from '@/hocs/layouts/layouts'
import Nav from "@/components/navigations/Nav"
import Footer from "@/components/navigations/Footer"
import Hero from '@/components/navigations/Hero'
import { Button } from '@/components/ui/button'
import { CheckCircle2, Boxes, Truck, Package, Globe2, ShieldCheck, Clock, BarChart3, Layers, RotateCcw, Plug } from 'lucide-react'
import BrandCarousel from '@/components/marketing/BrandCarousel'

export default function Home() {
  return (
    <Layout>
      <Nav />
      <Hero/>
  <BrandCarousel interval={4000} />

      {/* Marcas que confían */}
      <section className="border-b bg-background">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-center text-xs uppercase tracking-widest text-muted-foreground">Marcas que confían</p>
          <div className="mt-6 grid grid-cols-2 place-items-center gap-6 opacity-80 sm:grid-cols-3 md:grid-cols-6">
            {['Acme', 'Techline', 'Nova', 'Aero', 'Quant', 'Polar'].map((brand) => (
              <div key={brand} className="flex h-10 items-center justify-center rounded bg-muted/40 px-3 text-sm font-medium text-muted-foreground">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestros servicios */}
      <section className="border-b bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Distribución de marcas, de punta a punta</h2>
            <p className="mt-3 text-muted-foreground">B2B y B2C. Desde el almacenaje hasta la última milla, con SLA y visibilidad en tiempo real.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Truck, title: 'Distribución B2B/B2C', desc: 'Cobertura nacional, capilaridad y ventanas de entrega por canal.' },
              { icon: Package, title: 'eCommerce Fulfillment', desc: 'Picking, packing, etiquetado y manejo de devoluciones.' },
              { icon: Boxes, title: 'Almacenaje 3PL', desc: 'Control de inventario, reabastecimiento y preparación de pedidos.' },
              { icon: Globe2, title: 'Cross-docking y última milla', desc: 'Optimización de rutas, cross-docking y trazabilidad.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm transition-colors">
                <Icon className="mb-3 h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Soluciones para marcas */}
      <section className="border-b bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Soluciones de valor agregado</h2>
            <p className="mt-3 text-muted-foreground">Adaptamos la operación a la identidad y canales de tu marca.</p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: Layers, title: 'VAS & Kitting', desc: 'Armado de kits, personalización, reetiquetado y empaques promocionales.' },
              { icon: RotateCcw, title: 'Logística inversa', desc: 'Gestión de devoluciones, reacondicionamiento y reintegración a inventario.' },
              { icon: Plug, title: 'Integraciones', desc: 'OMS/WMS y marketplaces. Integración EDI/API y reportes en tiempo real.' },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <Icon className="mb-3 h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo operamos */}
      <section className="border-b bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Cómo operamos</h2>
              <p className="mt-3 text-muted-foreground">Procesos claros y medibles para escalar tu operación con calidad y velocidad.</p>
              <ul className="mt-6 space-y-3 text-sm">
                {[
                  'Onboarding de marca y setup de catálogos',
                  'Recepción y control de calidad de mercancía',
                  'Gestión de inventarios y reabastecimiento',
                  'Preparación de pedidos y cross-docking',
                  'Distribución y última milla con tracking',
                  'Postventa y análisis de performance',
                ].map((step) => (
                  <li key={step} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                    <span className="text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex gap-3">
                <Button>Hablemos</Button>
                <Button variant="outline">Ver casos de éxito</Button>
              </div>
            </div>
            {/* Imagen coherente logística (placeholder) */}
            <div className="relative">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border bg-linear-to-b from-muted/40 to-muted/10 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop"
                  alt="Centro logístico con racks e inventario"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div aria-hidden className="pointer-events-none absolute -bottom-6 left-1/2 -z-10 h-24 w-[80%] -translate-x-1/2 rounded-[100%] bg-primary/20 blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Métricas */}
      <section className="border-b bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: ShieldCheck, value: '99.7%', label: 'Pedidos a tiempo' },
              { icon: Clock, value: '< 24h', label: 'Lead time medio' },
              { icon: BarChart3, value: 'x3', label: 'Capacidad escalable' },
              { icon: Truck, value: '120+', label: 'Rutas activas' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <Icon className="mb-2 h-5 w-5 text-primary" />
                <div className="text-2xl font-semibold">{value}</div>
                <div className="text-sm text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería de operación */}
      <section className="border-b bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Operación en imágenes</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1600&auto=format&fit=crop', alt: 'Equipo coordinando logística' },
              { src: 'https://i.pinimg.com/736x/e2/32/de/e232de05411cdcaab33b7d48aff8499e.jpg', alt: 'Almacén y preparación de pedidos' },
              { src: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1600&auto=format&fit=crop', alt: 'Transporte y distribución' },
            ].map((img) => (
              <div key={img.src} className="overflow-hidden rounded-xl border">
              <img src={img.src} alt={img.alt} className="h-full w-full object-cover transition duration-300 hover:scale-[1.02]" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 rounded-xl border bg-muted/20 p-6 sm:flex-row">
            <div>
              <h3 className="text-xl font-semibold">¿Listo para escalar tu distribución?</h3>
              <p className="text-sm text-muted-foreground">Conecta tu marca a una red logística confiable y medible.</p>
            </div>
            <div className="flex gap-3">
              <Button>Contactar</Button>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Layout>
  )
}
