import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { ReactElement, ReactNode } from 'react'
import { createUseStyles } from 'react-jss'
import ReactDOMServer from 'react-dom/server'
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
  text: ReactElement
}

function InfoBubble ({ text }: Props) {
  const classes = useStyles()
  return (
    <FontAwesomeIcon
      className={classes.info}
      data-class={classes.tooltip}
      data-html
      data-place='right'
      data-tip={ReactDOMServer.renderToString(text)}
      data-type='light'
      data-effect='solid'
      data-border
      data-border-color='#555555'
      icon={faInfoCircle}
    />
  )
}

export default React.memo(InfoBubble)
