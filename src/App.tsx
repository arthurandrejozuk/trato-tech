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
                <Route path="/categoria/:id" element={<Categoria />} />
                <Route path="/carrinho" element={<Carrinho />} />
                <Route path="/anunciar/:id" element={<Anuncie/>}/>
                <Route path="/anunciar" element={<Anuncie/>}/>
              </Route>
            </Routes>
        </BrowserRouter>
  )
}

export default App;
