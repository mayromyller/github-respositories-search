import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'

import Header from './pages/Header'

import GlobalStyles from './styles/GlobalStyles'
import * as S from './styles/rootStyles'

function App() {
  return (
    <>
      <S.Wrapper>
        <Header />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
        <GlobalStyles />
      </S.Wrapper>
    </>
  )
}

export default App
