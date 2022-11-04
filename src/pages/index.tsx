import type { NextPage } from 'next'
import Header from '../components/Header'
import Main from '../components/Main'
import { HomeStyle } from '../styles/home.style'

const Home: NextPage = () => {
  return (
    <HomeStyle>
      <Header />
      <Main />
    </HomeStyle>
  )
}

export default Home
