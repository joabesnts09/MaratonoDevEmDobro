import imgLogoRockstar from '../../assets/img/logo-rockstar.svg'
import imgLogoGta from '../../assets/img/logo-gta.svg'

export const HeaderComponent = () => {
    
    return (
        <>
            <header className="cabecalho">
                <div className="logo">
                    <img
                        src={imgLogoRockstar}
                        alt="Logo Rockstar Games"
                    />
                    <hr />
                    <img src={imgLogoGta} alt="Logo GTA V" />
                </div>
                <nav>
                    <ul className="menu">
                        <li>
                            <a href="#home">Home</a>
                            <a href="#compar">Compar</a>
                            <a
                                href="https://support.rockstargames.com/categories/200013306"
                                target="_blank">
                                Suporte
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}
