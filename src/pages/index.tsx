import { Grid } from '@mui/material'
import type { NextPage } from 'next'
import LeftBox from '../components/LeftBox'
import RightBox from '../components/RightBox'
import SearchBox from '../components/SearchBox'

const Home: NextPage = () => {
  return (
    <>
      <Grid className="">
        <LeftBox />
        <RightBox />
      </Grid>
    </>
  )
}

export default Home
