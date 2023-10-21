import { url, endpointReceitas } from "../../router/rota";

// Função para criar receitas
export default async function criarReceita(token, nome, idCriador, ingredientes, modoPreparo, tempo) {

    try {

        const receita = {nome, idCriador, ingredientes, modoPreparo, tempo}
        
        const requisicao = await fetch(`${url}${endpointReceitas}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'authorizathion': `Bearer ${token}`
            },
            body: JSON.stringify(receita)
        });

        const resposta = await requisicao.json();

        return resposta;

    } catch (error) {
        console.log(error);
        const resposta = {msg: `Algo deu errado. Tente novamente mais tarde.`, status: `error`}
        return resposta;
    }

}