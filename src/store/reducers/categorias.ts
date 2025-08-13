import { createSlice } from "@reduxjs/toolkit";


// Acessando o tipo específico:

const estadoInicial = [
    {
        id: "eletronicos",
        img: "/src/assets/produtos/Dispositivos.png",
        title: "Dispositivos"
    },
      {
        id: "automotivos",
        img: "/src/assets/produtos/Automotivo.png",
        title: "Automativo"
    },
        {
        id: "jogos",
        img: "/src/assets/produtos/Jogos.png",
        title: "Jogos"
    },
          {
        id: "escritorio",
        img: "/src/assets/produtos/Escritório.png",
        title: "Escritório"
    },
            {
        id: "som",
        img: "/src/assets/produtos/Som e Imagem.png",
        title: "Som e imagem"
    },
              {
        id: "servicos",
        img: "/src/assets/produtos/Servicos.png",
        title: "Prestações de serviços"
    },
              
]

const categoriasSlice = createSlice({
    name: "categorias",
    initialState: estadoInicial,
    reducers: {},
});

export default categoriasSlice.reducer;