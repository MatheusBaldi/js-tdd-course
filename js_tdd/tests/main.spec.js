/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import { expect } from 'chai';
import fizzBuzz from '../src/main';

describe('FizzBuzz', () => {
  it('should return `Fizz` when multiple of 3', () => {
    expect(fizzBuzz(3)).to.be.equal('Fizz');
    expect(fizzBuzz(6)).to.be.equal('Fizz');
  });

  it('should return `Buzz` when multiple of 5', () => {
    expect(fizzBuzz(5)).to.be.equal('Buzz');
    expect(fizzBuzz(10)).to.be.equal('Buzz');
  });

  it('should return `FizzBuzz` when multiple of both, 3 and 5', () => {
    expect(fizzBuzz(30)).to.be.equal('FizzBuzz');
    expect(fizzBuzz(15)).to.be.equal('FizzBuzz');
  });

  it('shoud return the passed number if not multiple of 3 or 5', () => {
    expect(fizzBuzz(4)).to.be.equal(4);
    expect(fizzBuzz(7)).to.be.equal(7);
  });

  it('shoud return 0 when `fizzBuzz(0)`', () => {
    expect(fizzBuzz(0)).to.be.equal(0);
  });
});
