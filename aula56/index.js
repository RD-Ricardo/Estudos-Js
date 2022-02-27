//factory function(função fabrica)
function criaPessoa(nome,sobrenome ,a ,p){
    return {
        nome,
        sobrenome,
        peso:p,
        altura:a,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        //setter
        set nomeCompleto(valor){
            valor =  valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
        },
        fala(assunto){
            return `${this.nome} está ${assunto}.${this.peso}`;
        },
        get imc(){
            const indice = this.peso / (this.altura **2);
            return indice.toFixed(2);
        }
        
    }
}

const p1 = criaPessoa('Ricardo' , 'Dais', 1.8, 89);
p1.nomeCompleto = 'Ricardo Dias'
console.log(p1.sobrenome);