import React, { InputHTMLAttributes } from "react";
import { useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    description?: string,
    label: string,
    updateValue(value: any): void
}

const Input = ({ description, label, updateValue, ...props}: InputProps) => {
    return (
        <>
            <input value={description} onChange={event => updateValue(event.target.value)} {...props}></input>
            <label>{label}</label>
        </>
    )
}

const Income = ({ description, label, updateValue, ...props}: InputProps) => {
    const [setDescription] = useState("");
    const [value, setValue] = React.useState<number>(0);
    
    <form className='input-value'>

            <Input label="Descrição" value={description} updateValue={updateValue}></Input>
            <Input label="Valor" value={value} updateValue={setValue}></Input>

            <button type="submit">Adicionar</button>

    </form>
}

export default function InputModal(){
    const [income, setIncome] = React.useState<number>(0);
    const [expense, setExpense] = React.useState<number>(0);
    
    return(
        <>
            <button className="income">Adicionar entrada</button>

            <button className="expense">Adicionar despesa</button>
        </>
    )
}