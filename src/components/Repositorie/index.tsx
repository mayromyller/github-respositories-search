import * as S from './style'

interface Props {
  repository: {
    full_name: string
    description: string
    owner: {
      avatar_url: string
    }
  }
}

const Repositorie = ({ repository }: Props) => {
  return (
    <>
      <S.Container to={`repositories/${repository.full_name}`}>
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
