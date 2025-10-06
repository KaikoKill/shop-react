import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  es: {
    translation: {
      brand: 'Mi Tienda',
      carousel: {
        label: 'Carrusel de publicidad',
        prev: 'Anterior',
        next: 'Siguiente',
        slides: {
          fulfillment: { title: 'Fulfillment a tu medida', subtitle: 'Picking y packing con SLA asegurado', cta: 'Conoce más' },
          network: { title: 'Red de distribución nacional', subtitle: 'Última milla con tracking en tiempo real', cta: 'Rutas activas' },
          brands: { title: 'Impulsamos marcas líderes', subtitle: 'Alianzas estratégicas y crecimiento sostenible', cta: 'Ver casos' },
        },
      },
      nav: {
        home: 'Inicio',
        marcas: 'Marcas',
        faq: 'Preguntas Frecuentes',
        about: 'Sobre Nosotros',
        language: 'Idioma',
        menu: 'Menu',
        theme: 'Tema',
        
      },
      home: {
        title: 'Página de Inicio',
        table: 'Tabla',
      },
      footer: {
        newsletter_hint: 'Únete a nuestro boletín',
        newsletter_title: 'Ofertas, novedades y contenido exclusivo',
        subscribe: 'Suscribirme',
        menu: 'Menu',
        support: 'Soporte',
        legal: 'Legal',
        home: 'Inicio',
        about: 'Sobre Nosotros',
        products: 'Productos',
        shipping: 'Envíos y Entregas',
        returns: 'Devoluciones',
        help_center: 'Centro de Ayuda',
        terms: 'Términos y Condiciones',
        privacy: 'Política de Privacidad',
        cookies: 'Cookies',
        all_rights: 'Todos los derechos reservados.'
      }
    }
  },
  en: {
    translation: {
      brand: 'My Store',
      carousel: {
        label: 'Advertising carousel',
        prev: 'Previous',
        next: 'Next',
        slides: {
          fulfillment: { title: 'Fulfillment tailored to you', subtitle: 'Picking and packing with guaranteed SLAs', cta: 'Learn more' },
          network: { title: 'Nationwide distribution network', subtitle: 'Last-mile with real-time tracking', cta: 'Active routes' },
          brands: { title: 'We boost leading brands', subtitle: 'Strategic partnerships and sustainable growth', cta: 'See cases' },
        },
      },
      nav: {
        home: 'Home',
        marcas: 'Brands',
        faq: 'FAQ',
        about: 'About Us',
        language: 'Language',
        menu: 'Menu',
        theme: 'Theme',
      },
      home: {
        title: 'Home Page',
        table: 'Table',
      },
      footer: {
        newsletter_hint: 'Join our newsletter',
        newsletter_title: 'Deals, news and exclusive content',
        subscribe: 'Subscribe',
        menu: 'Menu',
        support: 'Support',
        legal: 'Legal',
        home: 'Home',
        about: 'About',
        products: 'Products',
        shipping: 'Shipping & Delivery',
        returns: 'Returns',
        help_center: 'Help Center',
        terms: 'Terms & Conditions',
        privacy: 'Privacy Policy',
        cookies: 'Cookies',
        all_rights: 'All rights reserved.'
      }
    }
  },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    interpolation: { escapeValue: false },
  })

export default i18n
