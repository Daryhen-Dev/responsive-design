import styled from 'styled-components'
import { Btn1 } from '../molecule/Btn1'

export const MessageToggle = ({item, bgprimary, bgsecundary}) => {
    return (
        <Container $bgprimary={bgprimary} $bgsecundary={bgsecundary} >
            <section className='contentText'>
            <span>{item.title}</span>
            <p>{item.description}</p>
            </section>
            {/* <Btn1 texto='Guia' /> */}
            <Btn1 color={bgprimary} texto='Empezar +10exp' bgcolor='#fff' />
        </Container>
    )
}

const Container = styled.div`
    position: absolute;
    z-index: 10;
    background-color: rgb(${(props) => props.$bgprimary});
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 15px;
    padding: 16px;
    top: 72px;
    justify-content: center;
    .contentText{
        text-align: left;
        span{
            font-size: 19px;
            font-weight: 700;

        }
        p{
            font-size: 17px;
        }
    }
`;

