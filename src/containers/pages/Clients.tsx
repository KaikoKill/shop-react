import Layout from '@/hocs/layouts/Layouts';
import Nav from "@/components/navigations/Nav";
import Footer from "@/components/navigations/Footer";
import Hero from '@/components/navigations/Hero';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star, Quote, TrendingUp, Users, MapPin, Calendar, ExternalLink } from 'lucide-react';

export default function Clients() {
  const clientTestimonials = [
    {
      company: "TechVision",
      industry: "Tecnología",
      logo: "TV",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3",
      name: "Carlos Mendoza",
      position: "CEO",
      testimonial: "Alliance Logistics transformó completamente nuestra cadena de distribución. Su expertise y red de contactos nos permitió expandirnos a 15 nuevos mercados en solo 8 meses.",
      rating: 5,
      results: "300% crecimiento en ventas",
      location: "Madrid, España",
      year: "2023-2024"
    },
    {
      company: "GlobalMart",
      industry: "Retail",
      logo: "GM",
      image: "https://images.unsplash.com/photo-1494790108755-2616b60b40aa?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3",
      name: "Ana Rodríguez",
      position: "Directora de Operaciones",
      testimonial: "La profesionalidad y dedicación del equipo de Alliance es excepcional. Nos ayudaron a optimizar nuestros costos de distribución en un 40% mientras mejorábamos los tiempos de entrega.",
      rating: 5,
      results: "40% reducción de costos",
      location: "Barcelona, España",
      year: "2022-2024"
    },
    {
      company: "InnovaHealth",
      industry: "Salud",
      logo: "IH",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop&ixlib=rb-4.0.3",
      name: "Dr. Miguel Torres",
      position: "Director Comercial",
      testimonial: "Gracias a Alliance Logistics, pudimos llevar nuestros productos médicos innovadores a hospitales y clínicas en toda Europa. Su conocimiento del sector salud es impresionante.",
      rating: 5,
      results: "25 países alcanzados",
      location: "Valencia, España",
      year: "2023-2024"
    }
  ];

  const partnerLogos = [
    { name: "Microsoft", logo: "MS" },
    { name: "Amazon", logo: "AM" },
    { name: "Google", logo: "GL" },
    { name: "Apple", logo: "AP" },
    { name: "Samsung", logo: "SM" },
    { name: "Sony", logo: "SN" },
    { name: "Nike", logo: "NK" },
    { name: "Adidas", logo: "AD" },
    { name: "Coca-Cola", logo: "CC" },
    { name: "Pepsi", logo: "PP" },
    { name: "BMW", logo: "BW" },
    { name: "Mercedes", logo: "MB" }
  ];

  const successMetrics = [
    { metric: "500+", label: "Marcas distribuidas", icon: Users },
    { metric: "50+", label: "Países alcanzados", icon: MapPin },
    { metric: "10M+", label: "Productos entregados", icon: TrendingUp },
    { metric: "99.8%", label: "Satisfacción del cliente", icon: Star }
  ];

  const caseStudies = [
    {
      company: "FashionForward",
      challenge: "Expansión internacional rápida",
      solution: "Red de distribución en 12 países europeos",
      result: "500% aumento en ventas internacionales",
      timeframe: "6 meses",
      industry: "Moda"
    },
    {
      company: "TechGadgets",
      challenge: "Optimización de costos logísticos",
      solution: "Centros de distribución estratégicos",
      result: "35% reducción en costos de envío",
      timeframe: "4 meses",
      industry: "Tecnología"
    },
    {
      company: "EcoProducts",
      challenge: "Distribución de productos sostenibles",
      solution: "Cadena de suministro verde certificada",
      result: "200% crecimiento en mercado eco",
      timeframe: "8 meses",
      industry: "Sostenibilidad"
    }
  ];

  return (
    <Layout>
      <Nav />
      <Hero 
        badge="Casos de Éxito • Testimonios Reales"
        title="Han sido clientes de"
        highlightedWord="Nosotros"
        typewriterWords={["Confianza", "Éxito", "Crecimiento"]}
        description="Descubre cómo hemos ayudado a más de 500 marcas a expandir su alcance, optimizar sus operaciones y alcanzar nuevos mercados. Estas son las historias reales de nuestros clientes y los resultados extraordinarios que hemos logrado juntos."
        showTypewriter={true}
        typewriterPrefix="nuestra"
      />

      {/* Logos de marcas asociadas */}
      <section className="border-b bg-background">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-8">Marcas que confían en nosotros</p>
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-12 gap-6 place-items-center">
            {partnerLogos.map((brand) => (
              <div key={brand.name} className="flex h-12 w-16 items-center justify-center rounded-lg bg-muted/40 text-sm font-bold text-muted-foreground hover:bg-muted/60 transition-colors">
                {brand.logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Métricas de éxito */}
      <section className="border-b bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Resultados que hablan por sí solos</h2>
            <p className="mt-3 text-muted-foreground">Números reales de nuestro impacto en el crecimiento de nuestros clientes.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {successMetrics.map(({ metric, label, icon: Icon }) => (
              <div key={label} className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm text-center">
                <Icon className="mx-auto mb-3 h-8 w-8 text-primary" />
                <div className="text-3xl font-bold mb-2">{metric}</div>
                <div className="text-sm text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios de clientes */}
      <section className="border-b bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Lo que dicen nuestros clientes</h2>
            <p className="mt-3 text-muted-foreground">Testimonios reales de empresarios que han transformado sus negocios con nosotros.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {clientTestimonials.map((testimonial, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.position}</CardDescription>
                      <Badge variant="secondary" className="mt-1">{testimonial.company}</Badge>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Quote className="h-8 w-8 text-primary/20 mb-3" />
                  <p className="text-muted-foreground mb-6 leading-relaxed">{testimonial.testimonial}</p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-green-500" />
                      <span className="font-medium text-green-700 dark:text-green-400">{testimonial.results}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-blue-500" />
                      <span className="text-muted-foreground">{testimonial.year}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-purple-500" />
                      <span className="text-muted-foreground">{testimonial.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">{testimonial.industry}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Casos de estudio */}
      <section className="border-b bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Casos de estudio destacados</h2>
            <p className="mt-3 text-muted-foreground">Proyectos reales que demuestran nuestro impacto transformador.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{study.company}</CardTitle>
                    <Badge>{study.industry}</Badge>
                  </div>
                  <CardDescription className="text-base">
                    <strong>Desafío:</strong> {study.challenge}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-1">Solución</h4>
                    <p className="text-sm">{study.solution}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-1">Resultado</h4>
                      <p className="text-sm font-medium text-green-600 dark:text-green-400">{study.result}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-1">Tiempo</h4>
                      <p className="text-sm">{study.timeframe}</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Ver caso completo
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 rounded-xl border bg-muted/20 p-8 sm:flex-row">
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-semibold mb-2">¿Listo para ser nuestro próximo caso de éxito?</h3>
              <p className="text-muted-foreground">Únete a las 500+ marcas que han transformado sus negocios con nosotros.</p>
            </div>
            <div className="flex gap-3">
              <Button size="lg">Iniciar conversación</Button>
              <Button variant="outline" size="lg">Ver más casos</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  );
}