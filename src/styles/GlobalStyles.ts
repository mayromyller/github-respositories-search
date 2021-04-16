import { createGlobalStyle } from 'styled-components'

import octocatHero from '../assets/background-hero.svg'

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: #333 url(${octocatHero}) no-repeat 90% top;
    color: #fff;
    font-family: 'Roboto', sans-serif;
  }

  a{
    text-decoration: none;
  }
`

export default GlobalStyles
