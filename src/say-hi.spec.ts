import { sayHi } from './say-hi';

describe(`UT:${sayHi.name}`, () => {
  it('Should salute to all world!', () => {
    let res: string = null;

    expect(() => (res = sayHi())).not.toThrow();
    expect(res).not.toBeNull();
    expect(res).toBe('Hello World!');
  });

  it('Should salute to specific person', () => {
    const name = 'Foo-Bar';
    let res: string = null;

    expect(() => (res = sayHi(name))).not.toThrow();
    expect(res).not.toBeNull();
    expect(res).toBe(`Hi ${name}!`);
  });
});
