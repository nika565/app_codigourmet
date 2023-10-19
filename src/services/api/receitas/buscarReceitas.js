import { url, endpointReceitas } from "../../router/rota";

// Função para buscar um receita específica
export default async function buscarReceitas(id, token) {

    try {

        const requisicao = await fetch(`${url}${endpointReceitas}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        const resposta = requisicao.json();

        return resposta;
        
    } catch (error) {
        console.log(error);
        const resposta = {msg: `Algo deu errado. Tente novamente mais tarde.`, status: `error`}
        return resposta;
    }

}