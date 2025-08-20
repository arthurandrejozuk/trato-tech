import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Rodape from "../components/Rodape";

export default function Default() {
    // Todas as páginas possuirão um cabeçalho e um rodapé
    return (
        <div>
            <Header />
            {/* Outlet permite que o route receba um elemento JSX 
                esse conteúdo será preenchido pelo route, dependendo da url
            */}
            <Outlet/>
            <Rodape />
        </div>
    )
}