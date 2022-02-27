const pessoa = {
    nome: 'Ricardo',
    sobrenome : 'Dias',
    idade :15,
    enderco : {
        rua: "av josei",
        numero: 218
    }
}

const { enderco: {rua, numero}} = pessoa;
console.log()