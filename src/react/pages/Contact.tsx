
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames'
import React, { useState } from 'react'
import { createUseStyles } from 'react-jss'
import { Link } from 'react-router-dom'
import ContentBlock from '../components/ContentBlock'
import Disclaimer from '../components/Disclaimer'
import List from '../components/List'
import PageWrapper from '../components/PageWrapper'
import { Theme } from '../theme'
import { waifu } from '../utils/placeholder'

const useStyles = createUseStyles((theme: Theme) => ({
  content: {
    fontSize: 20,
    maxWidth: 1090
  }
}))

function Resources () {
  return (
    <>
      <PageWrapper
        title='Contact'
      >

      </PageWrapper>

    </>
  )
}

export default React.memo(Resources)
