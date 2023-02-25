import { faGraduationCap, faHeart } from '@fortawesome/free-solid-svg-icons'
import { differenceInYears, parse } from 'date-fns'
import React from 'react'
import { createUseStyles } from 'react-jss'
import ContentBlock from '../../components/ContentBlock'
import List from '../../components/List'
import PageWrapper from '../../components/PageWrapper'
import { Theme } from '../../theme'
import MassagesContent from './MassagesContent'

const useStyles = createUseStyles((theme: Theme) => ({
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
  },
  qualifications: {
    width: '100%',
    display: 'flex',
    gap: 5,
    fontWeight: 'bold',
    fontSize: '16px',
    textAlign: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    [`@media (max-width: ${theme.verticalModeThreshold}px)`]: {
      flexDirection: 'column'
    }
  }
}))

function Massages () {
  const classes = useStyles()

  return (
    <>
      <PageWrapper
        title='Massages'
        helmet='Massages'
      >
        <div className={classes.content}>

          <div className={classes.blocks}>
            <MassagesContent />
          </div>
        </div>
      </PageWrapper>
    </>
  )
}

export default React.memo(Massages)
