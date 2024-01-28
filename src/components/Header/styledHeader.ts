import styled from 'styled-components'

export const StyledHeader = styled.header`
    height: 80px;
    background-color: #0b0b0b;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 80px;
    border-bottom: 1px solid #282828;
    .logo {
        display: flex;
        gap: 15px;
    }

    .menu {
        display: flex;
        gap: 30px;

        li a {
            padding: 30px;
            color: #e8e8e8;
            font-weight: bolder;
            font-size: 15px;
            font-family: 'Chalet';

            &:hover {
                border-bottom: 2px solid #fff;
            }
        }
    }


    @media (max-width: 1024px) {
        justify-content: center;
        flex-direction: column;
        padding: 50px 0;
        gap: 15px;

        .menu li a {
            padding: 15px;
        }

            
    }
`
