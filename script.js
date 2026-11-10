let array = [3, 7, -2, 5, 8, 1, 2, 6, -4, 12];

let decrescente = array.slice().sort(function (a, b) {

  return b - a;

});

console.log("Decrescente:", decrescente);

let crescente = array.slice().sort(function (a, b) {

  return a - b;

});

console.log("Crescente:", crescente);