import { division } from './division';

describe('division uni tests', () => {

  it('Should divide 2 / 2 = 1' , () => {
    let result = 0;
    result = division(2, 2);
    expect(result).toBe(1);
  });

  it('Should divide 9 / 2 = 4.5' , () => {
    let result = 0;
    result = division(9, 2);
    expect(result).toBe(4.5);
  });

  it('Should divide 3.0 / 0.5 = 6' , () => {
    let result = 0;
    result = division(3.0, 0.5);
    expect(result).toBe(6);
  });

  it('Should divide 0 / 1 = 0' , () => {
    let result = 0;
    result = division(0, 1);
    expect(result).toBe(0);
  });
});
