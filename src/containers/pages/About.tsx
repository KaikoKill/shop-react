import Layout from '@/hocs/layouts/Layouts';
import Nav from "@/components/navigations/Nav";
import Footer from "@/components/navigations/Footer";
import Hero from '@/components/navigations/Hero';
import { Button } from '@/components/ui/button';
import { Users, Award, Clock, BarChart3, Mail, Phone, MapPin } from 'lucide-react';

export default function About() {
  return (
    <Layout>
      <Nav />
      <Hero 
        badge="Nuestra Historia • Desde 2019"
        title="Distribución y Representación de"
        highlightedWord="Marcas"
        typewriterWords={["Confianza", "Excelencia", "Tradición"]}
        description="Con más de 5 años de experiencia, hemos consolidado nuestra presencia distribuyendo y representando marcas de prestigio en diferentes mercados y sectores. Nuestra capacidad de distribución y representación abarca toda la región, trabajando con primeras marcas a nivel mundial."
        showTypewriter={true}
      />

      {/* Nuestro equipo */}
      <section className="border-b bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Conoce nuestro equipo</h2>
            <p className="mt-3 text-muted-foreground">Profesionales apasionados dedicados a brindar la mejor experiencia.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { 
                name: 'Ana García', 
                role: 'Fundadora & CEO', 
                image: 'https://images.unsplash.com/photo-1494790108755-2616b60b40aa?q=80&w=400&auto=format&fit=crop',
                desc: 'Visionaria líder con más de 10 años en distribución comercial.'
              },
              { 
                name: 'Carlos Rodríguez', 
                role: 'Director de Operaciones', 
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop',
                desc: 'Experto en logística y optimización de procesos comerciales.'
              },
              { 
                name: 'María López', 
                role: 'Gerente de Atención al Cliente', 
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=400&auto=format&fit=crop',
                desc: 'Especialista en relaciones comerciales y satisfacción del cliente.'
              },
            ].map((member) => (
              <div key={member.name} className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 overflow-hidden rounded-full">
                    <img src={member.image} alt={member.name} className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-sm text-primary">{member.role}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Métricas de la empresa */}
      <section className="border-b bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Números que nos respaldan</h2>
            <p className="mt-3 text-muted-foreground">Resultados que demuestran nuestro compromiso y excelencia.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Users, value: '50K+', label: 'Clientes satisfechos' },
              { icon: Award, value: '1000+', label: 'Productos únicos' },
              { icon: Clock, value: '5+', label: 'Años de experiencia' },
              { icon: BarChart3, value: '99%', label: 'Satisfacción del cliente' },
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

      {/* Información de contacto */}
      <section className="border-b bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">¿Cómo contactarnos?</h2>
            <p className="mt-3 text-muted-foreground">Estamos aquí para ayudarte. Ponte en contacto con nosotros.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: MapPin, title: 'Ubicación', info: 'Madrid, España', desc: 'Visitanos en nuestras oficinas' },
              { icon: Phone, title: 'Teléfono', info: '+34 900 123 456', desc: 'Lunes a Viernes 9:00 - 18:00' },
              { icon: Mail, title: 'Email', info: 'hola@tiendacasa.com', desc: 'Te respondemos en 24 hours' },
            ].map(({ icon: Icon, title, info, desc }) => (
              <div key={title} className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm text-center">
                <Icon className="mx-auto mb-3 h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-1 text-primary font-medium">{info}</p>
                <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
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
              <h3 className="text-xl font-semibold">¿Listo para trabajar con nosotros?</h3>
              <p className="text-sm text-muted-foreground">Conecta tu marca con una distribuidora confiable y experimentada.</p>
            </div>
            <div className="flex gap-3">
              <Button>Contactar ahora</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  );
}
