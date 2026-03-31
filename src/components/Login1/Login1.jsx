import css from './Login1.module.css'
import Input from "../../components/Input/Input.jsx";
import Titulo from "../Titulo/Titulo.jsx";
import Botao from "../Botao/Botao.jsx";

export default function Login1() {
    return (
        <div className={"container-fluid " + css.secao}>
            <div className="row g-0">
                <div className={"col-md-6 col-md-6 " + css.colunaFormulario}>
                    <div className={css.conteudoFormulario}>
                        <Titulo titulo={'Bem-vindo de volta!'} cor={'azul-claro'} />

                        <form className={css.formulario}>
                            <div className={css.campo}>
                                <Input
                                    label={"CPF/CNPJ"}
                                    type={"text"}
                                    placeholder={"Digite seu CPF ou CNPJ"}
                                    required={true}
                                />
                            </div>

                            <div className={css.campo}>
                                <Input
                                    label={"Senha"}
                                    type={"password"}
                                    placeholder={"Digite sua senha"}
                                    required={true}
                                />
                                <a href="#" className={css.link}>Esqueci minha senha</a>
                            </div>

                            <div className={css.areaBotao}>
                                <Botao cor={'amarelo'} texto={'Login'} />
                            </div>

                            <div className={css.cadastro}>
                                <p className={css.p}>Ainda não está no Doar+?</p>
                                <Botao cor={'vazadoamarelo'} texto={'Cadastre-se'} />
                            </div>
                        </form>
                    </div>
                </div>

                <div className={"col-md-6 " + css.colunaImagem}>
                    <img
                        className={css.imagem}
                        src="/cachorro_macaco.png"
                        alt="Cachorro com um macaco de pelúcia"
                    />
                </div>
            </div>
        </div>
    )
}