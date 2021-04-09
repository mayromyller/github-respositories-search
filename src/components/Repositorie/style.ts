import styled from 'styled-components'

export const Container = styled.a`
  margin-top: 15px;
  max-width: 675px;
  background: #fff;
  height: 100px;
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
  font-size: 25px;
`

export const Description = styled.p`
  font-size: 20px;
  color: #838383;
`

export const Avatar = styled.img`
  max-width: 100%;
  height: 90px;
  width: 90px;
  border-radius: 50%;
`
