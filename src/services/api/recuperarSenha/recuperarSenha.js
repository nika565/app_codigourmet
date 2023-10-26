import { url, endpointSenha } from "../../router/rota";

// Função que manda o email para o usuário
export async function enviarEmail(email) {

    try {

        const requisicao = await fetch(`${url}${endpointSenha}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: email})
        });

        const resposta = await requisicao.json();

        return resposta;
        
    } catch (error) {
        console.log(error);
        const resposta = {msg: `Algo deu errado. Tente novamente mais tarde.`, status: `error`}
        return resposta;
    }

}

export async function recuperarSenha (id, senha) {

    try {

        const requisicao = await fetch(`${url}${endpointSenha}/${id}`, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({senha})
        });

        const resposta = await requisicao.json();

        return resposta;
        
    } catch (error) {
        console.log(error);
        const resposta = {msg: `Algo deu errado. Tente novamente mais tarde.`, status: `error`}
        return resposta;
    }

}