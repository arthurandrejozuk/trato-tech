import styled from "styled-components"
import { IoMdSearch } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { mudarBusca, resetarBusca } from "../store/reducers/busca";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Input = styled.div`
    
    input{
        padding: 12px 40px 12px 12px;
        border-radius: 8px;
        font-size: 16px;
        border: none;
        box-shadow: 1px 1px 4px 2px gray
    }
    .icon__search{
        position: relative;
        right: 28px;
        top: 3px;
    }
    @media(max-width: 1024px){
        width: 100%;
        text-align: center;
        margin-top: 24px;
        input{
            width: 80%;
        }
    }

`

interface RootState {
    busca: string
}

export default function Search() {
    const busca = useSelector((state: RootState) => state.busca)
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(() => {
        dispatch(resetarBusca())
    },[location.pathname, dispatch])
    return (
        <Input>
            <input
                value={busca}
                onChange={(event) => dispatch(mudarBusca(event.target.value))}
                type="text"
                placeholder="O que você procura?"
            />
            <IoMdSearch className="icon__search"/>
        </Input>
    )
}