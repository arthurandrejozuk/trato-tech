

export interface Item {
    titulo: string;
    descricao: string;
    foto: string;
    favorito: boolean;
    preco: number;
    id: string;
    categoria: string;
    carrinho?: boolean;
    quantidade?: number;
}

export interface IBanner {
    title?: string,
    paragraph?: string,
    button?: string,
    img?: string
    noImg?: boolean
}

export interface RootState {
    carrinho: Item[];
}

export interface RootStateCarrinho {
    carrinho: ItemCarrinho[];
    itens: Item[]
    total: number;
    busca: string;
}

export interface ItemCarrinho {
    
    id: string
    quantidade: number
       
}