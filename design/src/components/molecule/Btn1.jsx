import styled from 'styled-components'
import {reu} from '../../utils/dataStatic'

export const Btn1 = ({ texto }) => {

    return (
        <Container>
            <reu.iconNote />
           { texto }        
        </Container>
    )
}

const Container = styled.button`

  font-size: 17px;
  padding: 10px 25px;
  border-radius: 0.7rem;
  background-color: transparent;
  border: 2px solid rgb(50, 50, 50);
  border-bottom: 5px solid rgb(50, 50, 50);
  box-shadow: 0px 1px 6px 0px rgb(158, 129, 254);
  transform: translate(0, -3px);
  cursor: pointer;
  transition: 0.2s;
  transition-timing-function: linear;

&:active {
  transform: translate(0, 0);
  border-bottom: 2px solid rgb(50, 50, 50);
}
`
