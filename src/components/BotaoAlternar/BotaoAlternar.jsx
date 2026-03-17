import Botao from "./assets/components/Botao/Botao";

import { useState } from 'react';

export default function BotaoAlternar() {
    const [opcao, setOpcao] = useState(0);

    return (
        <div className="div">
            <button className={"btnong " + (opcao === 0 ? "ativo" : "")}
                    onClick={() => setOpcao(0)}>
                ONG
            </button>
            <button className={"btndoador " + (opcao === 1 ? "ativo" : "")}
                    onClick={() => setOpcao(1)}>
                Doador
            </button>
        </div>
    )
}