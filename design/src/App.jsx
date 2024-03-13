import { ThemeProvider } from 'styled-components'
import { MyRoutes } from './routers/routes'
import { GlobalStyle } from './styles/GlobalStyles'
import { useThemeStore } from './store/ThemeStore'

function App() {

  const { themeStyle, theme } = useThemeStore()
  return (
    <>
    <ThemeProvider theme={ themeStyle }>
      <GlobalStyle />
      <MyRoutes />
    </ThemeProvider>
    </>
  )
}

export default App