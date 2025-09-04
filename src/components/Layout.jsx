import Button from '@mui/material/Button'
import style from './style.module.css'
import { useState } from 'react'


export function LayoutGerador() {

    const [senha, setSenha] = useState("")
    const [Copiar, setCopiar] = useState("Copiar")
    const [senhaqtd, setQuantidade] = useState()

    
    const copiarSenha = () => {
        navigator.clipboard.writeText(senha)
        setCopiar('Copiado!')
    }

    const gerarSenha = () => {
        setSenha(gerarLetras())  
        setCopiar("Copiar")  
    }

    const gerarLetras = () => {
    const caracters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890"
    let resultado = "";

    if(senhaqtd <= 0){
        window.alert('Quantidade Invalida!')
        return
    }

    
    for (let i = 0; i < senhaqtd; i++) {
        const indice = Math.floor(Math.random() * caracters.length);
        resultado += caracters[indice];
    }
    
    return resultado
}

    return(
        <div className={style.divContainerGerador}>

            <div className={style.divQtd}>
                <label htmlFor="SenhaQtd">Tamanho:</label>
                <input 
                    type="number" 
                    id="SenhaQtd" 
                    value={senhaqtd}
                    onChange={(e) => setQuantidade(e.target.value) }
                />
            </div>

            <div className={style.divOp}>
                <Button 
                variant="contained" 
                className={style.BtnGerar}
                onClick={() => setSenha(gerarSenha)}
                >Gerar</Button>

                <Button 
                    variant="contained" 
                    className={style.BtnCopiar} 
                    onClick={() => copiarSenha()}
                >{Copiar}</Button>
            </div>
            <div className={style.divTextResult}>
                <p>Senha: {senha}</p>
            </div>
        </div>
    )
}