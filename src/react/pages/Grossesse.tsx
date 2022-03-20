import React, { ReactNode } from 'react'
import { createUseStyles } from 'react-jss'
import ContentBlock from '../components/ContentBlock'
import PageWrapper from '../components/PageWrapper'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactTooltip from 'react-tooltip'
import './ReactTooltipHack.scss'
import { theme } from '../theme'

const useStyles = createUseStyles({
  content: {
    fontSize: 20,
    maxWidth: 1390,
    display: 'flex',
    flexFlow: 'column',
    gap: 60
  },
  tooltip: {
    maxWidth: 400,
    textAlign: 'justify',
    '& ul': {
      margin: 5
    }
  },
  info: {
    marginLeft: 0,
    '&:hover': {
      color: theme.medicalBlue
    }
  }
})

const dataTipGrossesse = `Effectuée dès le projet de grossesse, son but est de faire le point avec vous sur&nbsp;:
<ul>
  <li>Votre état de santé actuel</li>
  <li>Les complications possibles de la grossesse à venir en fonction de vos facteurs de risque</li>
  <li>De proposer des mesures pour les éviter ou les minimiser</li>
  <li>Vos questions, vos éventuelles inquiétudes</li>
</ul>`
const dataTipPhysio = 'S’il exclut le temps de l’accouchement, le suivi semi-global permet cependant de proposer un suivi très personnalisé, au plus proche des attentes des femmes et des couples. La durée de cet accompagnement semi global, débuté tôt dans la grossesse – voire avant par une consultation préconceptionnelle – et se terminant quelques mois après la naissance, permet d’établir une réelle relation de confiance et d’écoute.'
const dataTipBilan = 'Il s’agit d’un bilan de santé générale, effectué en début de grossesse, s’accompagnant de conseils concernant l’hygiène de vie durant la grossesse&nbsp;: alimentation, sexualité, pratique sportive, orientation vers un examen bucco-dentaire, tabacologie …'
const dataTipEPP = 'Si le bilan prénatal fait état de votre santé physique, l’entretien prénatal précoce fait état de votre santé psychique. Il permet de connaître vos souhaits, vos spécificités, et de répondre à vos questions et éventuelles inquiétudes. L’EPP permet de préparer ensembles un plan de préparation à la naissance et d’élaborer ensembles votre projet de naissance.'

function Grossesse () {
  const classes = useStyles()

  function getTooltip (text:string): ReactNode {
    return (
      <FontAwesomeIcon
        className={classes.info}
        data-class={classes.tooltip}
        data-html
        data-place='right'
        data-tip={text}
        data-type='light'
        data-effect='solid'
        data-border
        data-border-color='#555555'
        data-scroll-hide={false}
        icon={faInfoCircle}
      />
    )
  }

  return (
    <PageWrapper
      title='Grossesse et post-partum'
      style={{ background: 'white' }}
    >
      <div className={classes.content}>
        <ReactTooltip />
        <ContentBlock
          imageUrl='https://images.pexels.com/photos/8342884/pexels-photo-8342884.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          flip
        >
          <ul>
            <li>Consultation pré-conceptionnelle {getTooltip(dataTipGrossesse)}</li>
            <li>Suivi de grossesse physiologique - suivi semi-global {getTooltip(dataTipPhysio)}</li>
            <li>Bilan prénatal {getTooltip(dataTipBilan)}</li>
            <li>Entretien prénatal précoce {getTooltip(dataTipEPP)}</li>
            <li>Préparation à la Naissance et à la Parentalité - Accouchement naturel</li>
            <li>Monitoring</li>
            <li>Surveillance à domicile d’une grossesse à risque, avec ou sans monitoring, sur prescription</li>
            <li>Diagnostic de début de travail, diagnostic de rupture de la poche des eaux</li>
            <li>Vaccinations de la femme enceinte et de son entourage</li>
          </ul>
        </ContentBlock>

        <ContentBlock
          imageUrl='https://images.pexels.com/photos/8342884/pexels-photo-8342884.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
        >
          <ul>
            <li>Consultation pré-conceptionnelle
              <FontAwesomeIcon
                data-class={classes.tooltip}
                data-html
                data-place='right'
                data-tip={dataTipGrossesse}
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
