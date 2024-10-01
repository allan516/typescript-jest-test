import { Persistency } from './persistency';

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks()); //Depois de cada teste limpa os mocks

  it('should return undefined', () => {
    //System under test
    const sut = new Persistency();
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('should call console.log once', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with "Pedido salvo com sucesso..."', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso...');
  });
});
/*
Describe(): Para testar em grupo, posso ter mais de um describe e também é possível colocar um dentro do outro.


describe('Descrição: Grupos de teste 1', () => {
  it('Descrição do teste (it)', () => {
    const number = 1;
    expect(number).toBe(1);
  });
});

describe('Descrição: Grupos de teste 2', () => {
  test('Descrição do teste (test)', () => {
    const nome = 'Allan';
    expect(nome).toBe('Allan');
  });
});

it('Descrição do teste (it) 3', () => {
  const number = 1;
  expect(number).toBe(1);
});
test('Descrição do teste (test) 4', () => {
  const nome = 'Allan';
  expect(nome).toBe('Allan');
});
*/
