const expect = require('chai').expect;

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

  it('should be an array', function() {
    expect(arr).to.be.an('array');
  });

  it('should have a size of 4 when pushed another value to the array', function() {
    arr.push(4);
    expect(arr).to.have.lengthOf(4);
  });

  it('should have a size of 2 when a value is popped from the array', function() {
    arr.pop();
    expect(arr).to.have.lengthOf(2);
  });

  it('should remove 3 after pop', function(){
    arr.pop();
    expect(arr).to.not.include(3)
  });

  it('should return true when the popped element is 3', function() {
    expect(arr.pop() === 3).to.be.true;
  })

});
