import { exp } from './exp';

describe('exp uni tests', () => {

  it('Should pow 2 ^ 0 = 1' , () => {
    let result = 0;
    result = exp(2, 0);
    expect(result).toBe(1);
  });

  it('Should pow 2 ^ 1 = 2' , () => {
    let result = 0;
    result = exp(2, 1);
    expect(result).toBe(2);

  });

  it('Should pow 2 ^ 2 = 4' , () => {
    let result = 0;
    result = exp(2, 2);
    expect(result).toBe(4);

  });

  it('Should pow 2 ^ 3 = 8' , () => {
    let result = 0;
    result = exp(2, 3);
    expect(result).toBe(8);
  });
});
