import { url, endpointReceitas } from "../../router/rota";

// Função para puxar algumas receitas
export default async function receitas(token) {

    try {

        const requisicao = await fetch(`${url}${endpointReceitas}`, {
            method: "GET",
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