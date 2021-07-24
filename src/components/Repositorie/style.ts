import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled(Link)`
  margin-top: 15px;
  max-width: 675px;
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

export const Avatar = styled.img`
  max-width: 100%;
  height: 60px;
  width: 60px;
  border-radius: 50%;
`
