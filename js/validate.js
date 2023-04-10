//Seu JavaScript de validação aqui
export function valida(input) {
    // const tipoDeInput = input.dataset.tipo;

    // if(validadores[tipoDeInput]){
    //     validadores[tipoDeInput](input);
    // }

    console.dir(input);
}

const validadores = {
    nome: input => validaNome(input)
}