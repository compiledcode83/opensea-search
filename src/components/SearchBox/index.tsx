import {
  Box,
  IconButton,
  Input,
  InputAdornment,
  List,
  ListItem,
  SvgIcon,
  Typography
} from '@mui/material'
import debounce from 'lodash/debounce'
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Cancel'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { SearchBoxStyle } from './index.style'

const SearchBox: React.FC<any> = () => {
  const searchBoxRef = useRef<any>(null)
  const [input, setInput] = useState('')
  const debounceHandler = useCallback(debounce((value: string) => dispatchData(value), 500), []);

  const dispatchData = (value: string) => {
    if (value) {
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value)
  }

  useEffect(() => {
    debounceHandler(input)
  }, [input, debounceHandler])

  const onKeyDown = (key: any) => {
    if (key.keyCode === 13) {
    }
  }

  const onClick = (e: React.MouseEvent<HTMLElement>) => {
  }

  const onClickIcon = () => {
    if (input) {
      setInput('')
    }
  }

  const onClickOutside = (event: any) => {
    const isClickOutside = searchBoxRef.current && !searchBoxRef.current.contains(event.target)
    if (isClickOutside) {
    }
  }

  useEffect(() => {
    window.addEventListener('click', onClickOutside)
    return () => {
      window.removeEventListener('click', onClickOutside)
    }
  }, [])

  return (
    <SearchBoxStyle ref={searchBoxRef}>
      <Input
        type="text"
        onChange={handleChange}
        value={input}
        onKeyDown={onKeyDown}
        placeholder="Search"
        endAdornment={
          <InputAdornment position="end">
            <IconButton onClick={onClickIcon}>
              <SvgIcon>{input ? <ClearIcon /> : <SearchIcon />}</SvgIcon>
            </IconButton>
          </InputAdornment>
        }
      />
    </SearchBoxStyle>
  )
}

export default SearchBox
