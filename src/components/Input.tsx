import  {type Ref}  from "react"
import styled from "styled-components"


const StyledInput = styled.input`
     
        border: none;
        border-radius: 8px;
        padding: 4px 8px;
        font-family: "Montserrat", sans-serif;
        font-size: 20px;
        font-weight: 600;
        color: #1875E8;
        &:focus {
            outline: 2px solid #1875E8
        }
`



// Inserindo ref como uma props de input  
                                          // Tipando o componente como input7 
                                                                              // ref permite manipular o dom, nesse caso é usado para focar no input
const Input = ({ value, onChange, ...rest }: React.InputHTMLAttributes<HTMLInputElement>, ref?: Ref<HTMLInputElement>) => {
    return (
      <StyledInput
        ref={ref} // ref passada aqui
        value={value}
        onChange={onChange}
        {...rest}
      />
    );
  }
;

export default Input;