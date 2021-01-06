/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import calc, { sum, sub, multi, div } from '../src/main.js';

describe('Calc', () => {
  describe('Smoke tests', () => {
    it('Should have the calc lib', () => {
      expect(calc).to.exist;
    });
    it('Should exist the method sum', () => {
      expect(calc.mais).to.exist;
      expect(calc.mais).to.be.function;
    });

    it('Should exist the method sub', () => {
      expect(calc.menos).to.exist;
      expect(calc.menos).to.be.function;
    });

    it('Should exist the method multi', () => {
      expect(calc.vezes).to.exist;
      expect(calc.vezes).to.be.function;
    });

    it('Should exist the method div', () => {
      expect(calc.por).to.exist;
      expect(calc.por).to.be.function;
    });
  });

  describe('Sum', () => {
    it('Should return 4 when `sum(2, 2)`', () => {
      expect(sum(2, 2)).to.equal(4);
    });
  });

  describe('Sub', () => {
    it('Should return -4 when `sub(6, 10)`', () => {
      expect(sub(6, 10)).to.be.equal(-4);
    });
    it('Should return 4 when `sub(6, 2)`', () => {
      expect(sub(6, 2)).to.be.equal(4, 'Deu erro carai');
    });
  });

  describe('Multi', () => {
    it('Should return 20 when `multi(5, 4)`', () => {
      expect(multi(5, 4)).to.be.equal(20, 'Deu merda!');
    });
  });

  describe('Div', () => {
    it('Should return 6 when `div(12, 2)`', () => {
      expect(div(12, 2)).to.be.equal(6);
    });
    it('Should return a erro when `div(12, 0)`', () => {
      expect(div(12, 0)).to.be.equal(Infinity);
    });
  });
});
