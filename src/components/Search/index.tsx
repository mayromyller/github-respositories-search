import * as S from './style'

const Search = () => {
  return (
    <S.Container>
      <S.Input type="text" placeholder="Buscar repositório... " />
      <S.Button>Pesquisar</S.Button>
    </S.Container>
  )
}

export default Search
