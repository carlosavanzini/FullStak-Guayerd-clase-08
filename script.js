// Ejercicios con arrays:


// a) Solicitar al usuario que ingrese 5 nombres de frutas y almacenarlos en un array.
    // let frutas =["Pera","Manzana","Kiwui","Melon","Sandia"]
    // for (let i = 0; i < 5; i++) {
    // }
    // alert(`Las frutas son: ${frutas}`);
// b) Ahora, solicitar al usuario que ingrese otros nombres de frutas, la cantidad que desee, sin pedirle de antemano cuál será la cantidad a ingresar.
// let frutas2=[];
// let agregar;
// while (agregar!="fin") {
//         agregar=prompt("Ingrese todas las frutas que desee, cuando no quiera ingresar mas escriba fin");
//         frutas2.push(agregar);
//    }         
//     alert(`Las frutas que agregaste son: ${frutas2}`)

// c) Concatenar ambos arrays y mostrarlo de dos formas diferentes: Con las 5 frutas al principio, y con las 5 frutas al final.
//    let juntos= frutas.concat(frutas2)
//    alert(juntos);
//    let juntos2= frutas2.concat(frutas);
//    alert(juntos2);

// Crear un array con 10 nombres de ciudades, y solicitar al usuario que nos diga un número. Mostrar el nombre de la ciudad en esa posición del array.
// let ciudades=["Colon","San Jose","Cordoba","Rosario","Buenos Aires","Parana","Crespo","Concordia","Villa elisa","Gualeguay"];
// let numero=parseInt(prompt("Ingrese un mumero del 0 al 9 y le mostraremos la ciudad en esa posicion"));
// alert(ciudades[numero]);

// Utilizar el mismo array de ciudades, solicitar al usuario un número y remover esa cantidad de ciudades del array. Mostrar dos opciones: Sacando los datos desde el principio , y desde el final del array.
//  let ciudades=["Colon","San Jose","Cordoba","Rosario","Buenos Aires","Parana","Crespo","Concordia","Villa elisa","Gualeguay"];
//  let numero=parseInt(prompt("Ingrese un mumero del 0 al 9 y le mostraremos el array sin la cantidad de elementos al prinicpio y luego al fina")); 
    // for ( i = 0; i < numero; i++) {
    //     ciudades.pop(numero); 
       
    // }
    // alert(ciudades)


//  for( i = 0; i < numero; i++) {
//     principio=ciudades.shift(numero); 
    
// }
// alert(ciudades)

// Crear un array de 8 posiciones con nombres de artistas musicales y mostrar:
// let artistas =["Mana","Caramelo Santo","Arjona","Luis Miguel","Santana","trinidad","Leo Matioli","catupecu Machu"]
// Su longitud
    // for (i = 0; i<artistas.length; i++) {
    //     }
    //     alert(i);
// El último elemento.
    // alert(artistas[artistas.length-1])
// Solo las posiciones pares
    //  for (i = 0; i<8; i++) {
    //         if (i%2===0) {
    //             alert(artistas[i])
    //         }
    //         }
        
// todos los elementos
    // alert(artistas);
// todos los elementos menos el último 
    //   alert(artistas.pop());
    //   alert(artistas)

// Todos los elementos menos el primero
    // alert(artistas.shift());
    // alert(artistas)
// todos los elementos separados por “*”.
    // alert(artistas.join("*"))
// Solicitar al usuario un nuevo artista para reemplazar al útimo ingresado.
    // let nuevoArtistas=prompt("Ingrese un nuevo artista y lo reemplazaremos por el ultimo de su lista")
    // artistas[7] = nuevoArtistas
    // alert(artistas)

// 5)  Crear un array de 8 posiciones con números enteros  y mostrar:
// Su longitud
// Solo las posiciones impares.
// Solo los NUMEROS impares.
// El mayor de ellos
// Mostrar la mitad de elementos del array. (Pensar esto como si no supieramos la cantidad de posiciones que tiene.)