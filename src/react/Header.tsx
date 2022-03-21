import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { createUseStyles } from 'react-jss'
import { ReactComponent as Logo } from '../svg/logo.svg'

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
        { label: 'Grossesse et post-partum', to: 'grossesse-et-post-partum' },
        { label: 'Rééducation périnéale', to: 'reeducation-perineale' },
        { label: 'Gynécologie', to: 'gynecologie' },
        { label: 'Préparation à la naissance', to: 'pnp' },
        { label: 'Urgences', to: 'urgence' }
      ]
    },
    { label: 'Votre sage-femme', to: '/a-propos' },
    { label: 'Infos pratiques', to: '/infos-pratiques' },
    { label: 'Contact', to: '/contact' }
  ]

  const selectedTab = tabs.find(tab => tab.to === pathname) ?? tabs[0]

  return (
    <header id='header'>
      <div className='header-container container'>

        <div className='header-left'>
          <div className='site-name'>
            <h1 className='title'>
              Sage-femme libérale
            </h1>
            <h2 className='subtitle'>
              Fanchon RIVOIRE
            </h2>
          </div>

          <Logo className='logo' />

          <nav id='navbar' className='navbar order-last order-lg-0'>
            <ul>
              {tabs.map(({ label, to, tabs }) => (

                <li className={classNames({ dropdown: tabs != null })} key={to}>
                  <Link
                    to={to}
                    className={classNames(['nav-link', { active: to === selectedTab.to }])}
                  >
                    {label}
                    {tabs != null && <i className='bi bi-chevron-down' />}
                  </Link>
                  {tabs != null && (
                    <ul>
                      {tabs.map(({ label, to }) => (
                        <li key={to}>
                          <Link to={to}>
                            {label}
                          </Link>
                        </li>
                      ))}

                    </ul>
                  )}
                </li>
              ))}
            </ul>
            {/* TODO: why is this an i ? */}
            <i className='bi bi-list mobile-nav-toggle' />
          </nav>
        </div>

        <div className='header-right'>
          <a href='#appointment' className='appointment-btn scrollto'><span className='d-none d-md-inline'>Make an</span> Appointment</a>
        </div>

      </div>
    </header>
  )
}

export default React.memo(Header)
