import './Header.scss'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'

// selected has current-menu-item current_page_item classes

export default function Header() {

  const { pathname } = useLocation()

  const tabs = [
    {label: 'Acceuil', to: '/acceuil'},
    {label: 'Votre sage-femme', to: '/a-propos'},
    {label: 'Infos pratiques', to: '/infos-pratiques'},
    {label: 'Contact', to: '/contact'},
  ]

  return (
    <>
      <header id="header">
        <div className="container">
          <div className="row">

            <div className="span4">
              <a className="visible-desktop" style={{marginTop:15}} id="logo" href="https://www.sage-femme-aix.fr">
                <img width="230" height="50" src="https://www.sage-femme-aix.fr/wp-content/uploads/2014/03/Logo_job1.jpg" alt="Sage-femme  Aix-en-Provence" />
              </a>
              <a className="hidden-desktop" style={{marginTop:15}} id="logo_responsive" href="https://www.sage-femme-aix.fr">
                <img width="230" height="50" src="https://www.sage-femme-aix.fr/wp-content/uploads/2014/03/Logo_job1.jpg" alt="Sage-femme  Aix-en-Provence" />
              </a>
            </div>
            <span style={{float: 'right'}}>
        Fanchon RIVOIRE
            </span>
          </div>
        </div>
      </header>
      <div id="nav"> 
    
        <div className="container">
          <div className="row">
     
            <div className="span8">
              <div className="menu-responsive-container">
                <ul id="menu" className="sf-menu sf-js-enabled sf-shadow">
                  {tabs.map(({label, to}) => (
                    <li 
                      key={to} 
                      className={classNames(['menu-item', {'current-menu-item': ('/'+pathname.split('/')[1]) === (to)}])}>
                      <Link to={to}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">        
              <div className="mt_menu_description">
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  <i className="icon-phone">
                  </i>  Téléphone: <strong>06 15 35 62 23</strong> <br /> <i className="icon-envelope">
                    
                  </i>
                  <a href="mailto:sylvie.guilbert@sage-femme-aix.fr?subject=sage-femme-aix.fr :">cabsagefemme-croix@gmail.com</a>
                  <br />
                </p>
              </div>
   
            </div>
     
          </div>
        </div>   
         
      </div>
    </>
  )
}