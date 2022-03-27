import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { createUseStyles } from 'react-jss'
import PageWrapper from '../components/PageWrapper'
import { Theme } from '../theme'
import OfficeMap from './interactive/OfficeMap'

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
  addressBlock: {
    display: 'flex',
  },
  map: {
  },
  iframe: {
    maxWidth: '100%',
    width: 600,
    height: 450
  },
  text: {
  }
}))

function Contact () {
  const classes = useStyles()
  return (
    <PageWrapper
      title='Tarifs'
    >
      <div className={classes.content}>
        <div className={classes.blocks}>
          <div className={classes.addressBlock}>
            <div className={classes.map}>
              <OfficeMap className={classes.iframe} />
            </div>
            <div className='contact'>
              <div className='info-box'>
                <i className='bx bx-map'> <FontAwesomeIcon icon={faLocationDot} /></i>
                <h3>Our Address</h3>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  )
}

export default React.memo(Contact)
