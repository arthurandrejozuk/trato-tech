import { useSelector } from "react-redux";
import Banner from "../components/Banner";
import type { RootState } from "../store";
import { useParams } from "react-router-dom";
import Cards from "../components/Cards";
import Card from "../components/Card";

export interface Item {
        titulo: string;
        descricao: string;
        foto: string;
        favorito: boolean;
        preco: number;
        id: string;
        categoria: string;
}

export default function Categoria() {

    const { id } = useParams();
    
    const { categoria, itens } = useSelector((state: RootState) => {         
        
        const regExp = new RegExp(state.busca, 'i');
        return {
                categoria: state.categorias.find(categoria => categoria.id === id),
                itens: state.itens.filter(item => item.categoria === id && item.titulo.match(regExp)),
            }
        }
    );

    return (
        <div>
            <Banner
                title={categoria?.title}
                img={categoria?.img}
            />
            <Cards>
                {itens?.map((item: Item) => (
                    <Card favorito={item.favorito} categoria={item.categoria} id={item.id} titulo={item.titulo} descricao={item.descricao} foto={item.foto} preco={item.preco} />
                ))}
            </Cards>
        </div>
    )
}