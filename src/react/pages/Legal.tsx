
import React, { ReactNode } from 'react'
import { createUseStyles } from 'react-jss'
import ContactInfo from '../components/ContactInfo'
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
          <br /> 2 rue Paul Valéry, Zac des Plans
          <br />34160 - Restinclières
        </LegalBlock>
        <LegalBlock title='Numéro d’immatriculation au RCS ou au répertoire des métiers'>
          #########
        </LegalBlock>
        <LegalBlock title='Contact'>
          <ContactInfo />
        </LegalBlock>
        <LegalBlock title='Numéro d’identification à la TVA'>
          ############
        </LegalBlock>
        <LegalBlock title='Hébergeur du site'>
          CloudFlare Inc.
          <br />101 Townsend St
          <br />CA 94107 - San Francisco
          <br />États-Unis
          <br /> +33 7 57 90 52 73

        </LegalBlock>
        <LegalBlock title='Si vous exercez une activité réglementée et soumise à autorisation (pharmacie ou débit de boissons, par exemple)'>
          nom et adresse de l’autorité qui a délivré l’autorisation.
        </LegalBlock>

      </div>
    </PageWrapper>
  )
}

export default React.memo(Legal)
