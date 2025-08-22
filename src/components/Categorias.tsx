
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom"
import styled from "styled-components"
import type { RootState } from "../store";
import { useEffect } from "react";
import { buscarCategorias } from "../store/reducers/categorias";
import { buscarItens } from "../store/reducers/itens";

const Section = styled.div`
    
    position: relative;
    bottom: 260px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 32px;
    flex-direction: column;
    gap: 24px;
    h1{ 
        font-size: 44px;
        color: white;
    }
    .container__categorias{
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        a{
            text-decoration: none;
            color: black;
            display: flex;
            flex-direction: column;
            gap: 12px;
            
        }
        .categoria__option{
            transition: 500ms;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
            width: 200px;
            text-align: center;
             img{
                box-shadow: 1px 1px 4px 2px gray;
                border-radius: 90px;
            }
            p{
                font-size: 24px;
                font-weight: 500;
            };
        }
        .categoria__option:hover{
            transform: scale(1.05);
            cursor: pointer;
           
        }
    }

`

export default function Categorias() {
    
    // Pegamos o state, que nesse caso é o tipo do store, que tem alguns reducers, sendo nesse caso o de categorias.
    const categorias = useSelector((state: RootState) => state.categorias);

    const dispatch = useDispatch();

    
   
    

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        dispatch<any>(buscarCategorias());
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        dispatch<any>(buscarItens())

    },[dispatch])

    return (
        <Section>
            <h1>Categorias</h1>
            <div className="container__categorias">
                {categorias.map(categoria => (
                    
                        <Link  key={categoria.id} className="categoria__option" to={`/categoria/${categoria.id}`}>
                            <img src={categoria.img} alt={categoria.title} />
                            <p>{categoria.title}</p>
                        </Link>
                
                ))}
            </div>
        </Section>
    )
}