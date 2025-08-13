import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Rodape from "../components/Rodape";

export default function Default() {
    return (
        <div>
            <Header />
            <Outlet/>
            <Rodape />
        </div>
    )
}