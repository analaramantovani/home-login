import css from './CadastroDoador1.module.css'
import Titulo from "../Titulo/Titulo.jsx";
import BotaoAlternar from "../BotaoAlternar/BotaoAlternar.jsx";
import Input from "../Input/Input.jsx";
import Botao from "../Botao/Botao.jsx";

export default function CadastroDoador1() {
    return (
        <section>
            <div className={css.organizar}>
                <Titulo titulo={'Venha fazer parte da mudança!'} cor={'rosa'} />
                <BotaoAlternar/>
            </div>
            <div className={css.formulario}>
                <div className={css.campos}>
                    <Input label={'Nome'} type={'text'} placeholder={'Digite seu nome'} required={true}/>
                    <Input label={'CPF'} type={'text'} placeholder={'Digite seu CPF'} required={true}/>
                    <Input label={'Telefone'} type={'text'} placeholder={'Digite seu telefone'} required={true}/>
                    <Input label={'Email'} type={'text'} placeholder={'Digite seu email'} required={true}/>
                </div>
                <div className={css.campos}>
                    <Input label={'Senha'} type={'password'} placeholder={'Digite seu senha'} required={true}/>
                    <Input label={'Confirmar senha'} type={'password'} placeholder={'Confirme sua senha'} required={true}/>
                    <Input label={'Foto de perfil'} type={'file'}  required={true}/>
                </div>
                <Botao texto={'Cadastre-se'} cor={'rosa'}/>
            </div>
        </section>
    )
}