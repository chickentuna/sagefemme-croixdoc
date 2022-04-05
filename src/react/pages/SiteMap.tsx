
import React from 'react'
import { createUseStyles } from 'react-jss'
import PageWrapper from '../components/PageWrapper'
import { Theme } from '../theme'

const useStyles = createUseStyles((theme: Theme) => ({
  content: {
    maxWidth: 1090,
    '& section': {
    },
    '& h4': {
      fontSize: 20,
      marginBottom: 10
    },
    '& p': {
      fontSize: 18,
      marginBottom: 40
    }
  }
}))

function SiteMap () {
  const classes = useStyles()

  return (
    <PageWrapper
      title='Plan du site'
    >
      <div className={classes.content}>
        WIP
      </div>
    </PageWrapper>
  )
}

export default React.memo(SiteMap)
