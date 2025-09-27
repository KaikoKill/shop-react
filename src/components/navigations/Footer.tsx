import { Link } from "react-router-dom"
import { Facebook, Instagram, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTranslation } from 'react-i18next'

function Footer() {
  const { t } = useTranslation()
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Newsletter / CTA */}
        <div className="flex flex-col items-start gap-6 rounded-lg border bg-muted/20 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">{t('footer.newsletter_hint')}</p>
            <h3 className="text-xl font-semibold">{t('footer.newsletter_title')}</h3>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="w-full sm:w-auto"
            aria-label="Formulario de suscripción al boletín"
          >
            <div className="flex w-full max-w-md gap-2">
              <input
                type="email"
                required
                placeholder="tu@email.com"
                className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label="Correo electrónico"
              />
              <Button type="submit">{t('footer.subscribe')}</Button>
              
            </div>
          </form>
        </div>

        {/* Grid principal */}
        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Marca */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="text-lg font-semibold">
              ALLIANCE LOGISTICS & DISTRIBUTION
            </Link>
            <p className="mt-2 text-sm text-muted-foreground">
              Productos seleccionados con amor. Envíos rápidos y soporte cercano.
            </p>
          </div>

          {/* Columna: Tienda */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-muted-foreground">{t('footer.menu')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground transition-colors hover:text-foreground">
                  {t('footer.home')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground transition-colors hover:text-foreground">
                  {t('footer.about')}
                </Link>
              </li>
              <li>
                <Link to="/table" className="text-muted-foreground transition-colors hover:text-foreground">
                  {t('footer.products')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna: Soporte */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-muted-foreground">{t('footer.support')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  {t('footer.shipping')}
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  {t('footer.returns')}
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  {t('footer.help_center')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna: Legal */}
          <div>
            <h4 className="mb-3 text-sm font-semibold text-muted-foreground">{t('footer.legal')}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  {t('footer.terms')}
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground transition-colors hover:text-foreground">
                  {t('footer.cookies')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-10 flex flex-col items-start gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © 2023–2025 {t('brand')}. {t('footer.all_rights')}
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Twitter"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Twitter className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="mailto:hola@mitienda.com"
              aria-label="Email"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer