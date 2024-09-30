/*

Describe(): Para testar em grupo, posso ter mais de um describe e também é possível colocar um dentro do outro.

*/
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
