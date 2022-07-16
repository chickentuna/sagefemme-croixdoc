import React from 'react'
import ContentBlock from '../../components/ContentBlock'
import List from '../../components/List'
import { husbando } from '../../utils/placeholder'

function PnpFratries () {
  return (
    <>
      <ContentBlock
        imageUrl='images/kids.jpg'
      >
        <h4>Pourquoi des ateliers fratries&nbsp;?</h4>
        <List>
          <li>Parce que les grands frères et grandes soeurs sont trop exclus de l’arrivée de leur cadet. </li>
          <li>Ils ont besoin de préparation, pour comprendre, pour appréhender, pour obtenir des réponses, pour bien vivre cette naissance.</li>
          <li>Pour apporter des notions de sécurité, en prévention des accidents domestiques.</li>
          <li>Pour s’amuser, passer un moment créatif en famille</li>
        </List>
      </ContentBlock>
      <ContentBlock
        imageUrl={husbando()}
        flip
      >
        <h4>Pour qui&nbsp;?</h4>
        <List>
          <li>Ciblé sur les enfants d’environ 3 à 8 ans, et leur famille.</li>
          <li>Plus qu’un atelier fratries, c’est un atelier famille. Tous les membres du foyer sont conviés, quels que soient leurs liens de filiation.</li>
          <li>En cas de famille recomposée, la présence du/de la conjoint(e), des demi-frères et sœurs etc. est d’autant plus recommandée. Si votre situation est tendue, nous pouvons prévoir un atelier individuel (avec juste votre famille plutôt qu’en groupe).</li>
        </List>
      </ContentBlock>
      <ContentBlock
        imageUrl={husbando()}
      >
        <h4>Comment se passe un atelier fratries&nbsp;?</h4>
        <List>
          <li>On s’installe en cercle et chacun se présente.</li>
          <li>Pourquoi est-ce qu’on est là ?</li>
          <li>Discussion avec les enfants sur l’arrivée de leur cadet, ce qu’il savent, ce qu’ils voudraient savoir, ce qu’ils ressentent, ce qu’ils souhaitent.</li>
        </List>
      </ContentBlock>
      <ContentBlock
        imageUrl={husbando()}
        flip
      >
        <h4>Discussion sur la famille</h4>
        <List>
          <li>ce que c’est</li>
          <li>pourquoi</li>
          <li>comment trouver sa place et son rôle à jouer</li>
          <li>les valeurs familiales</li>
        </List>
      </ContentBlock>
    </>
  )
}

export default React.memo(PnpFratries)
