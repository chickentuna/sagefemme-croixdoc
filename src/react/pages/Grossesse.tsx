import React, { ReactNode } from 'react'
import { createUseStyles } from 'react-jss'
import ContentBlock from '../components/ContentBlock'
import PageWrapper from '../components/PageWrapper'
import ReactTooltip from 'react-tooltip'
import './ReactTooltipHack.scss'
import List from '../components/List'
import InfoBubble from '../components/InfoBubble'

const useStyles = createUseStyles({
  content: {
    fontSize: 20,
    maxWidth: 1090,
    display: 'flex',
    flexFlow: 'column',
    gap: 60
  }
})

const dataTipGrossesse = (
  <>
    Effectuée dès le projet de grossesse, son but est de faire le point avec vous sur&nbsp;:
    <ul>
      <li>Votre état de santé actuel</li>
      <li>Les complications possibles de la grossesse à venir en fonction de vos facteurs de risque</li>
      <li>De proposer des mesures pour les éviter ou les minimiser</li>
      <li>Vos questions, vos éventuelles inquiétudes</li>
    </ul>
  </>
)
const dataTipPhysio = (
  <>
    <p>
      On appelle suivi semi-global un suivi rapproché par une même sage-femme tout au long de la grossesse,
      de ses tous débuts - voire avant par une consultation préconceptionnelle - jusqu'à plusieurs mois après la naissance,
      dans le but créer un climat d'écoute et de confiance sur lequel vous reposer.
    </p>

    S'il exclut le temps de l'accouchement en lui-même, il permet à cette sage-femme de bien vous connaitre et de vous apporter un soutien adapté à chaque étape,
    et notamment dès le retour de la maternité par des visites à domicile.
  </>
)
const dataTipBilan = (
  <>

    Il s’agit d’un bilan de santé générale, effectué en début de grossesse,
    s’accompagnant de conseils concernant l’hygiène de vie durant la grossesse&nbsp;: alimentation, sexualité, pratique sportive, orientation vers un examen bucco-dentaire, tabacologie&nbsp;…
  </>
)
const dataTipEPP = (
  <>
    <p>
      Si le bilan prénatal fait état de votre santé physique, l’entretien prénatal précoce fait état de votre santé psychique.
      Il permet de connaître vos souhaits, vos spécificités, en fonction de votre vécu et de vos représentations personnelles,
      et de répondre à vos questions et éventuelles inquiétudes.
    </p>
    L’EPP permet de préparer ensembles un plan de préparation à la naissance et d’élaborer ensembles votre projet de naissance.
  </>
)
const dataTipSortie = (
  <>
    Visite à domicile avec consultation mère-enfant, dans les 24h suivant votre sortie. Renouvelable autant de fois que nécessaire.
  </>
)

function Grossesse () {
  const classes = useStyles()

  return (
    <PageWrapper
      title='Grossesse et Post-partum'
    >
      <ReactTooltip />
      <div className={classes.content}>
        <ContentBlock
          imageUrl='images/couple.jpeg'
        >
          <List noPad>
            <li>Consultation pré-conceptionnelle <InfoBubble text={dataTipGrossesse} /></li>
            <li>Suivi de grossesse physiologique - suivi semi-global <InfoBubble text={dataTipPhysio} /></li>
            <li>Bilan prénatal <InfoBubble text={dataTipBilan} /></li>
            <li>Entretien prénatal précoce <InfoBubble text={dataTipEPP} /></li>
            <li>Préparation à la Naissance et à la Parentalité - Accouchement naturel</li>
            <li>Monitoring</li>
            <li>Surveillance à domicile d’une grossesse à risque, avec ou sans monitoring, sur prescription</li>
            <li>Diagnostic de début de travail, diagnostic de rupture de la poche des eaux</li>
            <li>Vaccinations de la femme enceinte et de son entourage</li>
          </List>
        </ContentBlock>

        <ContentBlock
          imageUrl='images/family.jpg'
          landscape
          flip
        >
          <List noPad>
            <li>Visite à domicile - retour de maternité</li>
            <li>Accompagnement sortie précoce <InfoBubble text={dataTipSortie} /></li>
            <li>Consultation du nouveau-né</li>
            <li>Surveillance de la bilirubinémie (ictère), pesées de contrôle</li>
            <li>Accompagnement et soutien de l’allaitement maternel</li>
            <li>Consultation post-natale (6-8 semaines après l’accouchement)</li>
            <li>Rééducation périnéale</li>
          </List>
        </ContentBlock>
      </div>
    </PageWrapper>
  )
}

export default React.memo(Grossesse)
