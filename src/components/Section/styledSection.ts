import styled from "styled-components";

export const StyledSection = styled.section`
	display: flex;
	flex-direction: column;
	text-align: center;
	padding: 50px;
	align-items: center;

    .capa-do-jogo {
        width: 270px;
    }

    .titulo {
        font-family: "ChaletComprime";
        font-size: 50px;
        font-weight: 700;
        margin-bottom: 50px;
    }

    .cartao {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #000;
        width: 50%;
        border-radius: 10px;
        padding: 80px;
        gap: 40px;
    }

    .informacoes {
        display: flex;
	    flex-direction: column;
	    gap: 30px;

        h3 {
            font-family: "ChaletComprime";
	        font-size: 52px;
	        font-weight: 700;
        }

        p {
            color: #e8e8e8;
            font-family: "Chalet";
            font-size: 16px;
            line-height: 1.6;
        }

        .plataformas {
            display: flex;
	        flex-wrap: wrap;
	        gap: 32px;
	        justify-content: center;
        }
    }

    .btn-plataforma {

        background-color: rgba(255, 255, 255, 0.1);
        border: 0.5px solid #fff;
        border-radius: 4px;
        font-family: "ChaletComprime";
        font-size: 28px;
        text-align: center;
        padding: 20px 40px;
        text-transform: uppercase;
        width: 50%;
        transition: all 0.3s ease-in;
        color: #fff;
	    width: 100%;
	    cursor: pointer;

        .plataformas {
            margin-top: 10px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            transition: all 0.3s ease-in;
            display: none;
            opacity: 0;

            li {
                padding: 20px;
            }

            li:nth-child(1) {
                border: 1px solid #00439c;

                &:hover {
                    background-color: #00439c;
                }
            }

            li:nth-child(2) {
                border: 1px solid #387a26;

                &:hover {
                    background-color: #387a26;
                }
            }

            li:nth-child(3) {
                border: 1px solid #00439c;

                &:hover {
                    background-color: #00439c;
                }
            }

            li:nth-child(4) {
                border: 1px solid #387a26;

                &:hover {
                    background-color: #387a26;
                }
            }

            li:nth-child(5) {
                border: 1px solid #fcaf17;

                &:hover {
                    background-color: #fcaf17;
                }
            }

        }

        .plataformas.ativo {
            display: flex;
	        opacity: 1;
        }


    }
    
    @media (max-width: 1024px) {
        .cartao {
            width: 70%;
        }

    }

    @media (max-width: 768px) {
        padding: 30px;

        .cartao {
            padding: 80px 20px;
            width: 100%;
        }

        .informacoes {
            h3 {
                font-size: 35px;
            }
        }

        .plataformas {
            flex-direction: column;
        }

        .btn-plataforma {
            margin-top: 15px;
            padding: 15px;
        }
    }

    @media (max-width: 425px) {
        .cartao {
            .capa-do-jogo {
                max-width: 80%;
            }
        }
    }
`