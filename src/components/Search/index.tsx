import { FormEvent, useEffect, useState } from 'react'
import Repositorie from '../Repositorie'
import * as S from './style'

import api from '../../services/api'

interface Repository {
  full_name: string
  description: string
  owner: {
    login: string
    avatar_url: string
  }
}

const Search = () => {
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')

  const [repositorie, setRepositorie] = useState<Repository[]>(() => {
    const localRepositories = localStorage.getItem('repos')

    if (localRepositories) {
      return JSON.parse(localRepositories)
    } else {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('repos', JSON.stringify(repositorie))
  }, [repositorie])

  async function getRepositorie(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    try {
      const response = await api.get<Repository>(`repos/${search}`)

      const repository = response.data

      setRepositorie([...repositorie, repository])
      setSearch('')
      setError('')
    } catch (error) {
      setError('Por favor digite o nome do autor/nome do repositório')
    }
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

      {error && <p style={{ color: '#fa1414' }}>{error}</p>}

      {repositorie.map((repos) => (
        <Repositorie key={repos.full_name} repository={repos} />
      ))}
    </>
  )
}

export default Search
