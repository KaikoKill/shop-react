import {Typewriter} from "react-simple-typewriter"

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b bg-background">
      {/* Fondo creativo con gradientes y blur */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[420px] w-[900px] -translate-x-1/2 rounded-[100%] bg-gradient-to-tr from-primary/25 via-fuchsia-500/20 to-cyan-500/20 blur-3xl opacity-70 dark:opacity-60 animate-in fade-in-0 duration-700"
      />
      {/* Sutil grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] [background:radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] dark:opacity-[0.08]"
      />

      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-in fade-in-0 slide-in-from-top-2 duration-500"
          >
            Nueva colección • Otoño 2025
          </span>

          <h1
            className="mt-6 text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl animate-in fade-in-0 zoom-in-95 duration-700"
          >
            Distribución y Representación de
            <span className="mx-2 bg-gradient-to-r from-primary via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent">
              Marcas 
            </span>
            con <Typewriter words={["Estilo","Clase", "Exclusividad"]}
                            loop={5}
                            cursor
                            cursorStyle="_"
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000} />
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-pretty text-base text-muted-foreground sm:text-lg animate-in fade-in-0 slide-in-from-bottom-2 duration-700 delay-100">
            Gracias a una amplia y consolidada presencia en los mercados locales de Estados Unidos distribuyendo y representando marcas de diferentes mercados y sectores, ALLIANCE LOGISTICS & DISTRIBUTION está capacitado para ejercer acciones de distribución y representación en toda la región de Estados Unidos , en primeras marcas a nivel mundial de todo tipo de productos y maquinarias especificas.
          </p>
        </div>

      </div>
    </section>
  )
}