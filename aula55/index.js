// IIFE -> Immediately invoked function expression
(function( idade , peso , altura){
    const sobrenome = 'Dias';
    function criarnome(nome){
        return nome +  '' + sobrenome;
    }
    function falaNome(){
        console.log(criarnome('Ricardo'));
    }
    falaNome();
 })();
