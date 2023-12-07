/*Escriba una función que utilice la API de GitHub para obtener la lista de repositorios para un usuario determinado ('https://api.github.com/users/' + usuario + '/repos'). 
La función toma el nombre del usuario (ponga 'google' como nombre) como parámetro y devuelve una Promesa que se resuelve con el conjunto de repositorios. */
function obtenerRepositorios(usuario){
    const url = `https://api.github.com/users/${usuario}/repos`;

    return fetch (url)
        .then(response => {
            if(!response.ok){
                throw new Error(`Error en la solicitud: ${response.status}`)
            }

             return response.json();
    })

    .then(repositorios => {
        console.log(repositorios);
        return repositorios;
    })

    .catch(error => {
        console.error(`Error: ${error.message}`)
    })
}

const nombreDeUsario = "SrWilly19";
//obtenerRepositorios(nombreDeUsario);

//Escriba una función que tome una matriz de cadenas como parámetro y devuelva una nueva matriz que contenga solo las cadenas que contienen la letra
// 'a'.const cadenas = ["apple", "banana", "orange", "grape", "kiwi"];
const cadenas = ["apple", "banana", "orange", "grape", "kiwi"];
const cadenasConA = cadenas.filter ((cadena) => {
    return cadena.toLowerCase().includes("a");
})
//console.log(cadenasConA);

//Escribe una función que tome un objeto como parámetro y devuelva un nuevo objeto con las propiedades del objeto original en orden alfabético.
const person = {
    nome: 'Mario',
    cognome: 'Rossi',
    eta: 32,
    professione: 'Programmatore'
};
function ordenarAlfabeticamentePropiedades(objeto){
    const propiedades = Object.keys(objeto);

    propiedades.sort();
    const objetoOrdenado = [];
    propiedades.forEach(propiedad => {
        objetoOrdenado[propiedad] = objeto[propiedad];
    })

    return objetoOrdenado;
}

const objetoOrdenado = ordenarAlfabeticamentePropiedades(person);
console.log(objetoOrdenado);
