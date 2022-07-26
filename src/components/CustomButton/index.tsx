import { Typography, Button } from '@mui/material'


import { CustomButtonStyle } from './index.style'

interface Props {
  caption: string
  onClick?: () => void
}

const CustomButton: React.FC<Props> = ({ caption, onClick }) => {
  return (
    <CustomButtonStyle>
      <Button className="account" onClick={onClick}>
        {!!caption && <Typography>{caption}</Typography>}
      </Button>
    </CustomButtonStyle>
  )
}

export default CustomButton
