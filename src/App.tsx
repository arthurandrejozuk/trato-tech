import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Default from "./layout/Default";
import Categoria from "./pages/Categoria";
import Carrinho from "./pages/Carrinho";
import Anuncie from "./pages/Anuncie";

function App() {

  return (
       <BrowserRouter>
            <Routes>
              <Route path="/" element={<Default />} >
                <Route index element={<Home />} />
                {/* Uma maneira de organizar varias paginas para cada categoria existente 
                  dentro dela haverá um algoritmo para determinar qual a categoria pelo id 
                */}
                <Route path="/categoria/:id" element={<Categoria />} />
                <Route path="/carrinho" element={<Carrinho />} />
                 {/* Aqui pegaremos o id da página que o quero anunciar foi clicado */}
                <Route path="/anunciar/:id" element={<Anuncie/>}/>
                <Route path="/anunciar" element={<Anuncie/>}/>
              </Route>
            </Routes>
        </BrowserRouter>
  )
}

export default App;
