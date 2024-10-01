import { Messaging } from './messaging';

const creatSut = () => {
  return new Messaging();
};

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks()); //Depois de cada teste limpa os mocks

  it('should return undefined', () => {
    //System under test
    const sut = creatSut();
    expect(sut.sendMessage('teste')).toBeUndefined();
  });

  it('should call console.log once', () => {
    const sut = creatSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with "Mensagem enviada:", and msg', () => {
    const sut = creatSut();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada:', 'teste');
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
