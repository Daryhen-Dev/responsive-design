import styled, { ThemeProvider } from 'styled-components'
import { MyRoutes } from './routers/routes'
import { GlobalStyle } from './styles/GlobalStyles'
import { useThemeStore } from './store/ThemeStore'
import { SideBar1 } from './components/organism/SideBar1'
import { Device } from './styles/breakpoints'
import { useState } from 'react'

function App() {

  const { themeStyle, theme } = useThemeStore()
  const [sidebarState, setSidebarState] = useState(false)
  return (

    <ThemeProvider theme={themeStyle}>
      <GlobalStyle />
      <Container className={sidebarState ? 'active' : null}>
        <section className='contentsidebar'>
          <SideBar1 state={sidebarState} setState={setSidebarState} />
        </section>
        <section className='contentroutes'>
          <MyRoutes />
        </section>
      </Container>

    </ThemeProvider>
  )
}
const Container = styled.main`
transition: all 0.2s ease;
  display: grid;
  grid-template: 'sidebar main' auto / 
  0 1fr;
  .contentsidebar{
    grid-area: sidebar;
    display: none;
  }
  .contentroutes{
    grid-column: 1;
    width: 100%;
    grid-area: main;
  }
  
  @media ${Device.tablet}  {
    grid-template: 
    "sidebar main" auto / 
    88px 1fr;
    &.active {
      grid-template: 
    "sidebar main" auto / 
    288px 1fr;
    }
    .contentsidebar{
      display: initial;
      grid-column: 1;
    }
    .contentroutes{
      grid-column: 2;
    }
  }
  
 

`
export default App