// Primeiro eu estou imporando a URL da API
import { url } from "../router/rota";

export default async function cadastro(nome, sobrenome, email, senha){
    // O TRY faz o código TENTAR executar
    try {
        const usuario = {nome, sobrenome, email, senha}

        const requisicao = await fetch(`${url}/usuarios`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(usuario)
        });

        const resposta = await requisicao.json();

        return resposta;
    } catch (error) {
        console.log(error);
    }
}