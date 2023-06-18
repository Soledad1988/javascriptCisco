//Tarea 1
//Juguemos a la floristería. Declara seis variables, recordando nombrarlas según su propósito:

//el precio de una sola rosa (8) y el número de rosas que tienes (70)
//el precio de un solo lirio (10) y el número de lirios que tienes (50)
//el precio de un solo tulipán (2) y la cantidad de tulipanes que tienes (120)
//Ahora declara tres variables, una para cada una de las rosas, lirios y tulipanes que tienes, 
//en las que colocas su precio total. Inserta los valores correspondientes en las variables utilizando 
//las variables declaradas en el paso anterior. Finalmente, declara una variable en la que almacenes 
//el precio de todas tus flores (nuevamente, usa las variables anteriores para la inicialización). 
//Muestra toda la información del inventario en la consola de la siguiente forma:
let precioRosas = 8;
let nroRosas = 70 ;
let precioLirios = 10;
let nroLirios = 50;
let preciosTulipan =2;
let nroTulipan = 120;

let precioTotalRosas = precioRosas * nroRosas;
let precioTotalLirios = precioLirios * nroLirios;
let precioTotalTulipan = preciosTulipan * nroTulipan;

let total = precioTotalRosas + precioTotalLirios + precioTotalTulipan;

console.log("Rosa: precio unitario: "+precioRosas + " cantidad: "+nroRosas + " valor: "+precioTotalRosas);
console.log("Lirios: precio unitario: "+precioLirios + " cantidad: "+nroLirios + " valor: "+precioTotalLirios);
console.log("Tulipan: precio unitario: "+preciosTulipan + " cantidad: "+nroTulipan + " valor: "+precioTotalTulipan);
console.log("Total: "+total);





//Tarea 2

//Modifica el código del ejemplo anterior. Supón que los precios de las flores serán constantes (no cambiarán). 
//Declara e inicializa las variables restantes de la misma manera que en el ejemplo anterior. 
//Muestra toda la información recopilada en la consola. 
//Ahora disminuye el número de rosas en 20 y el de lirios en 30. 
//Vuelve a mostrar toda la información recopilada en la consola.
console.log("-------------cambios en stock-----------")
let nuevoNroRosas = nroRosas - 20;
let nuevoNroLirios = nroLirios - 30;

let precioTotalRosas2 = precioRosas * nuevoNroRosas;
let precioTotalLirios2 = precioLirios * nuevoNroLirios;

let nuevoTotal = precioTotalRosas2 + precioTotalLirios2 + precioTotalTulipan;

console.log("Rosa: precio unitario: "+precioRosas + " cantidad: "+nuevoNroRosas + " valor: "+precioTotalRosas2);
console.log("Lirios: precio unitario: "+precioLirios + " cantidad: "+nroLirios + " valor: "+precioTotalLirios2);
console.log("Tulipan: precio unitario: "+preciosTulipan + " cantidad: "+nuevoNroLirios + " valor: "+precioTotalTulipan);
console.log("Total: "+nuevoTotal);