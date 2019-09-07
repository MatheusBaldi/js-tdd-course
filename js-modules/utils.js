function sum(a, b) {
  return a + b;
}

// named export
// permite vários exports dentro de um arquivo
// só pode chamar com o mesmo nome
// import precisa das chaves
export function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

export { mult as multiplicacao, div };


// método principal
// só pode ter um default por arquivo
// importar com qualquer nome
// não precisa utilizar as chaves no import
export default sum;