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
            imageUrl='https://image.shutterstock.com/z/stock-photo-woman-with-incontinence-problem-with-help-on-paper-urinary-incontinence-concept-1820144498.jpg'
            landscape
          >
            <h4>Première consultation&nbsp;: le bilan périnéal</h4>
            Evaluation du plancher pelvien, de la ceinture abdominale et du rachis,
            exploration d’éventuels troubles (incontinence, douleurs),
            permettant de déterminer la stratégie thérapeutique pour les prochaines séances si celles-ci sont indiquées.
          </ContentBlock>

          <ContentBlock
            imageUrl='https://image.shutterstock.com/z/stock-photo-physiotherapist-checking-patients-pelvis-alignment-in-bright-office-156707939.jpg'
            landscape
            flip
          >
            <h4>Premières séances</h4>
            Méthodes de rééducation “sur table”, selon vos besoins évalués lors de du bilan périnéal&nbsp;:
            <List>
              <li>rééducation manuelle</li>
              <li>électrostimulation</li>
              <li>pas de biofeedback par conviction professionnelle</li>
            </List>
            Ces séances permettent d’intégrer la connaissance et conscience du périnée et d’apprendre les exercices de rééducation périnéale.
          </ContentBlock>

          <ContentBlock
            imageUrl='https://image.shutterstock.com/image-photo/woman-doing-pilates-exercises-fit-600w-342677159.jpg'
            landscape
          >
            <h4>Dans un second temps</h4>
            Une fois ces exercices et mouvements maîtrisés, la suite de la rééducation se fait sur tapis et/ou sur ballon,
            éventuellement couplés à des exercices de Yoga post-natal, afin d’apprendre à les intégrer dans la vie quotidienne.
          </ContentBlock>
        </div>
      </div>
    </PageWrapper>
  )
}

export default React.memo(Reeducation)
