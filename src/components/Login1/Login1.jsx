import css from './Login1.module.css'
import Input from "../../components/Input/Input.jsx";
import Titulo from "../Titulo/Titulo.jsx";
import Botao from "../Botao/Botao.jsx";

export default function Login1() {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className={"col-7 " + css.padding}>
                    <Titulo titulo={'Bem vindo de volta!'} cor={'azul-claro'}/>
                    <div className={"d-flex flex-column align-items-start justify-content-center gap-5"}>
                        <form className={"d-flex flex-column align-items-center justify-content-center gap-4"}>
                            <div className={"d-flex flex-column align-items-start justify-content-center gap-3 " + css.width}>
                                <Input
                                    label={"CPF/CNPJ"}
                                    type={"text"}
                                    placeholder={"Digite seu CPF ou CNPJ"}
                                    required={"True"}
                                />

                                <div>
                                    <Input
                                        label={"Senha"}
                                        type={"password"}
                                        placeholder={"Digite sua senha"}
                                        required={"True"}
                                    />

                                    <a className={css.link}>Esqueci minha senha</a>
                                </div>
                            </div>

                            <div className={"d-flex flex-column align-items-center justify-content-center gap-5"}>
                                <Botao cor={'amarelo'} texto={''}/>

                                <div className={"d-flex flex-column align-items-center gap-1"}>
                                    <p className={css.p}>Ainda não está no Doar+?</p>
                                    <button type="submit" className="">AAAAAAAAAA</button>
                                </div>
                            </div>


                        </form>
                    </div>
                </div>
                <div className={"col-5 d-flex justify-content-end"}>
                    <img className={css.imagem} src='/cachorro_macaco.png' alt="Cachorro com um macaco de pelúcia"/>
                </div>
            </div>
        </div>

    )
}