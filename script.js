const objeto = [
{
    "nome": "Daniel",
    "idade": 20,
    "programador": true,
    "hobbies": ["Desenhar", "Ler", "Escrever"]
},
{
    "nome": "João",
    "idade": 32,
    "programador": false,
    "hobbies": ["Treinar", "Ler", "Lutar"]
},
{
    "nome": "Maria",
    "idade": 22,
    "programador": true,
    "hobbies": ["Correr", "Dirigir", "Escrever"]
}
]

//Imprime os arrays de objetos
//console.log(objeto)

//Imprime os arrays de objetos como texto em JSON
const jsonData = JSON.stringify(objeto);
console.log(jsonData);

//Converte JSON para objeto
const objetoData = JSON.parse(jsonData);
console.log(objetoData);

objetoData.map((pessoa) => {
    console.log(pessoa.nome)
    console.log(pessoa.idade)
    console.log(pessoa.programador)
    console.log(pessoa.hobbies)
})