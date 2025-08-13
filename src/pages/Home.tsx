import { useSelector } from "react-redux";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import Categorias from "../components/Categorias";
import Card from "../components/Card";
import type { RootState } from "../store";




export default function Home() {


    const { itens } = useSelector((state: RootState) => {
        
        const regExp = new RegExp(state.busca, 'i');
        
        return ({
            itens: !regExp ? state.itens : state.itens.filter((item) => item.titulo.match(regExp))
        })
    })

    return (
        <>
            <Banner />
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