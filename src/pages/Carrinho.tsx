// import styled from "styled-components"
import Banner from "../components/Banner"
import { useDispatch, useSelector } from "react-redux"
import { resetarCarrinho, type ItemCarrinho } from "../store/reducers/carrinho";
import type { Item } from "./Categoria";
import Cards from "../components/Cards";
import Card from "../components/Card";
import styled from "styled-components";
// import Card from "../components/Card";
// const Section = styled.section`
    
    
const Section = styled.section`
    
    .total_pagamento{
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        padding: 32px;
        background-color: aliceblue;
        font-size: 24px;
        p{
            color: #1875E8;
        }
        span{
            color: black;
            font-weight: 500;
        }
    }
    .button_pagamento{
        display: flex;
        align-items: center;
        justify-content: center;
        button{
            width: 100%;
            border: none;
            color: #494949;
            padding: 16px;
            font-weight: 600;
            font-size: 24px;
            cursor: pointer;
            transition: 200ms;
        }
        button:hover{
            background-color: #358bf3;
            color: white
        }
    }

`
// `
interface RootState {
    carrinho: ItemCarrinho[];
    itens: Item[]
    total: number;
    busca: string;
}
export default function Carrinho() {
    const dispatch = useDispatch();

    const { carrinho, total } = useSelector((state: RootState) => {
        let total = 0;
        const regExp = new RegExp(state.busca, 'i')
        const carrinhoReduce = state.carrinho.reduce((itens: (Item & { quantidade: number })[], itemNoCarrinho: ItemCarrinho) => {
            const item = state.itens.find(item => item.id === itemNoCarrinho.id);
            if (item) {
                total += (item.preco * itemNoCarrinho.quantidade);    
                if (item?.titulo.match(regExp)) {
                   
                     itens.push({
                        ...item,
                        quantidade: itemNoCarrinho.quantidade,
                    });
                }
            }
            return itens;
        }, []);
        return {
            carrinho:carrinhoReduce, total
        };
    })

    return (
        <Section>
            <Banner button="Finalizar compras" noImg title="Seu carrinho" paragraph="Confira produtos que você adicionou ao carrinho." />
            <Cards>
                {carrinho.map(item => (
                    <Card
                        quantidade={item.quantidade}
                        carrinho={true}
                        categoria=""
                        descricao={item.descricao}
                        favorito
                        preco={item.preco}
                        titulo={item.titulo}
                        id={item.id}
                        foto={item.foto}
                    />
                ))}
            </Cards>
             <div className="total_pagamento">
                <p>Total: <span>R$ {total.toFixed(2)}</span></p>
            </div>
            <div className="button_pagamento">
                <button onClick={() => dispatch(resetarCarrinho())}>
                    Finalizar compra
                </button>
            </div>
        </Section>
    )
}