import { createSlice } from "@reduxjs/toolkit";

const areaDeBusca = '';

const buscaSlice = createSlice({
    name: 'buscar',
    initialState: areaDeBusca,
    reducers: {
        mudarBusca: (state, { payload }) => payload,
        resetarBusca:() => areaDeBusca
    }
})

export const { mudarBusca, resetarBusca } = buscaSlice.actions;

export default buscaSlice.reducer;