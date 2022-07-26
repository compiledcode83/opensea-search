import {
  Input
} from '@mui/material'
import React from 'react'

import { CustomInputStyle } from './index.style'

interface Props {
  value: string,
  placeholder: string,
  onChange: (e: any) => void,
}

const CustomInput: React.FC<Props> = (props) => {
  const { value, onChange, placeholder } = props
  return (
    <CustomInputStyle>
      <Input
        type="text"
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </CustomInputStyle>
  )
}

export default CustomInput  