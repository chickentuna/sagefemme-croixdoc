import React from 'react'
import ContentBlock from '../../components/ContentBlock'
import List from '../../components/List'

function MassagesContent () {
  return (
    <>
      <ContentBlock
        imageUrl='images/massage1.jpg'
        landscape
      >
        <h4>Massage de la femme</h4>
        <List>
          <li>Massage ayurvédique corps entier.</li>
          <li>Environ 1h</li>
          <li>Note : Il est idéal de pouvoir se reposer pour le reste de la journée après le massage.
            Attention : vous allez ressortir huilée, une partie des cheveux comprise.
          </li>
          <li>Non remboursé par la SS. 45 euros</li>
        </List>

      </ContentBlock>
      <ContentBlock
        imageUrl='images/massage2.jpg'
        flip
        landscape
      >
        <h4>Massage drainant des jambes et pieds à l'huile essentielle cèdre de Virginie</h4>
        <List>
          <li>Massage permettant de soulager les oedèmes des membres inférieurs et les jambes lourdes, notamment pendant la grossesse.</li>
          <li>Prévoir 45 minutes environ.</li>
          <li>Note : Il est idéal de limiter votre activité pour le reste de la journée après le massage.</li>
          <li>Non remboursé par la SS. 35 euros</li>
        </List>

      </ContentBlock>
      <ContentBlock
        imageUrl='images/massage3.jpg'
        landscape
      >
        <h4>Massage de la femme enceinte</h4>
        <List>
          <li><b>Garbhvati</b> : massage ayurvédique corps entier. Le massage s’adapte à votre terme et aux particularités de votre grossesse.</li>
          <li>Prévoir une bonne heure.</li>
          <li>Note : Il est idéal de pouvoir se reposer pour le reste de la journée après le massage.<br />Attention : vous allez ressortir huilée, une partie des cheveux comprise.</li>
          <li>Non remboursé par la SS. 45 euros</li>
        </List>
      </ContentBlock>
    </>
  )
}

export default React.memo(MassagesContent)
