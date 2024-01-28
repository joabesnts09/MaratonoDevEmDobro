import imgBgMain from '../../assets/img/bg-main.png'
import logoGtaV from '../../assets/img/logo-gta-v.svg'
import logoGtaOnline from '../../assets/img/logo-gta-online.svg'
import { StyledMain } from "./styledMain"

export const Main = () => {
    return (
        <>
            <StyledMain id="home">
                <img
                    className="imagem-fundo"
                    src={imgBgMain}
                    alt="Rapaz de moletom laranja ao lado de um carro esportivo amarelo"
                />

                <div className="informacoes">
                    <div className="lista-de-jogos">
                        <img
                            src={logoGtaV}
                            alt="Logo GTA V"
                        />
                        <img
                            src={logoGtaOnline}
                            alt="Logo GTA Online"
                        />
                    </div>
                    <h1 className="titulo">
                        Já disponíveis para Playstation 5 e Xbox Series X|S
                    </h1>
                    <p className="texto">
                        Experimente os fênomenos de entretenimento Grand Theft
                        Auto V e GTA Online
                    </p>

                    <a className="btn-comprar" href="#comprar">
                        Compre já
                    </a>
                </div>
            </StyledMain>
        </>
    )
}
