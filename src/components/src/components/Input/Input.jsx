import css from './Input.module.css'
import { useState } from 'react'

export default function Input({tamanho = 'normal', label, type, placeholder, required = false}) {
    const [input, setInput] = useState('')

    function alterarInput(e) {
        setInput(e.currentTarget.value)
    }

    return (
        <div className={css.inputGroup}>
            <label className={css.label}>{label}</label>
            <input
                className={css[tamanho]}
                type={type}
                onChange={alterarInput}
                value={input}
                required={required}
                placeholder={placeholder}
            />
        </div>
    )
}