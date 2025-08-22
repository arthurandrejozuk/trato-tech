import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
import type { Item } from '../../Interfaces';
import itensService from '../../services/itens';
import { createStandaloneToast } from '@chakra-ui/toast';

const { toast } = createStandaloneToast()

const initialState: Item[] = [];

// Slice é a maneira como inicia um reducer

export const buscarItens = createAsyncThunk(
  'itens/buscar',
  itensService.buscar
)

const itensSlice = createSlice({
    // Nome é como iremos chamar o reducer, nesse caso itens
    name: "itens",
    // estado inicial será o estado que o reducer começa
    initialState,
    // reducers permite criar funções para modificar os estados, seriam as actions
  reducers: {
    // estado é o seria o estado em que os itens se encontram e o payload um dado que será enviado
    cadastrarItem: (state, { payload }) => {
       state.push({...payload, id: uuid()})
    },
   mudarFavorito: (state, { payload }) => {
  const item = state.find(item => item.id === payload);
      if (item) {
        item.favorito = !item.favorito;
      } 
    },
    // Para que o item seja modificado e se mantenha no array, primeiro buscamos o index do item
    // e fazemos um assign para manter o array de item e pegar dentro do state o objeto que recebe o payload, sendo caso, o titulo
    mudarItem: (state, {payload}) => {
      const index = state.findIndex(item => item.id === payload.id)
      Object.assign(state[index], payload.item);
    },
    //Buscamos o index do item a ser excluido e então fazemos um splice
    deletarItem: (state, {payload}) => {
      const index = state.findIndex(item => item.id === payload)
      state.splice(index, 1);
    },
    adicionarItens: (state, {payload}) => {
      state.push(...payload);
    }
},
  extraReducers: builder => {
    builder
    .addCase(buscarItens.fulfilled, 
      (state,{payload}) => {
         toast({
                    title: "Sucesso",
                    description: "Itens carregados com sucesso",
                    isClosable: true,
                    status: 'success',
                    duration: 2000
                })
        return payload
      }
    )
    .addCase(buscarItens.pending,
      (state, {payload}) => {
          toast({
                    title: "Carregando",
                    description: "Itens carregando",
                    isClosable: true,
                    status: 'loading',
                    duration: 2000
                })
                return payload
      }
    ) 
    .addCase(buscarItens.rejected, 
      (state, {payload}) => {
          toast({
                    title: "Erro" + payload,
                    description: "Erros ao carregar itens",
                    isClosable: true,
                    status: 'error',
                    duration: 2000
                })
                
      }
    )
  }
});

export const { mudarFavorito, cadastrarItem, mudarItem, deletarItem, adicionarItens } = itensSlice.actions;

export default itensSlice.reducer;