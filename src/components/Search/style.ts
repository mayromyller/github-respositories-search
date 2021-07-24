import styled from 'styled-components'

export const Container = styled.form`
  margin: 35px 0;
  max-width: 675px;
  display: flex;
`

export const Input = styled.input`
  height: 50px;
  flex: 1;
  border: 0px;
  border-radius: 6px 0 0 6px;
  padding: 10px 18px;
  font-size: 20px;
  outline: none;
`

export const Button = styled.button`
  height: 50px;
  width: 220px;
  border: 0px;
  background: #fb1;
  border-radius: 0px 6px 6px 0px;
  color: #333;
  font-weight: bold;
  font-size: 20px;
  transition: 0.3s;
  cursor: pointer;
  outline: none;

  &:hover,
  &:focus {
    filter: brightness(90%);
  }
`
