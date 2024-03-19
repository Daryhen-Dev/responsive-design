import styled from 'styled-components'
import { MessageToggle } from '../organism/MessageToggle'
import { useState } from 'react'

export const Btn2 = ({ stateId, setStateId, item , left, icon, title, bgprimary, bgsecundary }) => {
    const [state, setState] = useState(false)
    const selected = ( id ) =>{
        setState(!state)
        setStateId(id)
    }
    return (
        <Container  onClick={() =>selected(item.id)} $left={left} $bgprimary={bgprimary} $bgsecundary={bgsecundary}>
            {
                title === "Cofre" ?
                    (<img className='imagencofre' src={icon} />
                    ) : (
                        <section>
                            <span className="back"></span>
                            <span className="front">
                                <img src={icon} />
                            </span>
                            {
                                stateId === item.id && state && (
                                    <MessageToggle 
                                    bgprimary={bgprimary} 
                                    bgsecundary={bgsecundary}
                                    item={item} />
                                )
                            }
                            {
                               stateId === item.id &&state && ( 
                               <Triangulo $bgprimary={bgprimary} /> )

                            }

                        </section>
                    )
            }

        </Container>
    )
}

const Container = styled.button`
   left: ${(props) => props.$left};
  --primary: ${(props) => props.$bgprimary};
  --secondary: ${(props) => props.$bgsecundary};
  width: 70px;
  height: 55px;
  border: none;
  outline: none;
  cursor: pointer;
  user-select: none;
  touch-action: manipulation;
  border-radius: 100%;
  position: relative;
  transition: .3s;

    .imagencofre{
        position: relative;
        top: -12px;
        width: 130%;
    }

 .back {
  background: rgb(var(--secondary));
  border-radius: 100%;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

.front {
  background: linear-gradient(0deg, rgba(var(--primary), .6) 20%, rgba(var(--primary)) 50%);
  box-shadow: 0 .5em 1em -0.2em rgba(var(--secondary), .5);
  border-radius: 100%;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  font-weight: 600;
  font-family: inherit;
  transform: translateY(-15%);
  transition: .15s;
  color: rgb(var(--secondary));
}

&active .front {
  transform: translateY(0%);
  box-shadow: 0 0;
}
`;

const Triangulo = styled.div `
    position: absolute;
    width: 20px;
    height: 20px;
    background: rgb(${(props) => props.$bgprimary});
    border-radius: 5px ; 
    transform: rotate(45deg);
    transition: 0.5s;
    top:65px;
    left: 25px;
`

