import Header from '../../components/Header'
import * as S from './styles'

const Home = () => {
  return (
    <>
      <Header />
      <S.Container>
        <S.Title>
          Faça uma busca por
          <br />
          repositórios do Github
        </S.Title>
      </S.Container>
    </>
  )
}

export default Home
