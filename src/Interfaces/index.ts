

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
    children?: React.ReactNode
    img?: string
    noImg?: boolean
    anunciar?: boolean
}

export interface RootState {
    carrinho: Item[];
}

export interface ItemCarrinho {
    id: string
    quantidade: number
}