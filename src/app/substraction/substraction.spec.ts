import { substration  } from './substraction';

describe('substration uni tests', () => {

  it('Should subs 0 - 2 = -2' , () => {
    let result = 0;
    result = substration(0, 2);
    expect(result).toBe(-2);
  });

  it('Should subs 9 - 3 = 6' , () => {
    let result = 0;
    result = substration(9, 3);
    expect(result).toBe(6);
  });

  it('Should subs 3.1416 - 0.1416 = 3.0' , () => {
    let result = 0;
    result = substration(3.1416, 0.1416);
    expect(result).toBe(3.0);
  });

  it('Should subs 2.7 - 0.7 = 2.0' , () => {
    let result = 0;
    result = substration(2.7, 0.7);
    expect(result).toBe(2.0);
  });

});
