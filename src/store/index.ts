import { configureStore } from "@reduxjs/toolkit";
import categoriasSlice from "./reducers/categorias";
import itensSlice from "./reducers/itens"
import carrinhoSlice from "./reducers/carrinho"
import buscaSlice from "./reducers/busca"


// configuramos os stores com os todos os slices
const store = configureStore({
    reducer: {
        categorias: categoriasSlice,
        itens: itensSlice,
        carrinho: carrinhoSlice,
        busca: buscaSlice,
    },
})
// retornamos o tipo de store como RootState
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;