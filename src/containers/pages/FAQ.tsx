import Layout from '@/hocs/layouts/Layouts';
import Nav from "@/components/navigations/Nav";
import Footer from "@/components/navigations/Footer";
import Hero from '@/components/navigations/Hero';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export default function FAQ() {
  const faqData = [
    {
      question: "¿Cuáles son los tiempos de entrega?",
      answer: "Los tiempos de entrega varían según la ubicación y el tipo de producto. Generalmente, para productos en stock, realizamos entregas en 24-48 horas en área metropolitana y 3-5 días laborables a nivel nacional."
    },
    {
      question: "¿Ofrecen garantía en sus productos?",
      answer: "Sí, todos nuestros productos cuentan con garantía del fabricante. Adicionalmente, ofrecemos 30 días de garantía de satisfacción en todos nuestros productos."
    },
    {
      question: "¿Cuáles son los métodos de pago disponibles?",
      answer: "Aceptamos múltiples formas de pago: tarjetas de crédito y débito (Visa, Mastercard, American Express), transferencias bancarias, PayPal y pago contra entrega en área metropolitana."
    },
    {
      question: "¿Realizan entregas a nivel nacional?",
      answer: "Sí, realizamos entregas a todo el territorio nacional. Contamos con una red logística consolidada que nos permite llegar a cualquier destino con tiempos competitivos."
    },
    {
      question: "¿Cómo puedo hacer seguimiento a mi pedido?",
      answer: "Una vez confirmado tu pedido, recibirás un número de seguimiento por email y SMS. Puedes consultar el estado de tu envío en tiempo real a través de nuestra página web o llamando a nuestro centro de atención al cliente."
    },
    {
      question: "¿Qué pasa si mi producto llega defectuoso?",
      answer: "Si tu producto llega defectuoso o dañado, contáctanos inmediatamente. Realizamos el cambio sin costo adicional en un plazo máximo de 24 horas para el área metropolitana."
    },
    {
      question: "¿Ofrecen descuentos por volumen?",
      answer: "Sí, manejamos precios especiales para compras por volumen y clientes corporativos. Contáctanos directamente para conocer nuestras tarifas empresariales y descuentos disponibles."
    },
    {
      question: "¿Cuál es su política de devoluciones?",
      answer: "Aceptamos devoluciones dentro de los primeros 30 días después de la compra, siempre que el producto esté en condiciones originales. El cliente debe cubrir los gastos de envío para la devolución."
    },
    {
      question: "¿Trabajan con marcas internacionales?",
      answer: "Sí, somos distribuidores autorizados de múltiples marcas internacionales reconocidas. Trabajamos directamente con fabricantes para garantizar productos originales y precios competitivos."
    },
    {
      question: "¿Ofrecen servicio técnico post-venta?",
      answer: "Contamos con un equipo técnico especializado que brinda soporte post-venta para productos que lo requieran. El servicio incluye instalación, mantenimiento y reparaciones bajo garantía."
    },
    {
      question: "¿Cómo puedo contactar al servicio al cliente?",
      answer: "Puedes contactarnos a través de múltiples canales: teléfono (+34 900 123 456), email (hola@tiendacasa.com), chat en vivo en nuestra web, o visitando nuestras oficinas en Madrid."
    },
    {
      question: "¿Manejan productos personalizados?",
      answer: "Sí, ofrecemos servicios de personalización y productos a medida según las necesidades específicas del cliente. Contáctanos para evaluar tu proyecto y brindarte una cotización personalizada."
    }
  ];

  return (
    <Layout>
      <Nav />
      <Hero 
        badge="Preguntas Frecuentes • Soporte 24/7"
        title="¿Tienes dudas sobre nuestros"
        highlightedWord="Servicios?"
        typewriterWords={[""]}
        description="Encuentra respuestas rápidas a las preguntas más comunes sobre nuestros productos, servicios de entrega, políticas de garantía y mucho más. Si no encuentras lo que buscas, no dudes en contactarnos."
        showTypewriter={true}
        typewriterPrefix=""
      />

      {/* Sección de Preguntas Frecuentes */}
      <section className="border-b bg-background">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Preguntas Frecuentes</h2>
            <p className="mt-3 text-muted-foreground">
              Respuestas a las consultas más comunes de nuestros clientes.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqData.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b">
                <AccordionTrigger className="text-left font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA de contacto */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 rounded-xl border bg-muted/20 p-6 sm:flex-row">
            <div>
              <h3 className="text-xl font-semibold">¿No encuentras la respuesta que buscas?</h3>
              <p className="text-sm text-muted-foreground">Nuestro equipo está listo para ayudarte con cualquier consulta adicional.</p>
            </div>
            <div className="flex gap-3">
              <Button>Contactar Soporte</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </Layout>
  );
}