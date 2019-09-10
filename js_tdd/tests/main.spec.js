describe('Main', function() {
  let arr; // define a variávvel no escopo mais alto

  // roda uma vez antes de todos os it
  before(function() {
    // abre conexão com banco
    // cria conjunto de dados
  });

  // roda uma vez depois de todos os it
  after(function() {
    // fecha conexão com banco
    // apaga conjunto de dados
  });

  // roda uma vez antes de cada it
  beforeEach(function() {
    arr = [1, 2, 3]; // reseta o valor da variável para cada it
  });

  // roda uma vez depois de cada it
  afterEach(function() {
  });



  it('should have a size of 4 when pushed another value to the array', function() {
    arr.push(4);
    console.log(arr.length); //4
  });

  it('should have a size of 2 when a value is popped from the array', function() {
    arr.pop();
    console.log(arr.length); //2
  });

  it('should remove 3 when use pop in the array', function(){
    console.log(arr.pop() === 3); //true
  });

});
