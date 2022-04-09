
import React, { ReactNode } from 'react'
import { createUseStyles } from 'react-jss'
import ContactInfo from '../components/ContactInfo'
import PageWrapper from '../components/PageWrapper'
import { Theme } from '../theme'

const useStyles = createUseStyles((theme: Theme) => ({
  content: {
    maxWidth: 1090,
    width: '100%',
    '& section': {
    },
    '& h4': {
      fontSize: 20,
      marginBottom: 5
    },
    '& p': {
      fontSize: 18,
      marginBottom: 20
    }
  }
}))

function LegalBlock ({ title, children }: {title: string, children: ReactNode}) {
  return (
    <section>
      <h4>{title}</h4>
      <p>{children}</p>
    </section>
  )
}

function Legal () {
  const classes = useStyles()

  return (
    <PageWrapper
      title='Mentions légales'
    >
      <div className={classes.content}>
        <LegalBlock title='Propriétaire du site'>
          Fanchon RIVOIRE
          <br /> 2 rue Paul Valéry
          <br />34160 - Restinclières
        </LegalBlock>
        <LegalBlock title='Contact'>
          <ContactInfo />
        </LegalBlock>

        <LegalBlock title='N° RPPS'>
          10100771079
        </LegalBlock>
        <LegalBlock title='N° Praticien'>
          34501307
        </LegalBlock>
        <LegalBlock title='N° d’identification pro de santé'>
          345013072
        </LegalBlock>
        <LegalBlock title='N° national'>
          39145
        </LegalBlock>
        <LegalBlock title='N° départemental'>
          34 5 01307 2 00 1 20 1 21
        </LegalBlock>

        <LegalBlock title='Hébergeur du site'>
          CloudFlare Inc.
          <br />101 Townsend St
          <br />CA 94107 - San Francisco
          <br />États-Unis
          <br /> +33 7 57 90 52 73

        </LegalBlock>

      </div>
    </PageWrapper>
  )
}

export default React.memo(Legal)
