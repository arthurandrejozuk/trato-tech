import styled from "styled-components";
import type { IBanner } from "../Interfaces";

// inserimos parametros para nosso componente, que vai sofrer alterações no css dependendo dos booleans
const Section = styled.div<{ noImg?: boolean; anunciar?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00a2ff;
  gap: 100px;
  padding: 24px;
  flex-wrap: wrap;
  padding-bottom: ${({ anunciar }) => (anunciar ? "100px" : "300px")};

  div {
    display: flex;
    flex-direction: column;
    gap: 32px;

    h1 {
      font-size: 61px;
      width: ${({ noImg }) => (noImg ? "auto" : "100px")};
      color: white;
    }

    p {
      width: ${({ noImg }) => (noImg ? "auto" : "400px")};
      font-size: 20px;
      color: white;
      font-weight: 300;
    }

    button {
      cursor: pointer;
      background-color: #041833;
      padding: 16px;
      border: none;
      border-radius: 20px;
      width: 200px;
      color: white;
      font-size: 20px;
      font-weight: 300;
      align-self: ${({ noImg }) => (noImg ? "center" : "flex-start")};
    }
  }

  img {
    width: 600px;
  }

  @media (max-width: 1028px) {
    gap: 50px;

    h1 {
      font-size: 48px;
    }

    p {
      font-size: 20px;
      width: ${({ noImg }) => (noImg ? "auto" : "300px")};
    }

    img {
      width: 300px;
    }
  }
`;

export default function Banner({
  title = "Classificados Tech",
  paragraph = "Compre, venda, anuncie, troque diversos tipos de produtos e serviços da área de tecnologia!",
  children,
  img = "/src/assets/Relogio.png",
  noImg,
  anunciar,
}: IBanner) {

    
  return (
    <Section noImg={noImg} anunciar={anunciar}>
      <div>
        <h1>{title}</h1>
        <p>{paragraph}</p>
        {children}
      </div>
      {!noImg && <img src={img} alt="" />}
    </Section>
  );
}