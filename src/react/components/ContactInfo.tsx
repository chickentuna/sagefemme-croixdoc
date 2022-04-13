import React from 'react'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles(
  {
    discreteLink: {
      color: 'inherit',
      '&:hover': {
        color: 'inherit'
      }
    }
  })

function ContactInfo () {
  const classes = useStyles()

  return (
    <>
      <a className={classes.discreteLink} href='tel:06 23 15 23 44'>
        tél&nbsp;: 06 23 15 23 44
      </a>
      <br />
      <a className={classes.discreteLink} href='mailto:contact@sfrivoire-restinclieres.com'>
        mail&nbsp;: contact@sfrivoire-restinclieres.com
      </a>
    </>
  )
}

export default ContactInfo
