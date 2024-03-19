import styled from 'styled-components'
import {reu} from '../../utils/dataStatic'

export const Btn1 = ({ texto , bgcolor, color }) => {
    return (
        <Container $bgcolor={bgcolor} $color={color}>
            <reu.iconNote />
           { texto }        
        </Container>
    )
}

const Container = styled.button`
font-weight: 700;
border-radius: 16px;
  display: flex;
  gap: 12px;
  padding: 12px 20px 12px 12px;
  font-size: 17px;
  border-radius: 0.7rem;
  background-color: ${(props) => props.$bgcolor};
  border: 2px solid rgba(50, 50, 50,0.5);
  border-bottom: 5px solid rgba(50, 50, 50,0.5);
  box-shadow: 0px 1px 6px 0px rgb(158, 129, 254);
  transform: translate(0, -3px);
  cursor: pointer;
  transition: 0.2s;
  transition-timing-function: linear;
 color:rgb(${(props) => props.$color});
&:active {
  transform: translate(0, 0);
  border-bottom: 2px solid rgba(50, 50, 50, 0.5);
}
`
