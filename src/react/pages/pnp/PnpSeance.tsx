import React from 'react'
import ContentBlock from '../../components/ContentBlock'
import List from '../../components/List'
import { husbando } from '../../utils/placeholder'

function PnpSeance () {
  return (
    <>
      <ContentBlock
        imageUrl={husbando()}
      >
        <h4>Comment se déroule une séance ?</h4>
        <List>

          <li>Accueil : Présentations si groupes ne se connaissant pas, thé et tisanes à disposition pour ceux qui le souhaitent.</li>
          <li>Installation, sur les tapis, sur les bolsters, sur les ballons ou sur le canapé, selon ce que chacun préfère.</li>
          <li>Point sur les questions éventuelles.</li>
          <li>Temps de centrage. Une minute de relaxation pour se poser.</li>
        </List>
      </ContentBlock>
      <ContentBlock
        imageUrl={husbando()}
        flip
      >
        <List>
          <li>Information et échanges sur les thèmes du jour.</li>
          <li>Adapté selon les besoins et demandes de chacun.</li>
          <li>Certains cours s’accompagnent d’exercices pratiques :&nbsp;respiration, postures, massages, portage etc.</li>
          <li>Vous êtes libres de vous lever, de changer de posture ou d’installation durant la séance.</li>
        </List>
      </ContentBlock>
      <ContentBlock
        imageUrl={husbando()}
      >
        <h4>Selon le temps qu’il reste :</h4>
        <List>
          <li>Quelques exercices d’étirement et de Yoga prénatal</li>
          <li>Pranayamas (exercices de respiration)</li>
          <li>Pratyahara (relaxation)</li>
          <li>Dhyana (méditation)</li>
        </List>
      </ContentBlock>
      <ContentBlock
        imageUrl={husbando()}
        flip
      >
        <List>
          <li>Point sur les ressentis, les questions éventuelles.</li>
          <li>Point sur les prochains RDV si nécessaire.</li>
          <li>Passage des cartes vitales, ou paiement si les 7 séances de préparation remboursées ont déjà été utilisées.</li>
        </List>
      </ContentBlock>
    </>
  )
}

export default React.memo(PnpSeance)
