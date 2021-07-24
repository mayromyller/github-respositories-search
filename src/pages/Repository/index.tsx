import { useEffect } from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import * as S from './style'

import logoImg from '../../assets/logo.svg'

import api from '../../services/api'
import { useState } from 'react'

interface RespositoryParam {
  repository: string
}

interface Repository {
  full_name: string
  description: string
  stargazers_count: number
  open_issues_count: number
  forks_count: number
  owner: {
    avatar_url: string
    login: string
  }
}

interface Issue {
  id: number
  title: string
  html_url: string
  user: {
    login: string
  }
}

const Repository = () => {
  const { params } = useRouteMatch<RespositoryParam>()
  const [repository, setRepository] = useState<Repository | null>(null)
  const [issues, setIssus] = useState<Issue[]>([])

  useEffect(() => {
    api.get(`repos/${params.repository}`).then((response) => {
      setRepository(response.data)
    })

    api
      .get(`repos/${params.repository}/issues`)
      .then((response) => setIssus(response.data))
  }, [params.repository])

  return (
    <>
      <S.Header>
        <img src={logoImg} alt="GitHub logo" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </S.Header>

      {repository && (
        <S.RepositoryInfo>
          <div>
            <img
              src={repository.owner.avatar_url}
              alt={`imagem de perfil de usuário do GitHub chamado ${repository.owner.login}`}
            />
            <S.InfoContiner>
              <S.RepositoryName>{repository.full_name}</S.RepositoryName>
              <S.RepositoryDescription>
                {repository.description}
              </S.RepositoryDescription>
            </S.InfoContiner>
          </div>

          <S.ListStats>
            <S.GithubStat>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </S.GithubStat>

            <S.GithubStat>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </S.GithubStat>

            <S.GithubStat>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues</span>
            </S.GithubStat>
          </S.ListStats>
        </S.RepositoryInfo>
      )}

      {issues.map((issue) => (
        <S.Issues key={issue.id} href={issue.html_url}>
          <S.AuthorContainer>
            <S.Author>{issue.title}</S.Author>
            <S.Description>{issue.user.login}</S.Description>
          </S.AuthorContainer>
          <FiChevronRight size={16} />
        </S.Issues>
      ))}
    </>
  )
}

export default Repository
