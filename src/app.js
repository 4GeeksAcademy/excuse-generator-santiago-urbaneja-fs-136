
let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function indiceAleatorio(lista) { /* Para elegir un elemento al azar de una lista */
  return lista[Math.floor(Math.random() * lista.length)];
}

document.addEventListener("DOMContentLoaded", () => {
  let excusa = `${indiceAleatorio(who)} ${indiceAleatorio(action)} ${indiceAleatorio(what)} ${indiceAleatorio(when)}`;
  document.getElementById("excusa").innerHTML = `<strong>${excusa}</strong>`;
});

