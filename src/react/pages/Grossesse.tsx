import React from 'react'
import { createUseStyles } from 'react-jss'
import ContentBlock from '../components/ContentBlock'
import PageWrapper from '../components/PageWrapper'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactTooltip from 'react-tooltip'

const useStyles = createUseStyles({
  content: {
    fontSize: 20,
    maxWidth: 1390,
    display: 'flex',
    flexFlow: 'column',
    gap: 60
  },
  tooltip: {
    maxWidth: 300,
    textAlign: 'justify',
    '& $ul': {
      margin: 0
    }
  }
})

const dataTip = `Effectuée dès le projet de grossesse, son but est de faire le point avec vous sur&nbsp;:
<ul>
  <li>Votre état de santé actuel</li>
  <li>Les complications possibles de la grossesse à venir en fonction de vos facteurs de risque</li>
  <li>De proposer des mesures pour les éviter ou les minimiser</li>
  <li>Vos questions, vos éventuelles inquiétudes</li>
</ul>
`

function Grossesse () {
  const classes = useStyles()
  return (
    <PageWrapper
      title='Grossesse et post-partum'
      style={{ background: 'white' }}
    >
      <div className={classes.content}>
        <ReactTooltip />
        <ContentBlock
          imageUrl='https://images.pexels.com/photos/8342884/pexels-photo-8342884.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        >
          <ul>
            <li>Consultation pré-conceptionnelle
              <FontAwesomeIcon
                data-class={classes.tooltip}
                data-html
                data-place='right'
                data-tip={dataTip}
                data-type='light'
                data-effect='solid'
                data-border
                data-border-color='#555555'
                icon={faInfoCircle}
              />
            </li>
            <li>Suivi de grossesse physiologique - suivi semi-global</li>
            <li>Bilan prénatal</li>
            <li>Entretien prénatal précoce</li>
            <li>Préparation à la Naissance et à la Parentalité - Accouchement naturel</li>
            <li>Monitoring</li>
            <li>Surveillance à domicile d’une grossesse à risque, avec ou sans monitoring, sur prescription</li>
            <li>Diagnostic de début de travail, diagnostic de rupture de la poche des eaux</li>
            <li>Vaccinations de la femme enceinte et de son entourage</li>
          </ul>
        </ContentBlock>
      </div>
    </PageWrapper>
  )
}

export default React.memo(Grossesse)
