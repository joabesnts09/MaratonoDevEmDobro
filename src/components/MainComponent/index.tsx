import imgLBgMain from '../../assets/img/bg-main.png'
import imgLogoGtaV from '../../assets/img/logo-gta-v.svg'
import imgLogoGtaOnline from '../../assets/img/logo-gta-online.svg'

export const MainComponent = () => {

    return (
        <>
            <main className="home" id="home">
                <img
                    className="img-fundo"
                    src={imgLBgMain}
                    alt="Rapaz de moletom laranja ao lado de um carro amarelo"
                />
                <div className="informacoes">
                    <div className="lista-de-jogos">
                        <img src={imgLogoGtaV} alt="Logo gta v"/>

                        <img src={imgLogoGtaOnline} alt="Logo gta v online"/>
                    </div>

                    <h1 className="titulo">
                        Já disponíveis para Playtation 5 e Xbox Series X|S
                    </h1>

                    <p className="texto">
                        Experimente os fenômenos de entretedimento Grand Theft Auto
                        V Online
                    </p>

                    <a className="btn-comprar" href="#Comprar"> compre já </a>
                </div>
            </main>
        </>
    )
}