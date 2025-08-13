import styled from "styled-components"

const Footer = styled.footer`
    
    background-color: #00a2ff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 32px;
    color: white;
    font-size: 20px;
    .redes{
        display: flex;
        gap: 32px;
        img{
            cursor: pointer;
        }
    }

`

export default function Rodape() {
    return (
        <Footer>
            <div className="redes">
                <img src="/src/assets/redes/facebook.png" alt="" /> 
                <img src="/src/assets/redes/twitter.png" alt="" /> 
                <img src="/src/assets/redes/instagram.png" alt="" /> 
            </div>
            <p>Desenvolvido por Arthur</p>
        </Footer>
    )
}