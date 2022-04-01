import { faLongArrowRight, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fontWeight } from '@mui/system'
import React from 'react'
import { createUseStyles } from 'react-jss'
import CustomAccordion from '../components/CustomAccordion'
import Dash from '../components/Dash'
import Disclaimer from '../components/Disclaimer'
import PageWrapper from '../components/PageWrapper'
import { theme } from '../theme'

const useStyles = createUseStyles({
  content: {
    fontSize: 20,
    maxWidth: 1090,
    display: 'flex',
    flexDirection: 'column',
    gap: 60
  },
  instruction: {
    fontWeight: 'bold',
    paddingLeft: 60,
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      fontSize: 40,
      marginRight: 10
    }
  }
})

function PageNotFound () {
  const classes = useStyles()
  return (
    <>
      <div className={classes.content}>
        404
        <img src='images/bunny.png' />
      </div>
    </>
  )
}

export default React.memo(PageNotFound)
