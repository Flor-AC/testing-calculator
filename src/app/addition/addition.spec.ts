import { addition } from './addition';

describe('addition uni tests', () => {

  it('Should add 2 + 2 = 4' , () => {
    let result = 0;
    result = addition(2, 2);
    expect(result).toBe(4);
  });

  it('Should add 0 + -2 = -2' , () => {
    let result = 0;
    result = addition(0, -2);
    expect(result).toBe(-2);
  });

  it('Should add 3.0 + 0.1416 = 3.1416' , () => {
    let result = 0;
    result = addition(3.0, 0.1416);
    expect(result).toBe(3.1416);
  });

  it('Should add 2.0 + 0.7 = 2.7' , () => {
    let result = 0;
    result = addition(2, 0.7);
    expect(result).toBe(2.7);
  });

  it('Should add 0.0 + 0.0 = 0.0' , () => {
    let result = 0;
    result = addition(0, 0);
    expect(result).toBe(0);
  });

});
