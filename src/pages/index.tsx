import { Grid, Box } from '@mui/material'
import type { NextPage } from 'next'
import Header from '../components/Header'
import Nftlist from '../components/Nftlist'
import { HomeStyle } from '../styles/home.style'

const Home: NextPage = () => {
  return (
    <HomeStyle>
      <Header/>
      <Nftlist />
    </HomeStyle>
  )
}

export default Home
