import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { createUseStyles } from 'react-jss'
import { Theme } from '../theme'

const useStyles = createUseStyles((theme: Theme) => ({
  tooltip: {
    maxWidth: 400,
    textAlign: 'justify',
    '& ul': {
      margin: 5
    }
  },
  info: {
    marginLeft: 0,
    '&:hover': {
      color: theme.medicalBlue
    }
  }
}))

interface Props {
  text: string
}

function InfoBubble (text: Props) {
  const classes = useStyles()
  return (
    <FontAwesomeIcon
      className={classes.info}
      data-class={classes.tooltip}
      data-html
      data-place='right'
      data-tip={text}
      data-type='light'
      data-effect='solid'
      data-border
      data-border-color='#555555'
      data-scroll-hide={false}
      icon={faInfoCircle}
    />
  )
}

export default React.memo(InfoBubble)
