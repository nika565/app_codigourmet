import { url } from "../../router/rota";
import { endpointReceitas } from "../../router/rota";
import { endpointMinhasReceitas } from "../../router/rota";
import AsyncStorage from "@react-native-async-storage/async-storage";

async function pegaDados() {
    const resposta = await AsyncStorage.getItem('dados');
    const objeto = resposta != null ? JSON.parse(resposta) : '';

    return objeto;
}

export default async function minhasReceitas() {
    // console.log(id);
    // console.log(token);

    try {

        const usuario = await pegaDados();

        const requisicao = await fetch(`${url}${endpointReceitas}${endpointMinhasReceitas}/${usuario[0].id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${usuario[1]}`
            }
        })

        const resposta = await requisicao.json()

        // console.log(resposta);
        return resposta;

    } catch (error) {
        console.log(error);
    }
}