import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { createUseStyles } from 'react-jss'
import { ReactComponent as Logo } from '../svg/logo.svg'
import MedicioButton from './components/MedicioButton/MedicioButton'

interface Tab {
  label: string,
  to: string,
  tabs?: Tab[]
}

export function Header () {
  const { pathname } = useLocation()

  const tabs: Tab[] = [
    {
      label: 'Accueil',
      to: '/',
      tabs: [
        { label: 'Grossesse et post-partum', to: '/grossesse-et-post-partum' },
        { label: 'Rééducation périnéale', to: '/reeducation-perineale' },
        { label: 'Gynécologie', to: '/gynecologie' },
        { label: 'Préparation à la naissance', to: '/pnp' }
      ]
    },
    { label: 'Votre sage-femme', to: '/a-propos' },
    { label: 'Urgences', to: '/urgences' },
    { label: 'Infos pratiques', to: '/infos-pratiques' },
    { label: 'Contact', to: '/contact' },
    { label: 'Documents utiles', to: '/documents-utiles' }
  ]

  // TODO: SEO stuff like sitemap?

  const selectedTab = {
    '/quand-aller-aux-urgences': '/urgences',
    '/tarifs': '/infos-pratiques',
  }[pathname] ?? tabs.find(tab => tab.to === pathname || tab.tabs?.find(subtab => subtab.to === pathname) != null)?.to

  function handleClick () {
    if (window.matchMedia('(max-width: 991px)').matches) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).toggleNavBarMobile()
    }
  }

  return (
    <header id='header'>
      <div className='header-container container'>

        <div className='header-left'>
          <Link className='site-name' to='/'>
            <h2 className='title'>
              Sage-femme libérale
            </h2>
            <h2 className='subtitle'>
              Fanchon RIVOIRE
            </h2>
          </Link>

          <Logo className='logo' />

          <nav id='navbar' className='navbar order-last order-lg-0'>
            <ul>
              {tabs.map(({ label, to, tabs: subtabs }) => (
                <li className={classNames({ dropdown: subtabs != null })} key={to}>
                  <Link
                    to={to}
                    className={classNames(['nav-link', { active: to === selectedTab }])}
                    onClick={subtabs == null ? handleClick : undefined}
                  >
                    {label}
                    {subtabs != null && <i className='bi bi-chevron-down' />}
                  </Link>
                  {subtabs != null && (
                    <ul>
                      <li className='tab-as-subtab'>
                        <Link to={to} onClick={handleClick}>
                          {label}
                        </Link>
                      </li>
                      {subtabs.map(({ label, to }) => (
                        <li key={to}>
                          <Link to={to} onClick={handleClick}>
                            {label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <i className='bi bi-list mobile-nav-toggle' />
          </nav>
        </div>

        <div className='header-right'>
          <MedicioButton to='404' fontSize={14}>Prendre Rendez-vous</MedicioButton>
        </div>

      </div>
    </header>
  )
}

export default React.memo(Header)
