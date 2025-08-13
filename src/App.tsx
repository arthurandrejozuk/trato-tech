import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home";
import Default from "./layout/Default";
import Categoria from "./pages/Categoria";
import Carrinho from "./pages/Carrinho";

function App() {

  return (
       <BrowserRouter>
            <Routes>
              <Route path="/" element={<Default />} >
                <Route index element={<Home />} />
                <Route path="/categoria/:id" element={<Categoria />} />
                <Route path="/carrinho" element={<Carrinho/>}/>
              </Route>
            </Routes>
        </BrowserRouter>
  )
}

export default App;
