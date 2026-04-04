
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function funcionExcusa(lista) { /* Para elegir un elemento al azar de una lista */
  let numeroDeCaja = Math.floor(Math.random() * lista.length);
  let hello = lista[numeroDeCaja];
  return hello;
}

function generarExcusa() { /*Crea la oración juntando los valores de las listas, en este caso de forma random */
  let excusa = `${funcionExcusa(who)} ${funcionExcusa(action)} ${funcionExcusa(what)} ${funcionExcusa(when)}`;
  return excusa;
}

window.onload = function () { /* Busca el elemento por su id, en este caso ("excse") y le añade lo que dice la funcion en este caso generarExcusa() */
  document.getElementById("excuse").innerHTML = generarExcusa();
};

