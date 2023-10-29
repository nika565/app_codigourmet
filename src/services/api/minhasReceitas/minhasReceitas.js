import { url } from "../../router/rota";
import { endpointReceitas } from "../../router/rota";
import { endpointMinhasReceitas } from "../../router/rota";

export default async function minhasReceitas(id, token){
    console.log(id);
    console.log(token);

    try {
        const requisicao = await fetch(`${url}${endpointReceitas}${endpointMinhasReceitas}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${token}`
            }
        })

        const resposta = await requisicao.json()
        
        console.log(resposta);
        return resposta;
        
    } catch (error) {
        console.log(error);
    }
}