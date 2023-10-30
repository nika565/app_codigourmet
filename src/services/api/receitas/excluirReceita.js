import { url, endpointReceitas } from "../../router/rota";
import AsyncStorage from "@react-native-async-storage/async-storage";

async function pegaDados() {
    const resposta = await AsyncStorage.getItem('dados');
    const objeto = resposta != null ? JSON.parse(resposta) : '';

    return objeto;
}

// Função para excluir uma receita
export default async function excluirReceita(id) {
    
    try {

        const usuario = await pegaDados();

        const requisicao = await fetch(`${url}${endpointReceitas}/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${usuario[1]}`
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