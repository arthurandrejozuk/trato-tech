import styled from "styled-components"
import type { IBanner } from "../Interfaces"

const Section = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #00a2ff;
    gap: 100px;
    padding: 24px;
    padding-bottom: 300px;
    flex-wrap: wrap;
    div{
        display: flex;
        flex-direction: column;
        gap: 32px;
        h1{
            font-size: 61px;
            width: 100px;
            color: white;
        }
        .no-img-title{
            width:auto;
        }
        .no-img-p{
            width:auto;
        }
        .no-img-button{
            align-self: center;
        }
        p{
          width: 400px;
            font-size: 20px;
            color: white;
            font-weight: 300;
        }

        button{
           cursor: pointer;
            background-color: #041833;
            padding: 16px;
            border: none ;
            border-radius: 20px;
            width: 200px;
            color: white;
            font-size: 20px;
            font-weight: 300;
        }
    }

       img{
        width:600px;
       }
    @media(max-width: 1028px){
       gap: 50px;
       .anunciar{
        h1{
            font-size: 48px;
        }
        p{
            font-size: 20px;
            width: 300px;
        }   
       }
       img{
        width:300px;
       }
    }
`


export default function Banner({title, paragraph, button, img, noImg}: IBanner) {
    return (
        <Section>
            <div className="anunciar">
                <h1 className={noImg ? "no-img-title" : ''}>
                    {!title ? "Classificados Tech" : title}
                </h1>
                <p className={noImg ? "no-img-p" : ''}>
                    {!paragraph ? "Compre, venda, anuncie, troque diversos tipos de produtos e serviços da área de tecnologia!" : paragraph}
                </p>
                <button className={noImg ? "no-img-button" : ''}>
                    {!button ? "Quero anunciar" : button}
                </button>
            </div>
            {noImg ? <></> : <img src={!img ? "/src/assets/Relogio.png" : img} alt="" />}
        </Section>
    )
}