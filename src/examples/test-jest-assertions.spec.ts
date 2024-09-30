/*
  Criando Asserções Básicas

  Asserções verificam se um valor específico corresponde ao esperado. Alguns exemplos de asserções em Jest:
*/
describe('Primitive values', () => {
  it('should test jest assertions', () => {
    const number = 10;

    expect(number).toBeLessThan(11);
    expect(number).toEqual(10); //Para objetos
    expect(number).toBeLessThanOrEqual(10);
    expect(number).not.toBeNull();

    expect(number).toBeCloseTo(10, 1);
    expect(number).toHaveProperty('toString');
  });

  it('should split tests', () => {
    const number = 10;

    expect(number).toBe(10);
    expect(number).toEqual(10); //Para objetos

    expect(number).not.toBeFalsy();
    expect(number).toBeTruthy();
    expect(number).toBeGreaterThan(9);
    expect(number).toBeGreaterThanOrEqual(9);
    expect(number).toBeCloseTo(10, 1);
    expect(number).toHaveProperty('toString');
  });
});

describe('Objects', () => {
  it('should test jest assertions with objects', () => {
    const person = { name: 'Allan', age: 34 };
    const anotherPerson = { ...person };

    expect(person).toEqual(anotherPerson);
    expect(person).toHaveProperty('age');
    expect(person).toHaveProperty('age', 34);

    expect(person.name).toBe('Allan');
  });
});
