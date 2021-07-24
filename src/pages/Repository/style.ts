import styled from 'styled-components'

export const Header = styled.div`
  margin-top: 35px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: #fff;
    display: flex;
    align-items: center;
    transition: 0.2s;

    &:hover {
      color: #dcdcdc;
    }

    svg {
      margin-right: 4px;
    }
  }
`

export const RepositoryInfo = styled.div`
  margin-top: 35px;

  > div {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }
  }
`

export const InfoContiner = styled.div`
  margin-left: 2rem;
`

export const RepositoryName = styled.div`
  font-size: 36px;
  color: #ccd8fa;
  font-weight: bold;
`

export const RepositoryDescription = styled.div`
  font-size: 1rem;
  color: #fff;
  margin-top: 4px;
`

export const ListStats = styled.ul`
  display: flex;
  list-style: none;
  margin-top: 2rem;
  margin-bottom: 35px;
`

export const GithubStat = styled.li`
  & + li {
    margin-left: 80px;
  }

  strong {
    display: block;
    font-size: 24px;
    color: #ccd8fa;
  }

  span {
    font-size: 16px;
    color: #fff;
    margin-top: 4px;
  }
`

export const Issues = styled.a`
  margin-top: 1rem;
  background: #fff;
  height: 80px;
  border-radius: 6px;
  color: #333;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;

  cursor: pointer;

  transition: 0.3s ease;

  position: relative;

  &:hover {
    transform: translateX(20px);
  }
`

export const AuthorContainer = styled.div`
  flex: 1;
`

export const Author = styled.h4`
  font-size: 20px;
`

export const Description = styled.p`
  font-size: 16px;
  color: #838383;
`
