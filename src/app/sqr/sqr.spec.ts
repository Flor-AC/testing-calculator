import { sqr } from './sqr';

describe('sqr uni tests', () => {

  it('Should compute 2 ^ 2 = 4' , () => {
    let result = 0;
    result = sqr(2);
    expect(result).toBe(4);
  });

  it('Should compute 3 ^ 2 = 9' , () => {
    let result = 0;
    result = sqr(3);
    expect(result).toBe(9);
  });

  it('Should compute 4 ^ 2 = 16' , () => {
    let result = 0;
    result = sqr(4);
    expect(result).toBe(16);
  });

  it('Should compute 5 ^ 2 = 25' , () => {
    let result = 0;
    result = sqr(5);
    expect(result).toBe(25);
  });
});
