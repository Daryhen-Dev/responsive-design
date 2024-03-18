import styled from 'styled-components'
import { Btn1 } from '../molecule/Btn1'

export const Banner1 = () => {

    return (
        <Container>
            <section>
                <span>Seccion 9</span>
                <span>Us el futuro continuo, 
                recuerda el pasado</span>
            </section>
            <section>
                <Btn1 texto='Boton' />
            </section>
        </Container>
    )
}

const Container = styled.div`
background-color: #58cc02;

`
