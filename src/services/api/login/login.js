import { url } from "../../router/rota";

export default async function login(email, senha){

    const usuario = {
        email: email,
        senha: senha
    }

    try {

        const requisicao = await fetch(`${url}/usuarios/login`, {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(usuario)
        });

        const resposta = await requisicao.json();

        console.log(resposta);

        return resposta;
        
    } catch (error) {
        console.log(error);
    }

}