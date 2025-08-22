import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { ICategoria } from "../../Interfaces";
import categoriasService from "../../services/categoria";
import { createStandaloneToast } from "@chakra-ui/toast";

// import { resetarCarrinho } from "./carrinho";


const { toast } = createStandaloneToast()

// Categorias fixas
const estadoInicial: ICategoria[] = [
   
]

export const buscarCategorias = createAsyncThunk(
    "categorias/buscar",
    categoriasService.buscar
)

const categoriasSlice = createSlice({
    name: "categorias",
    initialState: estadoInicial,
    reducers: {
        adicionarCategorias: (state, {payload}) => {
            state.push(...payload);
        }
    },
    extraReducers: builder => {
        builder
        .addCase(
            buscarCategorias.fulfilled,
            (state, {payload}) => {
                toast({
                    title: "Sucesso",
                    description: "Categorias carregadas com sucesso",
                    isClosable: true,
                    duration: 2000,
                    status: 'success'
                })
                return payload
            }
        )
        .addCase(
            buscarCategorias.pending,
            () => {
                 toast({
                    title: "Carregando",
                    description: "Carregando categorias",
                    isClosable: true,
                    duration: 2000,
                    status: 'loading'
                })
            }
        )
        .addCase(
            buscarCategorias.rejected,
            () => {
                 toast({
                    title: "Erro",
                    description: "Erro ao carregar categorias",
                    isClosable: true,
                    duration: 2000,
                    status: 'error'
                })
            }
        )
    }
});

export const { adicionarCategorias } = categoriasSlice.actions;

export default categoriasSlice.reducer;