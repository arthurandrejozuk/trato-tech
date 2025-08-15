import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import type { RootState } from "../store";
import styled from "styled-components";
import { useForm, type FieldValues } from 'react-hook-form';
import { cadastrarItem } from "../store/reducers/itens";
import { useParams } from "react-router-dom";

const Section = styled.section`
    display: flex;
    flex-direction: column;
    flex: 1;
    form{
        display: flex;
        padding: 32px;     
        padding-left: 200px;
        padding-right: 200px;
        flex-direction: column;
        gap: 12px;
       justify-content: center;
       flex: 1;
        input{
            padding: 8px 8px;
            font-size:20px;
        }
        select{
            padding: 8px 8px;
            font-size: 20px;
        }
        button{
            padding: 12px;
            background-color: #00a2ff;
            color: white;
            border: none;
            font-size: 20px;
        }
    }

`

export default function Anuncie() {
    const params = useParams();
    // dispatch é utilizado para chamar uma função do reducer
    const dispatch = useDispatch();
    // useSelector é utilizado para chamar o estado do reducer, nesse caso, categorias
    const categorias = useSelector((state:RootState) => state.categorias.map(({title, id}) => ({nome: title,id})))
    const { register, handleSubmit } = useForm({
        defaultValues: {
            categoria: params.id, 
            titulo: '',
            descricao: '',
            foto:'',
            preco: ''
        }
    });

    function cadastrar(data: FieldValues){
        dispatch(cadastrarItem(data))
    }

    return (
        <Section>
            <Banner 
            anunciar={true}
                title="Anuncie aqui!" 
                paragraph="Anuncie seu produto no melhor site do Brasil!"
            />
            <form onSubmit={handleSubmit(cadastrar)}>
                <input {...register('titulo', { required: true })} type="text" placeholder="Nome do produto" alt="nome do produto" />
                <input {...register('descricao', { required: true })} type="text" placeholder="Descrição do produto" />
                <input {...register('foto', { required: true })} type="text" placeholder="URL da imagem do produto" />
                <select disabled={!!params.id} {...register('categoria', { required: true })} >
                    <option disabled value=''>Escolha uma categoria</option>
                    {categorias.map(categoria => (
                        <option key={categoria.id} value={categoria.id}>
                            {categoria.nome}
                        </option>
                    ))}
                </select>
                <input {...register('preco', { required: true, valueAsNumber: true })} type="number" placeholder="Preço do produto"/>
                <button type="submit">Cadastrar produto</button>
            </form>
        </Section>
    )
}