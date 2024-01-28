import styled from 'styled-components'

export const StyledMain = styled.main`
    @font-face {
        font-family: 'ChaletComprime';
        src: url('../fontes/ChaletComprime.ttf');
    }
    display: flex;
    position: relative;
    min-height: calc(100vh - 80px);

    &::after {
        content: '';
        position: absolute;
        height: 100%;
        width: 100%;
        background: linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.85),
            rgba(0, 0, 0, 0.7) 35%,
            transparent 65%
        );
    }

    .imagem-fundo {
        width: 100%;
        object-fit: cover;
    }

    .informacoes {
        position: absolute;
        z-index: 1;
        min-height: calc(100vh - 80px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 32px;
        padding: 80px 80px 80px 170px;
        max-width: 780px;

        img {
            max-width: 150px;
        }

        .lista-de-jogos {
            display: flex;
            gap: 32px;
        }

        .titulo {
            font-family: 'ChaletComprime';
            font-size: 55px;
        }

        .texto {
            font-family: 'Chalet';
            font-size: 18px;
            line-height: 1.6;
        }

        .btn-comprar {
            background-color: rgba(255, 255, 255, 0.1);
            border: 0.5px solid #fff;
            border-radius: 4px;
            font-family: 'ChaletComprime';
            font-size: 28px;
            text-align: center;
            padding: 20px 40px;
            text-transform: uppercase;
            width: 50%;
            transition: all 0.3s ease-in;

            &:hover {
                background-color: #fff;
                color: #000;
            }
        }
    }

    @media (max-width: 1024px) {
        .informacoes {
            padding: 30px;
        }

        .informacoes img {
            max-width: 100px;
        }

        .informacoes .titulo {
            font-size: 40px;
        }
    }

    @media (max-width: 768px) {
        
        .informacoes {

            .btn-comprar {
                width: 100%;
            }
        }
    }

    @media (max-width: 425px) {
        ::after {
            background: linear-gradient(90deg, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.4) 100%, transparent 65%);
        }
    }
`
