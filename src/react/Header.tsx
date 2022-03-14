import './FontAwesome.scss'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import classNames from 'classnames'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  header: {
    background: 'white',
  },
  container: {
    display: 'flex',
    marginRight: 20,
    marginLeft: 20,
    justifyContent: 'space-between',
    flexWrap: 'wrap'
  },
  nav: {
    color: 'white',
    position: 'relative'
  },
  span4: {
    width: 300,
    marginTop: 15
  },
  logo: {
    display: 'block',
    padding: 0,
    position: 'relative',
    cursor: 'pointer'
  },
  sfMenu: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    marginTop: 10,
    flexWrap: 'wrap'
  },
  menuItem: {
    listStyle: 'none',
    position: 'relative',
    '& a': {
      fontSize: 13,
      textDecoration: 'none',
      padding: [21, 15, 20, 15],
      margin: 0,
      display: 'block',
      position: 'relative',
      fontWeight: 400,
      borderTop: '1px solid transparent',
      transitionDuration: '.1s,.1s',
      transitionProperty: 'color,background',
      transitionTimingFunction: 'linear,ease-in',
      color: 'grey',
      '&:hover': {
        borderTop: '1px solid #7db6d3',
        color: '#7db6d3',
      }
    }
  },
  currentMenuItem: {
    '& a': {
      borderTop: '1px solid #7db6d3',
      color: '#7db6d3',
      marginBottom: 0,
      transitionProperty: 'color, background',
      transitionDuration: '0.1s, 0.1s',
      transitionTimingFunction: 'linear, ease-in'
    }
  },
  mtMenuDescription: {
    color: 'black',
    '& p': {
      fontSize: 13,
      margin: 0,
      padding: [16, 0, 15],
      textAlign: 'right'
    }
  }
})

export function Header() {

  const { pathname } = useLocation()

  const classes = useStyles()

  const tabs = [
    {label: 'Accueil', to: '/'},
    {label: 'Votre sage-femme', to: '/a-propos'},
    {label: 'Infos pratiques', to: '/infos-pratiques'},
    {label: 'Contact', to: '/contact'},
  ]

  const selectedTab = tabs.find(tab => tab.to === pathname) ?? tabs[0]

  return (
    <>
      <header className={classes.header}>
        <div className={classes.container}>

          <div className={classes.span4}>
            <a id="logo" href="https://www.sage-femme-aix.fr">
              <img width="230" height="50" src="https://www.sage-femme-aix.fr/wp-content/uploads/2014/03/Logo_job1.jpg" alt="Sage-femme  Aix-en-Provence" />
            </a>
          </div>
          <span >
        Fanchon RIVOIRE
          </span>
        </div>
      </header>
      <div className={classes.nav}> 
    
        <div className={classes.container}>
          <ul className={classes.sfMenu}>
            {tabs.map(({label, to}) => (
              <li
                key={to} 
                className={classNames([classes.menuItem, {[classes.currentMenuItem]: to === selectedTab.to}])}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>

          <div>
            <div className={classes.mtMenuDescription}>
              <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                <i className="icon-phone">
                </i>  Téléphone: <strong>06 15 35 62 23</strong> <br /> <i className="icon-envelope">
                    
                </i>
                <a href="mailto:sagefemme-croixdoc@gmail.com">sagefemme-croixdoc@gmail.com</a>
                <br />
              </p>
            </div>
   
          </div>
     
        </div>
      </div>
    </>
  )
}

export default React.memo(Header)