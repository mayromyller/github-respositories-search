import Header from '../../components/Header'
import Search from '../../components/Search'
import * as S from './styles'

const Home = () => {
  return (
    <>
      <Header />
      <S.Container>
        <S.Title>
          Search for
          <br />
          Github repositories
        </S.Title>
      </S.Container>
      <Search />
    </>
  )
}

export default Home
