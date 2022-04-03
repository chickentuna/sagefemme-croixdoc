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

function Quand () {
  const classes = useStyles()
  return (
    <>
      <PageWrapper
        title='Grossesse&nbsp;: quand aller consulter en urgence&nbsp;?'
      >
        <div className={classes.content}>
          <section>
            <ul>
              <li>Fièvre supérieure à 38°C</li>
              <li>Chute, traumatisme ou accident</li>
              <li>Un bébé qui ne bouge plus ou beaucoup moins</li>
              <li>Perte de liquide : en quantité abondante ou faible, mais persistante, c’est à dire se répétant plusieurs fois</li>
              <li>Perte de sang : rouge comme des règles, ou en fin de grossesse marron avec un ventre dur et ne se relâchant pas</li>
              <li>Avant 8 mois, pour des contractions régulières ou douloureuses pendant au moins 30 minutes, ne cédant pas au repos</li>
              <li>En cas de mal de tête persistant et/ou des troubles auditifs ou visuels, un gonflement brutal des jambes, des doigts ou du visage, des vomissements des démangeaisons importantes sur tout le corps, des douleurs abdominales</li>
            </ul>
            <p className={classes.instruction}><FontAwesomeIcon icon={faLongArrowRight} />&nbsp;Rendez-vous sans tarder directement aux urgences de la maternité.</p>
          </section>
          <section>
            À partir du 9ème mois :
            <ul>
              <li>Si vous avez des contractions utérines toutes les 5 minutes depuis au moins 1 heure. Ces contractions se manifestent dans «tout le ventre» et «dans le bas du dos». Elles commencent faiblement, augmentent d’intensité, puis diminuent pour se calmer complètement jusqu’à la suivante. Elles sont rythmées et reviennent à des intervalles de plus en plus courts</li>
              <li>Si vous perdez les eaux : perte de liquide fluide comme de l’eau, transparent</li>
            </ul>
            <p className={classes.instruction}><FontAwesomeIcon icon={faLongArrowRight} />&nbsp;Contactez votre sage-femme ou rendez-vous directement à la maternité.</p>
          </section>
          <section>
            <p>Pour tout ce qui ne concerne pas directement la grossesse (gastroentérite, angine, otite, entorse&nbsp;…)</p>

            <p className={classes.instruction}><FontAwesomeIcon icon={faLongArrowRight} />&nbsp;Rendez-vous aux urgences générales, ou, si ce n’est pas urgent, consultez votre médecin traitant.</p>
          </section>
          <section>
            <p>Pour les petites affections de la grossesse non urgentes (hémorroïdes, mycose, infection urinaire sans fièvre associée&nbsp;…)</p>

            <p className={classes.instruction}><FontAwesomeIcon icon={faLongArrowRight} />&nbsp;Prenez rendez-vous chez votre sage-femme ou médecin traitant.</p>
          </section>
        </div>
      </PageWrapper>
    </>
  )
}

export default React.memo(Quand)
