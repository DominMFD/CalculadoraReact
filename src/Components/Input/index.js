import { InputContainer} from "./styles";

const Input = ({value}) => {
    return (
        <InputContainer>
            <input disbaled value={value}/>
        </InputContainer>
    );
}

export default Input;