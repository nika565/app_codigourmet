import { url, endpointReceitas } from "../../router/rota";

// Função para excluir uma receita
export default async function excluirReceita(id, token) {
    try {

        const requisicao = await fetch(`${url}${endpointReceitas}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            }
        });

        const resposta = await requisicao.json();

        return resposta;
        
    } catch (error) {
        console.log(error);
        const resposta = {msg: `Algo deu errado. Tente novamente mais tarde.`, status: `error`}
        return resposta;
    }
}