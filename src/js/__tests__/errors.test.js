import ErrorRepository from '../errors';

test('Правильное описание кода', () => {
  const errLib = new ErrorRepository();
  expect(errLib.translate(200)).toBe('Хорошо');
});

test('Несуществующий код', () => {
  const errLib = new ErrorRepository();
  expect(errLib.translate(300)).toBe('Unknown error');
});
