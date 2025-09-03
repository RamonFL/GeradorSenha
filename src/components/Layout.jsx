import Button from '@mui/material/Button'
import style from './style.module.css'
import { useState } from 'react'
import {gerarLetras} from './functions/GeradorLetras'

export function LayoutGerador() {

    const [senha, setSenha] = useState("")
    const [Copiar, setCopiar] = useState("Copiar")
    let Copiado =  "Copiado!!!"
    const gerarSenha = () => {
        setSenha(gerarLetras())  
        setCopiar("Copiar")  
    }

    return(
        <div className='divContainerGerador'>
            <div className={style.divOp}>
                <Button 
                variant="contained" 
                className={style.BtnGerar}
                onClick={() => setSenha(gerarSenha)}
                >Gerar</Button>

                <Button 
                    variant="contained" 
                    className={style.BtnCopiar} 
                    onClick={() => setCopiar(Copiado)}
                >{Copiar}</Button>
            </div>
            <div className={style.divTextResult}>
                <p>{senha}</p>
            </div>
        </div>
    )
}