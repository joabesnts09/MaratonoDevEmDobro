import imgGta5 from '../../assets/img/gta5.jpg'
import logoPs5 from '../../assets/img/logo-ps5.svg'
import logoXboxSeriesS from '../../assets/img/logo-xbox-series-s.svg'
import logoPs4 from '../../assets/img/logo-ps4.svg'
import logoXboxOne from '../../assets/img/logo-xbox-one.svg'
import logoPc from '../../assets/img/logo-pc.svg'

import { StyledSection } from "./styledSection"

export const Section = () => {

    // const botao = document.querySelector(".btn-plataforma");
    // const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas");

    // botao.addEventListener("click", () => {
    //     elementoPlataformas.classList.toggle("ativo");
    // });

    const showMenuButton = () => {
        const elementoPlataformas = document.querySelector(".btn-plataforma .plataformas") as  HTMLElement;

        elementoPlataformas.classList.toggle("ativo");
    }

    return (
        <>
            <StyledSection id="comprar">
                <h2 className="titulo">Compre já</h2>
                <div className="cartao">
                    <img
                        className="capa-do-jogo"
                        src={imgGta5}
                        alt="Capa do jogo GTA V"
                    />

                    <div className="informacoes">
                        <h3>Grand Theft Auto V</h3>
                        <p>
                            Inclui <strong>modo história do GTA V</strong> e
                            <strong> GTA Online</strong>
                        </p>
                        <ul className="plataformas">
                            <li>
                                <img
                                    src={logoPs5}
                                    alt="Logo Playstation 5"
                                />
                            </li>
                            <li>
                                <img
                                    src={logoXboxSeriesS}
                                    alt="Logo Xbox series X|S"
                                />
                            </li>
                            <li>
                                <img
                                    src={logoPs4}
                                    alt="Logo Playstation 4"
                                />
                            </li>
                            <li>
                                <img
                                    src={logoXboxOne}
                                    alt="Logo Xbox One"
                                />
                            </li>
                            <li>
                                <img
                                    src={logoPc}
                                    alt="Logo PC"
                                />
                            </li>
                        </ul>
                    </div>
                    <button onClick={showMenuButton} className="btn-plataforma">
                        Selecione a plataforma
                        <ul className="plataformas">
                        <li>
                                <img
                                    src={logoPs5}
                                    alt="Logo Playstation 5"
                                />
                            </li>
                            <li>
                                <img
                                    src={logoXboxSeriesS}
                                    alt="Logo Xbox series X|S"
                                />
                            </li>
                            <li>
                                <img
                                    src={logoPs4}
                                    alt="Logo Playstation 4"
                                />
                            </li>
                            <li>
                                <img
                                    src={logoXboxOne}
                                    alt="Logo Xbox One"
                                />
                            </li>
                            <li>
                                <img
                                    src={logoPc}
                                    alt="Logo PC"
                                />
                            </li>
                        </ul>
                    </button>
                </div>
            </StyledSection>
        </>
    )
}
