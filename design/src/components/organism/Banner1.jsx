import styled from 'styled-components'
import { Btn1 } from '../molecule/Btn1'

export const Banner1 = () => {

    return (
        <Container>
            <section className='contentText'>
                <span className='title'>Seccion 9</span>
                <span className='frase'>Usa el futuro continuo, 
                recuerda el pasado</span>
            </section>
            <section>
                <Btn1 color='255,255,255' texto='Guia' bgcolor='transparent' />
            </section>
        </Container>
    )
}

const Container = styled.div`
background-color: #58cc02;
display: flex;
border-radius: 13px;
color: #fff;
padding: 22px 16px;
justify-content: space-between;
align-items: center;
.contentText {
    display: flex;
    flex-direction: column;
    align-items: start;
    text-align: start;
    .title{
        font-size: 25px;
        font-weight: 600;
    }
    .frase {
        font-size: 19px;
    }
}


`
