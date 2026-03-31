import css from './Input.module.css'
import { useState } from 'react'

export default function Input({tamanho = 'normal', label, type, placeholder, required = false, maxLength, minLength, soNumeros = false}) {
    const [input, setInput] = useState('')

    function alterarInput(e) {
        let valor = e.currentTarget.value

        if (soNumeros) {
            valor = valor.replace(/\D/g, '')
        }

        setInput(valor)
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
                maxLength={maxLength}
                minLength={minLength}
                inputMode={soNumeros ? 'numeric' : undefined}
            />
        </div>
    )
}