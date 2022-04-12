import React from 'react'
import { createUseStyles } from 'react-jss'
import ContentBlock from '../components/ContentBlock'
import Dash from '../components/Dash'
import List from '../components/List'
import PageWrapper from '../components/PageWrapper'
import { Theme } from '../theme'

const useStyles = createUseStyles((theme: Theme) => ({
  content: {
    fontSize: 20,
    maxWidth: 1090
  },
  blocks: {
    display: 'flex',
    flexFlow: 'column',
    gap: 60
  },
  intro: {
    textAlign: 'justify',
    marginBottom: 60
  },
  qualifications: {
    width: '100%',
    display: 'flex',
    gap: 5,
    fontWeight: 'bold',
    fontSize: '16px',
    textAlign: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    [`@media (max-width: ${theme.verticalModeThreshold}px)`]: {
      flexDirection: 'column'
    }
  }
}))

function About () {
  const classes = useStyles()
  return (
    <PageWrapper
      title='Votre Sage-femme'
    >
      <div className={classes.content}>

        <div className={classes.blocks}>
          <div className={classes.qualifications}>
            <div>Conventionnée secteur 1</div>
            <Dash />
            <div>Diplôme d’Etat de Sage-Femme&nbsp;-&nbsp;2015</div>
            <Dash />
            <div>Diplôme d’Etat d’Infirmier&nbsp;-&nbsp;2019</div>
          </div>
          <ContentBlock
            imageUrl='images/portrait.jpg'
          >
            <h4>Engagements associatifs & réseaux</h4>
            <List>
              <li>Collège National des Sages-Femmes (CNSF)</li>
              <li>Réseau Périnatalité d’Occitanie (RPO)</li>
              <li>Naître et Grandir en Languedoc Roussillon (NGLR)</li>
              <li>L’Aube des Naissances (ADN) - Maison de Naissance en Occitanie</li>
              <li>Association Nationale des Sages-Femmes Libérales (ANSFL)</li>
              <li>Collectif Maisons de Naissances (CMDN)</li>
            </List>

          </ContentBlock>
          <ContentBlock
            imageUrl='images/chu-nimes.jpg'
            flip
            landscape
          >
            <h4>Expérience sage-femme</h4>
            <List>
              <li>Protection Maternelle et Infantile (PMI) - Béziers</li>
              <li>Maternité l’Etoile - Puyricard</li>
              <li>Protection Maternelle et Infantile (PMI) - Secteurs Paillade et Millénaire, Montpellier</li>
              <li>Polyclinique Saint-Louis - Ganges</li>
              <li>CH Joseph Imbert - Arles</li>
              <li>CHU Carémeau - Nîmes</li>
              <li>Clinique Clémentville - Montpellier</li>
            </List>
          </ContentBlock>
          <ContentBlock
            imageUrl='images/etudes.jpg'
          >
            <h4>Formations complémentaires</h4>
            <List>
              <li>Repérage et prise en charge des vulnérabilités chez la femme enceinte - 2018</li>
              <li>Suivi gynécologique de prévention - 2018</li>
              <li>Réanimation néonatale - 2022</li>
              <li>Yoga pré et post-natal - 2022</li>
              <li>Echographie gynécologique et obstétricale - en cours</li>
            </List>

          </ContentBlock>
        </div>
      </div>
    </PageWrapper>
  )
}

export default React.memo(About)
