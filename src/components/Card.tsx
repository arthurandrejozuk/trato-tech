import styled from "styled-components"
import { MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { deletarItem, mudarFavorito, mudarItem } from "../store/reducers/itens";
import { mudarCarrinho, mudarQuantidade } from "../store/reducers/carrinho";
import { MdShoppingCart } from "react-icons/md";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import type { Item, RootState } from "../Interfaces";
import { useState } from "react";
import Input from "./Input";

const CardStyle = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    
    box-shadow: 1px 1px 12px 1px #c0bfbfc7;
    max-width: 400px;
    width: 400px;
    img{
        width: 100%;
        height: 100%;
    }
    .options{
        display: flex;
        align-self: end;
        gap: 8px;
        margin-bottom: 4px;
        padding: 4px;
        .icon:hover{
            background-color: #EFF9FF;
            cursor: pointer;
        }
        .icon{
            padding: 4px;
        }
    }
    .card__description{
        background-color: #EFF9FF;
        
    }
    .card__description_info{
        display: flex;
        flex-direction: column;
        gap: 12px;
        padding: 12px;
        h3{
            font-size: 20px;
            font-weight: 600;
            color: #1875E8;
        }
        strong{
            font-weight: 600;
        }
        p{
            font-weight:400;
        }
    }
    .card__description_price{
        display: flex;
        justify-content: space-between;
        margin-top: 4px;
        .button__buy{
            border: none;
            padding: 20px 28px;
            background-color: #1875E8;
            color: white;
            font-size: 20px;
            cursor: pointer;
        }
        .button__buy:hover{
            background-color: #1876e8ca;
        }
        .buttons{
            display: flex;
            gap: 8px;
            
            button{
                background-color: transparent;
                border: none;
                padding: 12px;
                font-size: 16px;
                cursor: pointer;
            }
            .quantidade{
                display: flex;
                align-items: center;
                padding: 16px;
                gap: 12px;
                .icons{
                    background-color: #1875E8;
                    color: white;
                    padding: 8px;
                    cursor: pointer;
                }
            }
        }
    }

`




export default function Card({ titulo, descricao, preco, foto, favorito, id, carrinho, quantidade }: Item) {
    const dispatch = useDispatch();
    const [modoEdicao, setModoEdicao] = useState(false)
    const [novoTitulo, setNovoTitulo] = useState(titulo);
    const estaNoCarrinho = useSelector((state: RootState) => state.carrinho.some((itemNoCarrinho: Item) => itemNoCarrinho.id == id ));
    // Usamos as actions, o payload é o id. Como foi dito, o payload é o que será recebido pela função
    function resolverFavorito() {
        dispatch(mudarFavorito(id));
    }
   
    function resolverCarrinho() {
        dispatch(mudarCarrinho(id));
    }

    const componenteModoEdicao = <>   
    {!carrinho ? 
            <div className="options">
                {modoEdicao ? <FaCheck className="icon" onClick={() => {
                    setModoEdicao(false)
                    // Como payload de tipo item, fizemos mudança apenas no titulo
                    dispatch(mudarItem({id, item: { titulo: novoTitulo }}))
                    }} size={24}/> : <MdEdit onClick={() => setModoEdicao(true)} size={24} className="icon" />}
                <MdDeleteOutline onClick={() => dispatch(deletarItem(id))} size={24} className="icon" />
            </div> : <></>
    }    
    </>
    return (
        <CardStyle key={id}>
            {componenteModoEdicao}
            <img src={foto} alt="" />
            <div className="card__description">
                <div className="card__description_info">
                    {modoEdicao ? <Input value={novoTitulo} onChange={(event) => setNovoTitulo(event.target.value)} /> : <h3>{titulo}</h3>}
                    <p>{descricao.slice(0,200)}...</p>
                    {/* <strong>{anunciante}</strong> */}
                </div>
                <div className="card__description_price" >
                    <button className="button__buy">
                       R${preco.toFixed(2)}
                    </button>
                    <div className="buttons">
                        {!carrinho ? 
                            <>
                                <button onClick={resolverFavorito} className="button__save">
                                    {!favorito ? <FaRegStar  size={24} /> : <FaStar  size={24}/>}
                                    <p>Salvar</p>
                                </button>
                                <button onClick={resolverCarrinho} className="button__add">
                                    {estaNoCarrinho? <><MdShoppingCart color="#1875E8" size={24}/><p>Adicionado</p></> : <> <MdAddShoppingCart size={24} /> <p>Adicionar</p></>}
                                </button>
                            </>
                            :
                            <div className="quantidade">
                                Quantidade
                                <FaMinus className="icons" onClick={() => { if(quantidade|| 0 >= 1) dispatch(mudarQuantidade({id, quantidade: - 1})) }} />
                                    <span>{String(quantidade|| 0).padStart(2,'0')}</span>
                                <FaPlus className="icons" onClick={() => dispatch(mudarQuantidade({id, quantidade: + 1}))}/>
                            </div>
                        }
                        </div>    
                </div>
            </div>
        </CardStyle>
    )
}