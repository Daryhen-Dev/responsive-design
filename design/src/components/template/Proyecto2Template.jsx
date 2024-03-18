import styled from 'styled-components'
import { Banner1 } from '../organism/Banner1'


export const Proyecto2Template = () => {

    return (
        <Container>
            <section className='header'>
                <Banner1 />
            </section>
            <section className='main'>
                
            </section>
            <h2>Componente duolingo</h2>
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    display: grid;
    grid-template: 
    "header" 100px
    "main" auto;
    .header{
        grid-area: header;
        background-color: rgba(24, 235, 13, 0.14);
    }
`
