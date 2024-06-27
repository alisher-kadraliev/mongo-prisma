

interface InputProps{
    onChange: any;
    value: string;
    type?: string;
}

const Input:React.FC<InputProps> = ({onChange,value,type}) => {
    return (
        <input onChange={onChange} value={value} type={type}  />
    )
}

export default Input