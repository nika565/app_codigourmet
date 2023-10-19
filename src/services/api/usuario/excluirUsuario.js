import { url, endpointUsuarios } from "../../router/rota";

// Função para excluir usuário
export default async function excluirUsuario(id, token) {

    try {

        const requisicao = await fetch(`${url}${endpointUsuarios}/${id}`, {
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
        return;
    }

}