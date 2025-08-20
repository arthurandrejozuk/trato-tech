import { useSelector } from "react-redux";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Categorias from "../components/Categorias";
import Card from "../components/Card";
import type { RootState } from "../store";
import { useNavigate } from "react-router-dom";




export default function Home() {


    const { itens } = useSelector((state: RootState) => {

        // Pegamos o valor digitado na busca e transformamos e um RegExp para filtrar os objetos
        const regExp = new RegExp(state.busca, 'i');
        
        return ({
            itens: !regExp ? state.itens : state.itens.filter((item) => item.titulo.match(regExp))
        })
    })
const navigate = useNavigate();
    return (
        <>
            <Banner>
                <button onClick={() => navigate('/anunciar')}>
                    Quero anunciar
                </button>
            </Banner>
            <Categorias />
            <Cards>
                {itens.map(item => (
                    <Card 
                        {...item}
                    />
                ))}
            </Cards>
        </>
    )
}