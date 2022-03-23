import React from 'react'
import { createUseStyles } from 'react-jss'
import CustomMuiAccordion from '../components/CustomMuiAccordion'
import PageWrapper from '../components/PageWrapper'
import { Theme } from '../theme'
import PriceTable from '../components/PriceTable'
import PriceTable2 from '../components/PriceTable2'

const useStyles = createUseStyles((theme: Theme) => ({
  content: {
    fontSize: 20,
    maxWidth: 1090
  },
  blocks: {
    display: 'flex',
    flexFlow: 'column',
    gap: 60
  }
}))

function Pricing () {
  const classes = useStyles()
  return (
    <PageWrapper
      title='Tarifs'
    >
      <div className={classes.content}>
        <div className={classes.blocks}>
          <CustomMuiAccordion />
          <PriceTable />
          <PriceTable2 />
        </div>
      </div>
    </PageWrapper>
  )
}

export default React.memo(Pricing)
