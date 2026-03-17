import css from './BotaoAlternar.module.css'
import { useState } from 'react';
import {Link} from "react-router-dom";

export default function BotaoAlternar() {
    const [opcao, setOpcao] = useState(0);

    return (
        <div className="div">
            <Link to={"/cadastroOng"}>  <button className={"btnong " + (opcao === 0 ? "ativo" : "")}
                                                onClick={() => setOpcao(0)}>ONG</button></Link>
            <Link to={"/cadastroDoador"}><button className={"btndoador " + (opcao === 1 ? "ativo" : "")}
                                           onClick={() => setOpcao(1)}>Doador</button></Link>
        </div>
    )
}