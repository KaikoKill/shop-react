import * as React from "react"
import { Link } from "react-router-dom"
import reactLogo from "@/assets/react.svg"
import { ModeToggle } from "../mode-toggler"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"
import { useTranslation } from 'react-i18next'

function Nav() {
  const { t, i18n } = useTranslation()
  const [lang, setLang] = React.useState<string>(() => {
    // idioma inicial: localStorage -> navegador -> 'es'
    const fromStorage = typeof window !== 'undefined' ? window.localStorage.getItem('lang') : null
    if (fromStorage) return fromStorage
    let nav = 'es'
    if (typeof navigator !== 'undefined') {
      const n = navigator as Navigator & { userLanguage?: string }
      nav = n.language || n.userLanguage || 'es'
    }
    return (nav?.slice(0, 2) || 'es').toLowerCase()
  })

  React.useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = lang
    }
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('lang', lang)
    }
    // cambiar idioma de i18next para refrescar traducciones
    i18n.changeLanguage(lang)
  }, [lang, i18n])

  return (
    <nav className="w-full border-b bg-background/90 backdrop-blur-sm fixed top-0 z-50" aria-label="Principal">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Izquierda: Logo */}
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <img src={reactLogo} alt="React" className="h-6 w-6" />
          <span className="inline truncate max-w-[200px] sm:max-w-none">ALLIANCE LOGISTICS & DISTRIBUTION</span>
        </Link>

        {/* Navegación para dispositivos grandes */}
        <div className="hidden md:flex ml-auto items-center gap-3">
          {/* Enlaces básicos usando shadcn NavigationMenu */}
          <NavigationMenu>
            <NavigationMenuList className="gap-1">
              <NavigationMenuItem>
                <Link to="/">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {t('nav.home')}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/marcas">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {t('nav.marcas')}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/Faq">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {t('nav.faq')}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link to="/about">
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    {t('nav.about')}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Selector de idioma (Dropdown como Select) */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className={navigationMenuTriggerStyle()}>
                <span className="uppercase">{lang}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-40">
              <DropdownMenuLabel>{t('nav.language')}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuRadioGroup value={lang} onValueChange={setLang}>
                <DropdownMenuRadioItem value="es">Español</DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="en">English</DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Modo claro/oscuro */}
          <ModeToggle />
        </div>

        {/* Menú móvil para dispositivos pequeños */}
        <div className="flex md:hidden ml-auto items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>{t('nav.menu')}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link to="/" className="block">
                <DropdownMenuLabel className="cursor-pointer hover:bg-accent">{t('nav.home')}</DropdownMenuLabel>
              </Link>
              <Link to="/marcas" className="block">
                <DropdownMenuLabel className="cursor-pointer hover:bg-accent">{t('nav.marcas')}</DropdownMenuLabel>
              </Link>
              <Link to="/Faq" className="block">
                <DropdownMenuLabel className="cursor-pointer hover:bg-accent">{t('nav.faq')}</DropdownMenuLabel>
              </Link>
              <Link to="/about" className="block">
                <DropdownMenuLabel className="cursor-pointer hover:bg-accent">{t('nav.about')}</DropdownMenuLabel>
              </Link>
              <DropdownMenuSeparator />
              <div className="px-2 py-1.5 flex items-center justify-between">
                <span>{t('nav.language')}:</span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="sm" className={navigationMenuTriggerStyle()}>
                      <span className="uppercase">{lang}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-40">
                    <DropdownMenuRadioGroup value={lang} onValueChange={setLang}>
                      <DropdownMenuRadioItem value="es">Español</DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="en">English</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div className="px-2 py-1.5 flex items-center justify-between">
              <span>{t('nav.theme')}:</span>
                <ModeToggle />
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  )
}

export default Nav;
