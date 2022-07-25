import { useTheme } from '@emotion/react'
import { Box, Typography, Button } from '@mui/material'
import Image from 'next/image'
import { useState } from 'react'
import { ellipseAddress } from '../../utils/utilities'

import { ConnectButtonStyle } from './index.style'

interface Props {
  caption: string
  onClick?: () => void
}

const ConnectButton: React.FC<Props> = ({ caption, onClick }) => {
  return (
    <ConnectButtonStyle>
      <Button className="account" onClick={onClick}>
        {!!caption && <Typography>{caption}</Typography>}
      </Button>
    </ConnectButtonStyle>
  )
}

export default ConnectButton
