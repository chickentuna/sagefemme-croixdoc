import { faGraduationCap, faHeart } from '@fortawesome/free-solid-svg-icons'
import { differenceInYears, parse } from 'date-fns'
import React from 'react'
import { createUseStyles } from 'react-jss'
import ContentBlock from '../components/ContentBlock'
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

function calculateAge (dob:string):number {
  const date = parse(dob, 'dd/MM/yyyy', new Date())
  const age = differenceInYears(new Date(), date)
  return age
}

function About () {
  const classes = useStyles()
  const lucasAge = calculateAge('05/01/2017')
  const alphonseAge = calculateAge('27/01/2021')

  return (
    <>
      <PageWrapper
        title='Votre Sage-femme'
        helmet='À propos'
      >
        <div className={classes.content}>

          <div className={classes.blocks}>
            <ContentBlock
              imageUrl='images/portrait.jpg'
              flip
            >
              <h4>Fanchon RIVOIRE</h4>
              <List icon={faGraduationCap}>
                <li>Conventionnée secteur 1</li>
                <li>Diplôme d’Etat de Sage-Femme&nbsp;-&nbsp;2015</li>
                <li>Diplôme d’Etat d’Infirmier&nbsp;-&nbsp;2019</li>
                <li>DESIU échographique gynécologique & obstétricale&nbsp;-&nbsp;2024</li>
              </List>

            </ContentBlock>
            <ContentBlock
              imageUrl='images/mother.jpeg'
              landscape
            >
              <h4>Engagements associatifs & réseaux</h4>
              <List>
                <li>Collège National des Sages-Femmes (CNSF)</li>
                <li>Réseau Périnatalité d’Occitanie (RPO)</li>
                <li>Naître et Grandir en Languedoc Roussillon (NGLR)</li>
                <li>Association Nationale des Sages-Femmes Libérales (ANSFL)</li>
                <li>Communauté professionnelle territoriale de santé Montpellier et Bérange (CPTS)</li>
                <li>Collège Français d'Echographie Foetale (CFEF)</li>
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
                <li>Repérage et prise en charge des vulnérabilités chez la femme enceinte</li>
                <li>Suivi gynécologique de prévention &nbsp;-&nbsp;Niveau I et II.</li>
                <li>Réanimation néonatale</li>
                <li>Yoga prénatal et postnatal, professeur diplômée Fédération Française de Green Yoga®</li>
                <li>Garbhvati&nbsp;: Massage ayurvédique de la femme et de la femme enceinte</li>
                <li>Echographie gynécologique et obstétricale</li>
                <li>Dépistages des cancers de la femme</li>
                <li>Dermatologie gynécologique</li>
                <li>Vulvodynie & vaginisme : diagnostic et prise en charge</li>
              </List>

            </ContentBlock>
            <ContentBlock
              imageUrl='images/fanchon_lucas_alphonse.jpg'
              landscape
              flip
            >
              <h4>À propos de moi</h4>
              <List icon={faHeart}>
                <li>Maman de 2 enfants de {lucasAge} et {alphonseAge} {alphonseAge === 1 ? 'an' : 'ans'}</li>
                <li>3 ans d'allaitement</li>
              </List>

            </ContentBlock>
          </div>
        </div>
      </PageWrapper>
    </>
  )
}

export default React.memo(About)
