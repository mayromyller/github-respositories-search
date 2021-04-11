import { FormEvent, useState } from 'react'
import Repositorie from '../Repositorie'
import * as S from './style'

import api from '../../services/api'

export interface Repository {
  full_name: string
  description: string
  owner: {
    login: string
    avatar_url: string
  }
}

const Search = () => {
  const [search, setSearch] = useState('')
  const [repositorie, setRepositorie] = useState<Repository[]>([])

  async function getRepositorie(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const response = await api.get<Repository>(`repos/${search}`)

    const repository = response.data

    setRepositorie([...repositorie, repository])
    setSearch('')
  }

  return (
    <>
      <S.Container onSubmit={getRepositorie}>
        <S.Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Buscar repositório... "
        />
        <S.Button>Pesquisar</S.Button>
      </S.Container>

      {repositorie.map((repos) => (
        <Repositorie key={repos.full_name} repository={repos} />
      ))}
    </>
  )
}

export default Search
