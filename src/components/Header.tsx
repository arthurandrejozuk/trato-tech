import styled from "styled-components"
import Search from "./Search"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

const Section = styled.section`
    
    background-color: #00a2ff;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 50px 80px;

    .icon{
        cursor: pointer;
    }
    .header__nav{
        .header__nav_ul{
            display: flex;
            gap: 40px;
            font-size: 20px;
            .header__ul_li{
                .header__li_link{
                    text-decoration: none;
                    color: white;
                }
                .header__li_link:hover{
                      text-decoration: underline;
                    cursor: pointer;
                    text-underline-offset: 4px;
                }
                .active{
                    font-weight: 600;
                    text-decoration: underline;
                    text-underline-offset: 4px;
                }
            }
        }
    }

    .header__button_login{
        font-size: 20px;
        color: white;
        border: none;
        background-color: transparent;
    }

    .header__button_login:hover{
        text-decoration: underline;
        cursor: pointer;
        text-underline-offset: 4px;
    }

    @media(max-width: 1028px){
        flex-wrap: wrap;
        padding: 20px;
        gap: 24px;
        .header__logo{
            width: 100%;
            text-align:center;
            margin-bottom: 32px;
        }
    }

`

export default function Header() {


    const location = useLocation();
    const navigate = useNavigate();


    return (
        <Section>
            <div className="header__logo">
                <img onClick={() => navigate('/')} src="/src/assets/TRATOTECH.png" alt="Logo da TratoTech" />
            </div>
            <nav className="header__nav">
                <ul className="header__nav_ul">
                    <li className="header__ul_li">
                        <Link className={`header__li_link ${location.pathname === '/' ? 'active' : ''}`} to={'/'}>Página inicial</Link>
                    </li>
                      <li className="header__ul_li">
                        <Link className={`header__li_link ${location.pathname === '/visitados' ? 'active' : ''}`} to="/visitados">Mais visitados</Link>
                    </li>
                    <button className="header__button_login">
                        Login
                    </button>
                </ul>
            </nav>
            <Search />
            <FaShoppingCart onClick={() => navigate('/carrinho')} className="icon" color="white" size={24}/>
        </Section>
    )
}