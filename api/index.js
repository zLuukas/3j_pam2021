const express = required('express')
const servidor = express()

servidor.get(
    '/',(req, res, next) =>{
        return res.send(
            {
                "mensagem": "bem-Vindo(a) ao servidor",
                "cidade" : "Itapeva",
                "uf": "SP" 
            }
        )
    }
)

servidor.listen(3000, () => {
    console.log('Servidor Funcionando!')
})
