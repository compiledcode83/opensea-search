import { Grid, Box } from '@mui/material'
import type { NextPage } from 'next'
import LeftBox from '../components/LeftBox'
import RightBox from '../components/RightBox'
import { HomeStyle } from '../styles/home.style'

const Home: NextPage = () => {
  return (
    <HomeStyle>
      <Grid container spacing={2}>
        <Grid item sm={12} md={4}>
          <LeftBox/>
        </Grid>
        <Grid item sm={12} md={8}>
          <RightBox />
        </Grid>
      </Grid>
    </HomeStyle>
  )
}

export default Home
