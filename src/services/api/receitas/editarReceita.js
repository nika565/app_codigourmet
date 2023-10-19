import { url, endpointReceitas } from "../../router/rota";

// Função para editar a receita
export default async function editarReceita(id, token, nome, idCriador, ingredientes, modoPreparo, tempo) {

    try {

        const receita = {nome, idCriador, ingredientes, modoPreparo, tempo}
        
        const requisicao = await fetch(`${url}${endpointReceitas}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            },
            body: JSON.stringify(receita)
        });

        const resposta = await requisicao.json();

        return resposta;

    } catch (error) {
        console.log(error);
        const resposta = {msg: `Algo deu errado. Tente novamente mais tarde.`, status: `error`}
        return resposta;;
    }

}