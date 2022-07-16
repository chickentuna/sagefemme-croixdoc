import React from 'react'
import ContentBlock from '../../components/ContentBlock'
import List from '../../components/List'
import { waifu } from '../../utils/placeholder'

function PnpTruc () {
  return (
    <>
      <ContentBlock
        imageUrl={waifu()}
      >
        <h4>Title</h4>
        <List>
          <li>list item.</li>
        </List>
      </ContentBlock>
    </>
  )
}

export default React.memo(PnpTruc)
