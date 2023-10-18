// import { url } from "../router/rota";

// export default async function autenticar(token){
//     try {
//         const requisicao = await fetch(`${url}/usuarios`,{
//             method: 'GET',
//             headers: {
//                 'Content-Type' : 'application/json',
//                 'authorization': `Bearer ${token}`
//             }
//         });

//         const resposta = await requisicao.json();
//         console.log(resposta);

//         return(1);

//     } catch (error) {
//         console.log(error)
//     }
// }