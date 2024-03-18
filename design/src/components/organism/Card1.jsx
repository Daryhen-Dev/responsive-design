
import styled from 'styled-components'

export const Card1 = () => {

    return (
        <Container>
            <div className="image-over2">
                <div className="contentImg">
                    <img src="https://i.ibb.co/wSs2B9F/Diapositiva2.png" />
                </div>
                <a className="seller">
                    <div className="seller-thumb avatar-lg">
                        <img
                            className="rounded-circle"
                            src="https://i.ibb.co/GsJvk3W/charizard.png"
                        />
                    </div>
                </a>
            </div>
            <div className='card-body'>
                <span className='title'>
                    React-intermedio - full diseños responsive
                </span>
                <span className='precio' >$ 9.99</span>
                <span className='fecha'> 12 de marzo del 2024</span>
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.bg};
    justify-content: center;
    flex-direction: column;
    padding: 18px;
    text-align: center;
    border-radius: 20px;
    width: 300px;
    box-shadow: 28px 7px 35px 9px rgba(0, 0, 0, 0.1);
    .image-over2{
        position: relative;
        .contentImg{
            width: 100%;
            border-radius: 15px;
            overflow: hidden;
            img{
                max-width: 100%;
                height: auto;
            }
        }
        .seller{
        display: flex;
        width: 100%;
        position: absolute;
        top: calc(100% - 2.5rem);
        justify-content: center;
        align-items: center;
        .seller-thumb{
            position: relative;
            border: 3px solid ${({theme}) => theme.color1};
            height: 80px;
            width: 80px;
            border-radius: 50%;
            box-shadow: inset 0 0 0 2px ${({theme}) => theme.color1};
            &:after{
                content: '';
                position: absolute;
                left: 40px;
                right: 100px;
                margin: auto;
                border-radius: 50%;
                transition: all 0.2s;
            }

            img {
                height: calc(5rem - 16px);
                width: calc(5rem - 16px);
                margin: 5px;
            }
        }
    }
    }
    &:hover{
        .image-over2{
            .seller{
                .seller-thumb{
                    &::after{
                        filter: drop-shadow(0 0 1em ${({theme})=> theme.color0});
                        height: calc(5rem + 5px);
                        width: calc(5rem + 5px);
                        top:-3px;
                        left: -3px;
                        box-shadow: 0 5px 15px ${({theme})=>theme.color0};
                    }
                }
            }
        }
    }

    .card-body{
        display: flex;
        flex-direction: column;
        padding-top: 16%;
        span{
            font-weight: 700;
        }
        .title {
            color: ${({theme}) => theme.text}
        }
        .precio{
            color: #b8b8b8;
            font-weight: 500;
        }
        .fecha {
            color: ${({ theme }) => theme.text};
        }
    }
`
