import instance from "../common/config/api"

const itensService = {
    buscar: async () => {
        const itens = await instance.get("/itens")
        return itens.data
    }
}

export default itensService;