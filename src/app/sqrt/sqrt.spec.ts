import { sqrt } from './sqrt';

describe('sqrt uni tests', () => {

  it('Should compute sqrt √25 = 5' , () => {
    let result = 0;
    result = sqrt(25);
    expect(result).toBe(5);
  });

  it('Should compute sqrt √16 = 4' , () => {
    let result = 0;
    result = sqrt(16);
    expect(result).toBe(4);
  });

  it('Should compute sqrt √9 = 3' , () => {
    let result = 0;
    result = sqrt(9);
    expect(result).toBe(3);
  });

  it('Should compute sqrt √4 = 2' , () => {
    let result = 0;
    result = sqrt(4);
    expect(result).toBe(2);
  });
});
