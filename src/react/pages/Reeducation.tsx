import { faRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import React from 'react'
import { createUseStyles } from 'react-jss'
import ContentBlock from '../components/ContentBlock'
import InfoBubble from '../components/InfoBubble'
import List from '../components/List'
import PageWrapper from '../components/PageWrapper'

const useStyles = createUseStyles({
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
  }
})

function Reeducation () {
  const classes = useStyles()
  return (
    <PageWrapper
      title='Rééducation périnéale'
    >
      <div className={classes.content}>

        <p className={classes.intro}>
          Cette rééducation est accessible aux femmes de tout âge, en post-partum ou non, sans ordonnance si elle est effectuée par une sage-femme.
          Les séances sont remboursées par la sécurité sociale à 100% dans les 3 ans suivant un accouchement, et à 70% en dehors de cette période (complété par la mutuelle).
        </p>

        <div className={classes.blocks}>
          <ContentBlock
            imageUrl='images/help.jpg'
            landscape
          >
            <h4>Première consultation&nbsp;: le bilan périnéal</h4>
            Evaluation du plancher pelvien, de la ceinture abdominale et du rachis,
            exploration d’éventuels troubles (incontinence, douleurs),
            permettant de déterminer la stratégie thérapeutique pour les prochaines séances si celles-ci sont indiquées.
          </ContentBlock>

          <ContentBlock
            imageUrl='images/massage.jpg'
            landscape
            flip
          >
            <h4>Premières séances</h4>
            Méthodes de rééducation “sur table”, choisies selon le schéma thérapeutique déterminé lors de du bilan périnéal&nbsp;:
            <List>
              <li>rééducation manuelle</li>
              <li>électrostimulation</li>
              <li>biofeedback</li>
            </List>
            Ces séances permettent d’intégrer la connaissance et conscience du périnée et d’apprendre les exercices de rééducation périnéale.
          </ContentBlock>

          <ContentBlock
            imageUrl='images/Pilates.jpg'
            landscape
          >
            <h4>Dans un second temps</h4>
            <p style={{ textAlign: 'justify' }}>Une fois les exercices de contraction du plancher pelvien maîtrisés, la suite de la rééducation se fait sur tapis et/ou sur ballon,
              éventuellement couplés à des exercices de Yoga post-natal, afin d’apprendre à les intégrer dans la vie quotidienne.
            </p>
            <FontAwesomeIcon icon={faRightLong} />{' '}Éducation à l’auto-rééducation à domicile pour le maintien du tonus périnéal dans le temps, intégration des exercices à une routine.
          </ContentBlock>
        </div>
      </div>
    </PageWrapper>
  )
}

export default React.memo(Reeducation)
