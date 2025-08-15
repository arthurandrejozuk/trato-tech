import { useSelector } from "react-redux";
import Banner from "../components/Banner";
import type { RootState } from "../store";
import { useNavigate, useParams } from "react-router-dom";
import Cards from "../components/Cards";
import Card from "../components/Card";
import type { Item } from "../Interfaces";


export default function Categoria() {

    const { id } = useParams();
    const navigate = useNavigate();
    // useSelector é a maneira de pegar os items de store
    // nesse caso filtramos a categoria no qual o id de useParams se iguala 
    // além de filtrar os itens do mesmo tipo da categoria
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
            >
                <button onClick={() => navigate(`/anunciar/${categoria?.id}`)}>Quero anunciar</button>
            </Banner>
            <Cards>
                {itens?.map((item: Item) => (
                    <Card favorito={item.favorito} categoria={item.categoria} id={item.id} titulo={item.titulo} descricao={item.descricao} foto={item.foto} preco={item.preco} />
                ))}
            </Cards>
        </div>
    )
}