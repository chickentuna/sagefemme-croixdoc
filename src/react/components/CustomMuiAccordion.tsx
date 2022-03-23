import React from 'react'
import { styled } from '@mui/material/styles'
// import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnchor, faAngleRight, faChevronRight } from '@fortawesome/free-solid-svg-icons'

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}))

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={(
      <FontAwesomeIcon style={{ fontSize: 14 }} icon={faChevronRight} />
    // <ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />
    )}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}))

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}))

function CustomMuiAccordion () {
  const [expanded, setExpanded] = React.useState<string | false>('panel1')

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false)
    }

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls='panel1d-content' id='panel1d-header'>
          <Typography>Remboursements</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            L'assurance maladie prend en charge les soins à 100 % avec dispense d'avance de frais (tiers payant) dans les cas suivants&nbsp;:
            <ul>
              <li>Avant 6 mois de grossesse : Examens médicaux obligatoires, par exemple les consultations prénatales obligatoires (une avant la fin du 3e mois de grossesse, puis une par mois à partir du 4e mois de grossesse jusqu'à la date de l'accouchement), les séances de préparation à la naissance et à la parentalité, dont l'entretien prénatal précoce, les examens biologiques complémentaires (y compris ceux du futur père).</li>
              <li>Toute consultation, examen, soin effectués entre le début du 6e mois de grossesse jusqu’au 12ème jour après l’accouchement</li>
              <li>Toute consultation, examen, soin effectués à un bénéficiaire d’un C2S (ex : CMU et ACS), AME, AT-MP, personnes incarcérées ou en aménagement de peine sans aucune activité professionnelle, ALD (sur ordonnance bizone ou avec mention ALD) et victimes d’actes de terrorisme.</li>
              <li>Consultations de l’adolescente âgée de 15 à 17 ans inclus, avec possibilité d’anonymisation.</li>
            </ul>
            Dans les autres cas, le tiers payant sécu sera appliqué, c’est à dire que vous ne réglerez que la part mutuelle (soit 30% du montant), qui vous sera ensuite automatiquement remboursée dans les jours qui suivent si votre mutuelle couvre les soins effectués. Le nouveau-né est pris en charge dès la naissance à 70% par la Sécurité Sociale et les 30% restants par la mutuelle.

          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default React.memo(CustomMuiAccordion)
