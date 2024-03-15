import styled from 'styled-components'
import { Header1 } from '../organism/Header1.jsx'
import { Card1 } from '../organism/Card1'
import { SideBar1 } from '../organism/SideBar1.jsx'

export const Proyecto1Template = () => {

    return (
        <Container>
            <SideBar1 />
            <section className='header'>
                <Header1 title='Card con extractor de colores' />
            </section>
            <header className='main'>
                <Card1 />
            </header>
        </Container>
    )
}

const Container = styled.div`
height: 100vh;
    display: grid;
    grid-template: 
    'header' 100px
    'main' auto ;
    .header{
        padding: 10px;
        grid-area: header;
        background-color: rgba(103,93,241, 0.14);
    }
    .main {
        grid-area: main;
        background-color: rgba(235,16,107, 0.14);
        display: flex;
        justify-content: center;
        align-items: center;
    }
`