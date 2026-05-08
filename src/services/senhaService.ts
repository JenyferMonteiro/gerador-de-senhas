
export default function gerarSenha() {
    let senha: string = '';
    let alfabeto: string = '@ouy8754310876mnbvcxz';
    const TAMANHO: number = 6;

    for(let index = 0; index < TAMANHO; 
                                index++){
        senha = senha + alfabeto.charAt(
                Math.floor(Math.random() * 
                    alfabeto.length));                            
    }
    console.log('SENHA: ', senha);
    return senha;

}