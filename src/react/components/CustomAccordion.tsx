import React, { ReactNode } from 'react'
import { styled } from '@mui/material/styles'
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion'
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Box } from '@mui/material'

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
    )}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'rgba(255, 255, 255, .05)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper': {
    color: 'inherit'
  },
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

const TypoBlock = styled(Box)(({ theme }) => ({
  margin: '0',
  fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
  fontWeight: 400,
  fontSize: '1rem',
  lineHeight: 1.5,
  letterSpacing: '0.00938em'
}))

export interface AccordionItem {
  summary: ReactNode
  content: ReactNode
}

interface Props {
  items: AccordionItem[]
  defaultExpanded?: number,
  selectedColor?: string,
  hoverColor?: string
}

function CustomAccordion ({ items, defaultExpanded = -1, selectedColor, hoverColor }: Props) {
  const [expanded, setExpanded] = React.useState<number>(defaultExpanded)

  const handleChange = (idx: number) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? idx : -1)
  }

  return (
    <div>
      {items.map(({ summary, content }, idx) => (
        <Accordion
          key={idx}
          expanded={expanded === idx}
          onChange={handleChange(idx)}
        >
          <AccordionSummary sx={{
            color: expanded === idx && selectedColor != null ? selectedColor : null,
            '&:hover': {
              color: hoverColor
            }
          }}
          >
            <TypoBlock>
              {summary}
            </TypoBlock>
          </AccordionSummary>
          <AccordionDetails>
            <TypoBlock>
              {content}
            </TypoBlock>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  )
}

export default React.memo(CustomAccordion)
