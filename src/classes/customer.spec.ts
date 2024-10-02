import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};
afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstname, lastName, cpf', () => {
    const sut = createIndividualCustomer('Allan', 'Mendes', '1111.1111');
    expect(sut).toHaveProperty('firstName', 'Allan');
    expect(sut).toHaveProperty('lastName', 'Mendes');
    expect(sut).toHaveProperty('cpf', '1111.1111');
  });

  it('should have methods to get name and ind for individual customers', () => {
    const sut = createIndividualCustomer('Allan', 'Mendes', '1111.1111');
    expect(sut.getName()).toBe('Allan Mendes');
    expect(sut.getIDN()).toBe('1111.1111');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name and cnpj', () => {
    const sut = createEnterpriseCustomer('Allan', '1111.1111');
    expect(sut).toHaveProperty('name', 'Allan');
    expect(sut).toHaveProperty('cnpj', '1111.1111');
  });

  it('should have methods to get name and ind for enterprise customers', () => {
    const sut = createEnterpriseCustomer('Allan Mendes', '1111.1111');
    expect(sut.getName()).toBe('Allan Mendes');
    expect(sut.getIDN()).toBe('1111.1111');
  });
});
