import { createSlice } from "@reduxjs/toolkit";

export interface ItemCarrinho {
    
    id: string
    quantidade: number
       
}


const initialState:ItemCarrinho[] = []

const carrinhoSlice = createSlice({
    name: "categorias",
    initialState,
    reducers: {
        mudarCarrinho: (state, { payload }) => {
            const itemExist = state.some(item => item.id == payload);
            
            if (!itemExist) return [
                ...state,
                {
                    id: payload,
                    quantidade: 1
                }
            ]
            return state.filter(item => item.id !== payload)
        },
        mudarQuantidade: (state, { payload }) => {
            state = state.map(itemNoCarrinho => {
                if (itemNoCarrinho.id === payload.id) itemNoCarrinho.quantidade += payload.quantidade;
                console.log(itemNoCarrinho.quantidade)
                return itemNoCarrinho;
            })
        },
        resetarCarrinho: () => initialState,
    },
});

export const { mudarCarrinho, mudarQuantidade, resetarCarrinho } = carrinhoSlice.actions

export default carrinhoSlice.reducer;