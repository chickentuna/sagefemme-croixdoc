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
    maxWidth: 1390,
    display: 'flex',
    flexFlow: 'column',
    gap: 60
  }
})

function Reeducation () {
  const classes = useStyles()
  return (
    <PageWrapper
      title='Rééducation périnéale'
    >
      <div className={classes.content}>

        <p>Cette rééducation est accessible aux femmes de tout âge, en post-partum ou non, sans ordonnance si elle est effectuée par une sage-femme.</p>

        <p>Les séances sont remboursées par la sécurité sociale à 100% dans les 3 ans suivant un accouchement, et à 70% en dehors de cette période (complété par la mutuelle).</p>

        <ContentBlock
          imageUrl='images/reeducation.jpg'
          landscape
        >
          Première consultation&nbsp;: le bilan périnéal. Evaluation du plancher pelvien, de la ceinture abdominale et du rachis,
          exploration d’éventuels troubles (incontinence, douleurs),
          permettant de déterminer la stratégie thérapeutique pour les prochaines séances si celles-ci sont indiquées.
        </ContentBlock>

        <ContentBlock
          imageUrl='images/reeducation.jpg'
          landscape
          flip
        >
          Dans un premier temps, méthodes de rééducation “sur table”&nbsp;:
          <List>
            <li>rééducation manuelle</li>
            <li>électrostimulation</li>
            <li>pas de biofeedback par conviction professionnelle</li>
          </List>
          Ces séances permettent d’intégrer la connaissance et conscience du périnée et d’apprendre les exercices de rééducation périnéale.
        </ContentBlock>

        <ContentBlock
          imageUrl='images/reeducation.jpg'
          landscape
        >
          Une fois ces exercices et mouvements maîtrisés, la suite de la rééducation se fait sur tapis et/ou sur ballon,
          éventuellement couplés à des exercices de Yoga post-natal, afin d’apprendre à les intégrer dans la vie quotidienne.
        </ContentBlock>

      </div>
    </PageWrapper>
  )
}

export default React.memo(Reeducation)
