

import { Button, ButtonGroup, styled } from '@mui/material'
import React from 'react'

const Component = styled(ButtonGroup)`
  margin-top: 10px;
`

const StyledButton = styled(Button)`
    border-radius:50%;
`

function GroupedButton() {
  return (
    <Component>
        <StyledButton>-</StyledButton>
        <Button disabled>1</Button>
        <StyledButton>+</StyledButton>
    </Component>
  )
}

export default GroupedButton
