/*

Describe(): Para testar em grupo, posso ter mais de um describe e também é possível colocar um dentro do outro.

*/
describe('Descrição: Grupos de teste', () => {
  it('Descrição do teste', () => {
    const number = 1;
    expect(number).toBe(1);
  });
});

describe('Descrição', () => {
  test('Descrição do teste (test)', () => {
    const nome = 'Allan';
    expect(nome).toBe('Allan');
  });
});

it('Descrição do teste', () => {
  const number = 1;
  expect(number).not.toBe(1);
});
test('Descrição do teste (test)', () => {
  const nome = 'Allan';
  expect(nome).toBe('Allan');
});
