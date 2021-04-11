import * as S from './style'

const Repositorie = ({ repository }: any) => {
  return (
    <>
      <S.Container href="#">
        <S.AuthorContainer>
          <S.Author>{repository.full_name}</S.Author>
          <S.Description>{repository.description}</S.Description>
        </S.AuthorContainer>
        <S.Avatar src={repository.owner.avatar_url} />
      </S.Container>
    </>
  )
}

export default Repositorie
