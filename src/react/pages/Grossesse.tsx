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

const dataTipEPP = (
  <>
    <p>
      L’entretien prénatal précoce fait partie des consultations "obligatoires" de votre grossesse. Il permet devous connaitre dans votre globalité,
      de connaître vos souhaits, vos spécificités, en fonction de votre vécu et de vos représentations personnelles,
      et de répondre à vos questions et éventuelles inquiétudes concernant, la grossesse, l'accouchement, la parentalité.
    </p>
    L’EPP permet également de préparer ensembles un plan de préparation à la naissance et d’élaborer ensembles votre projet de naissance.
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
            <li>Entretien prénatal précoce <InfoBubble text={dataTipEPP} /></li>
            <li>Préparation à la Naissance et à la Parentalité - Accouchement naturel</li>
            <li>Monitoring</li>
            <li>Surveillance à domicile d’une grossesse à risque, avec ou sans monitoring, sur prescription</li>
            <li>Diagnostic de début de travail, diagnostic de rupture de la poche des eaux</li>
            <li>Vaccinations de la femme enceinte et de son entourage</li>
            <li>Entretien postnatal{' '}
              <InfoBubble
                text={
                  <>
                    Entretien "obligatoire" depuis le 5 Septembre 2022, au même titre de l'entretien prénatal précoce.
                    Son but est de faire le point sur le vécu de votre grossesse, de votre accouchement,
                    de votre séjour en maternité, de votre retour à la maison, le but du ministère de la santé
                    étant de diminuer l'incidence de la dépression du post-partum, qui concerne, à l'heure actuelle,
                    une femme sur cinq. Cet entretien peut tout à fait être réalisé à domicile.
                  </>
                }
              />
              {' '}et séances postnatales{' '}
              <InfoBubble
                text={
                  <>
                    Basées sur le même principe que les séances de préparation à la naissance, vous avez droit à deux séances post-natales,
                    qui s'adapteront à vos besoins : allaitement, cris du nouveau-né, lien parent-enfant, Yoga post-natal etc.
                  </>
                }
              />
            </li>
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

// TODO: "appelle moi pour le texte"

export default React.memo(Grossesse)
