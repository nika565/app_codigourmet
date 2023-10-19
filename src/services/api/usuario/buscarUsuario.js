import { url, endpointUsuarios } from "../../router/rota";

// Função para buscar dados de um usuário específico
export default async function buscarUsuario(id, token) {

    try {

        // Essa rota  de API é privada, portanto é necessário passar o token de autorização
        const requisicao = await fetch(`${url}${endpointUsuarios}/${id}`, {
            method: 'GET',
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