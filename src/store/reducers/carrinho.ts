import { createSlice } from "@reduxjs/toolkit";
import type { ItemCarrinho } from "../../Interfaces";


const initialState:ItemCarrinho[] = []

const carrinhoSlice = createSlice({
    name: "carrinho",
    initialState,
    reducers: {
        mudarCarrinho: (state, { payload }) => {
            // Verifica se item existe no carrinho
            const itemExist = state.some(item => item.id == payload);
            // caso não exista, ele é adicionado
            if (!itemExist) return [
                ...state,
                {
                    id: payload,
                    quantidade: 1
                }
            ]
            // filtra para remover o item do carrinho com id já existente  
            return state.filter(item => item.id !== payload)
        },
        // Adiciona ou tira quantidade do produto
        mudarQuantidade: (state, { payload }) => {
            state = state.map(itemNoCarrinho => {
                // verifica se é o item correto
                if (itemNoCarrinho.id === payload.id) itemNoCarrinho.quantidade += payload.quantidade; // a quantidade pode ser + ou -
                return itemNoCarrinho;
            })
        },
        // apenas volta para o estado inicial, um [] vazio
        resetarCarrinho: () => initialState,
    },
});

export const { mudarCarrinho, mudarQuantidade, resetarCarrinho } = carrinhoSlice.actions

export default carrinhoSlice.reducer;