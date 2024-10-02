import {
  Discount,
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
} from './discount';

const creatSut = (clasName: new () => Discount): Discount => {
  return new clasName();
};

describe('Discount', () => {
  afterEach(() => jest.clearAllMocks()); //Depois de cada teste limpa os mocks

  it('should have no discount', () => {
    const sut = creatSut(NoDiscount);
    expect(sut.calculate(10.99)).toBe(10.99);
  });

  it('should apply 50% discount on price', () => {
    const sut = creatSut(FiftyPercentDiscount);
    expect(sut.calculate(100)).toBe(50);
  });

  it('should apply 10% discount on price', () => {
    const sut = creatSut(TenPercentDiscount);
    expect(sut.calculate(100)).toBe(90);
  });
});
