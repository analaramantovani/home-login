import css from './Input.module.css'
import { useState } from 'react'


export default function Input({tamanho = 'inputBig', label, type, placeholder, required = false}) {
    const [input, setInput] = useState('')

    function alterarInput(e) {
        setInput(e.currentTarget.value)
    }


    return (
        <div className={"d-flex flex-column col-6 gap-2"}>
            <label>{label}</label>
            <input className={css[tamanho]} type={type} onChange={alterarInput} value={input} required={required}
                   placeholder={placeholder}/>
        </div>


    )
}