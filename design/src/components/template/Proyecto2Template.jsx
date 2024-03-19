import styled from 'styled-components'
import { Banner1 } from '../organism/Banner1'
import { Btn2 } from '../molecule/Btn2'
import { CoordenadasRuta, reu } from '../../utils/dataStatic'
import { useState } from 'react'
import { LottieAnimation } from '../atom/LottieAnimation'




export const Proyecto2Template = () => {
    const [stateId, setStateId] = useState(0)
    return (
        <Container>

            <section className='header'>
                <Banner1 />
            </section>
            <section className='main'>
            <LottieAnimation top='20%' 
            right='0'
            height='170' 
            animation={reu.animacionduolingo1} />
            <LottieAnimation 
            top='60%' 
            height='170' 
            right='60%' 
            animation={reu.animacionduolingo2} />
                {
                    CoordenadasRuta.map((item, index) => {
                        return (
                            <Btn2 key={index} 
                            stateId={stateId}
                            setStateId={setStateId}
                                  item={item}
                                  left={item.left} 
                                  icon={item.icono} 
                                  title={item.title}
                                  bgprimary="88, 204, 2" 
                                  bgsecundary="70, 163, 2" />
                        )
                    })
                }
            </section>
        </Container>
    )
}

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    .header{
        padding: 24px;
    }
    .main{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 40px;
        justify-content: center;
        align-items: center;
    }
`
