import React from 'react'
import ContentBlock from '../../components/ContentBlock'
import List from '../../components/List'
import { husbando } from '../../utils/placeholder'

function PnpYoga () {
  return (
    <>
      <ContentBlock
        imageUrl={husbando()}
      >
        <h4>Comment se passent les cours de Yoga ?</h4>
        Programme variable, avec association de&nbsp;:
        <List>
          <li>Asanas (postures)</li>
          <li>Pranayama (exercices de respiration)</li>
          <li>Pratyahara (relaxation)</li>
          <li>Dhyana (méditation)</li>
          <li>Tout est adapté à la femme enceinte.</li>
          <li>Il existe des séances pour débutantes en Yoga, et des séances de niveau intermédiaire et confirmé.</li>
        </List>
      </ContentBlock>
      <ContentBlock
        imageUrl={husbando()}
        flip
      >
        <h4>Quel cours de Yoga choisir ?</h4>
        <List>
          <li>
            Si vous êtes sportive, alors les séances de Yoga de niveau débutant pourront vous paraître faciles.
          </li>
          <li>
            Le rythme des séances de niveau intermédiaire et confirmé est plus soutenu.
            En revanche, certains enchaînements (comme la salutation au soleil par exemple) peuvent prendre un peu de temps à intégrer si vous ne les avez jamais pratiqués.
          </li>
        </List>
      </ContentBlock>
      <ContentBlock
        imageUrl={husbando()}
      >
        <h4>Que prévoir ?</h4>
        <List>
          <li>Le matériel est fourni. En revanche, si vous possédez déjà du matériel avec lequel vous êtes à l’aise, vous êtes tout à fait libre de l’apporter.</li>
          <li>Prévoyez des vêtements souples, amples et confortables. Évitez les jupes et les robes.</li>
          <li>Le cours de Yoga dure environ une heure.</li>
        </List>
      </ContentBlock>
    </>
  )
}

export default React.memo(PnpYoga)
