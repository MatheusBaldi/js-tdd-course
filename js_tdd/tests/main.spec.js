describe('Main', function() {

  before(function() {
    console.log('before');
  });


  after(function() {
    console.log('after');
  });

  beforeEach(function() {
    console.log('before each');
  });

  afterEach(function() {
    console.log('after each');
  });

  describe('asd', function() {
    context('case1', function() {
      it('test 1', function() {

      });
    });
    context('case2', function() {
      it('test 2', function() {
      });
    });
  });
  describe('asdss', function() {
    context('case2', function() {
      it('test 2', function() {
      });
    });
  });
});
