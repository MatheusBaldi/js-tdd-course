describe('Main', function() {
  describe('Method A', function() {
    context('Case 1', function() {
      it('should happen x', function() {
        throw new Error('just an error');
      });
    });

    context.skip('Case 2', function() {
      it('should happen x', function() {
        //
        throw new Error('just an error');

      });
      it('should happen vdsvds', function() {
        //
      });
    });
  });

  describe('Method B', function() {

  });
});
