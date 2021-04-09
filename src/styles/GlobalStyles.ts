import { createGlobalStyle } from 'styled-components'

import octocatHero from '../assets/background-hero.svg'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: #333 url(${octocatHero}) no-repeat 70% top;
    color: #fff;
    font-family: 'Roboto', sans-serif;
  }

`

export default GlobalStyles
