import logoRockstar from '../../assets/img/logo-rockstar.svg'
import logoGta from '../../assets/img/logo-gta.svg'
import iconLink from '../../assets/img/icone-link.svg'
import { StyledHeader } from './styledHeader'

export const Header = () => {
    return (
        <>
            <StyledHeader>
                <div className="logo">
                    <img
                        src={logoRockstar}
                        alt="Logo Rockstar Games"
                    />
                    <hr />
                    <img src={logoGta} alt="Logo GTA V" />
                </div>
                <nav>
                    <ul className="menu">
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#comprar">Comprar</a>
                        </li>
                        <li>
                            <a
                                href="https://support.rockstargames.com/categories/200013306"
                                target="_blank"
                            >
                                Suporte{' '}
                                <img
                                    src={iconLink}
                                    alt="Icone de link de suporte"
                                />
                            </a>
                        </li>
                    </ul>
                </nav>
            </StyledHeader>
        </>
    )
}
