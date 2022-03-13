import './Header.scss'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

// selected has current-menu-item current_page_item classes

export function Header() {
  return (
    <div className='box'>
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
     
            <div className="span8"><div className="menu-responsive-container"><ul id="menu" className="sf-menu sf-js-enabled sf-shadow"><li id="menu-item-29" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home menu-item-29"><Link to="/home">Accueil</Link></li>
              <li id="menu-item-104" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-104"><Link to="doctors-3">Votre sage-femme</Link></li>
              <li id="menu-item-170" className="menu-item menu-item-type-post_type menu-item-object-page page_item page-item-27  menu-item-has-children menu-item-170"><Link to="activites" className="sf-with-ul">Activités<span className="sf-sub-indicator"> »</span></Link>
                <ul className="sub-menu" html-style="float: none; width: 22.3846em; display: none; visibility: hidden;">
                  <li id="menu-item-184" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-184" html-style="white-space: normal; float: left; width: 100%;"><a href="https://www.sage-femme-aix.fr/entretien-prenatal-precoce" html-style="float: none; width: auto;">Entretien prénatal précoce</a></li>
                  <li id="menu-item-183" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-183" html-style="white-space: normal; float: left; width: 100%;"><a href="https://www.sage-femme-aix.fr/preparation-naissance-parentalite" html-style="float: none; width: auto;">Préparation à la naissance et à la parentalité</a></li>
                  <li id="menu-item-182" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-182" html-style="white-space: normal; float: left; width: 100%;"><a href="https://www.sage-femme-aix.fr/suivi-grossesse-domicile" html-style="float: none; width: auto;">Suivi de grossesse à domicile</a></li>
                  <li id="menu-item-181" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-181" html-style="white-space: normal; float: left; width: 100%;"><a href="https://www.sage-femme-aix.fr/suivi-suites-couche-post-partum-conseils-allaitement-domicile" html-style="float: none; width: auto;">Suivi suites de couche – post partum</a></li>
                  <li id="menu-item-197" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-197" html-style="white-space: normal; float: left; width: 100%;"><a href="https://www.sage-femme-aix.fr/allaitement" html-style="float: none; width: auto;">Allaitement</a></li>
                  <li id="menu-item-438" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-438" html-style="white-space: normal; float: left; width: 100%;"><a href="https://www.sage-femme-aix.fr/le-portage-de-bebe" html-style="float: none; width: auto;">Le portage de bébé</a></li>
                </ul>
              </li>
              <li id="menu-item-164" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-164"><a href="https://www.sage-femme-aix.fr/page-d-exemple">Mon cabinet</a></li>
              <li id="menu-item-103" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-103"><a href="https://www.sage-femme-aix.fr/contacts">Contact</a></li>
            </ul></div></div>
            <div className="">        
              <div className="mt_menu_description">
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                  <i className="icon-phone"></i>  Téléphone: <strong>06 15 35 62 23</strong> <br /> <i className="icon-envelope"></i>
                  <a href="mailto:sylvie.guilbert@sage-femme-aix.fr?subject=sage-femme-aix.fr :">cabsagefemme-croix@gmail.com</a><br />
                </p>
              </div>
   
            </div>
     
          </div>
        </div>   
         
      </div>
      <Outlet />
    </div>
  )
}