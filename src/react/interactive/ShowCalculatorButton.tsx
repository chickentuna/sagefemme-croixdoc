import { Button, DialogActions, DialogContent } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import React, { useCallback, useState } from 'react'
import Calculator from './Calculator'

function ShowCalculatorButton ({ className }: {className: string}) {
  const [showPopup, setShowPopup] = useState(false)
  const openPopup = useCallback(() => setShowPopup(true), [setShowPopup])
  const closePopup = useCallback(() => setShowPopup(false), [setShowPopup])
  return (
    <>
      <button
        className={className}
        onClick={openPopup}
      >
        Suis-je à terme&nbsp;?
      </button>
      <Dialog PaperProps={{ sx: { overflow: 'hidden' } }} onClose={() => (setShowPopup(false))} open={showPopup}>
        <DialogTitle>Suis-je à terme ?</DialogTitle>
        <DialogContent>
          <Calculator />
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={closePopup}>
            Fermer
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default React.memo(ShowCalculatorButton)
