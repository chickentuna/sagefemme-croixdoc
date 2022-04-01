import React, { ReactNode } from 'react'
import { createUseStyles } from 'react-jss'
import { theme } from '../theme'

const useStyles = createUseStyles({
  titleContainer: {
    paddingRight: 20,
    paddingLeft: 20,
    textAlign: 'center',
    background: '#adcce9',
    paddingTop: '30px',
    paddingBottom: '22px',
    marginBottom: '30px',
    borderTop: '4px solid #4867d6',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    '& h1': {
      fontSize: '1.75rem'
    }
  }
})

interface Props {
  titleDecorationUrl?:string
  color?: string
  text: ReactNode
}
function PageTitle ({ titleDecorationUrl, text, color }: Props) {
  const { titleContainer } = useStyles()
  return (
    <div
      className={titleContainer} style={{
        backgroundColor: color,
        backgroundImage: titleDecorationUrl != null ? `url(${titleDecorationUrl})` : undefined,
        borderColor: titleDecorationUrl != null ? theme.sfBlack : undefined
      }}
    >
      <h1>{text}</h1>
    </div>
  )
}

export default React.memo(PageTitle)
