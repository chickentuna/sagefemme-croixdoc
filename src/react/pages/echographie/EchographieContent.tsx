import React from 'react'
import ContentBlock from '../../components/ContentBlock'
import List from '../../components/List'
import { waifu } from '../../utils/placeholder'

function EchographieContent () {
  return (
    <>
      <ContentBlock
        imageUrl='images/beepboop.png'
      >
        <h4>Échographie pelvienne</h4>
        <List>
          <li>Voie endovaginale</li>
          <li>Voie abdominale</li>
        </List>

      </ContentBlock>
      <ContentBlock
        imageUrl='images/bb_echo.jpg'
        landscape
        flip
      >
        <h4>Échographie de grossesse</h4>
        <List>
          <li>Avant 11 SA</li>
          <li>Demande d'IVG</li>
          <li>Échographie du premier, deuxième et troisième trimestre : courant 2026</li>
        </List>

      </ContentBlock>
    </>
  )
}

export default React.memo(EchographieContent)
