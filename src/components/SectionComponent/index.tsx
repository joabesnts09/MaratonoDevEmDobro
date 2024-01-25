import imgGta5 from '../../assets/img/gta5.jpg'
import imgLogoPs5 from '../../assets/img/logo-ps5.svg'
import imgLogoXboxSeries_s from '../../assets/img/logo-xbox-series-s.svg'
import imgLogoPs4 from '../../assets/img/logo-ps4.svg'
import imgLogoXboxOne from '../../assets/img/logo-xbox-one.svg'
import imgLogoPc from '../../assets/img/logo-pc.svg'

export const SectionComponent = () => {
    return (
        <>
            <section className="compre-ja" id="comprar">
                <h2 className="titulo">Compre já</h2>

                <div className="cartao">
                    <img
                        className="capa-do-jogo"
                        src={imgGta5}
                        alt="Capa do jogo GTA"
                    />

                    <div className="informacoes">
                        <h3>Grand Theft Auto</h3>
                        <p>
                            Incluir <span>modo história do GTA V</span>
                            <span>GTA Online</span>
                        </p>

                        <ul className="plataformas">
                            <li className="">
                                <img
                                    src={imgLogoPs5}
                                    alt="Logo ps5"
                                />
                            </li>
                            <li>
                                <img
                                    src={imgLogoXboxSeries_s}
                                    alt="Logo xbox-s"
                                />
                            </li>
                            <li>
                                <img
                                    src={imgLogoPs4}
                                    alt="Logo ps4"
                                />
                            </li>
                            <li>
                                <img
                                    src={imgLogoXboxOne}
                                    alt="Logo xbox one"
                                />
                            </li>
                            <li>
                                <img
                                    src={imgLogoPc}
                                    alt="Logo pc"
                                />
                            </li>
                        </ul>
                    </div>

                    <button className="btn-plataforama">
                        Selecione a plataformas
                        <ul>
                        <li className="">
                                <img
                                    src={imgLogoPs5}
                                    alt="Logo ps5"
                                />
                            </li>
                            <li>
                                <img
                                    src={imgLogoXboxSeries_s}
                                    alt="Logo xbox-s"
                                />
                            </li>
                            <li>
                                <img
                                    src={imgLogoPs4}
                                    alt="Logo ps4"
                                />
                            </li>
                            <li>
                                <img
                                    src={imgLogoXboxOne}
                                    alt="Logo xbox one"
                                />
                            </li>
                            <li>
                                <img
                                    src={imgLogoPc}
                                    alt="Logo pc"
                                />
                            </li>
                        </ul>
                    </button>
                </div>
            </section>
        </>
    )
}
