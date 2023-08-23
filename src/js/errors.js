const errors = new Map([
  [200, 'Хорошо'],
  [400, 'Некорректный запрос'],
  [404, 'Не найдено'],
]);
export default class ErrorRepository {
  constructor() {
    this.errors = errors;
  }

  translate(code) {
    if (this.errors.has(code)) {
      return errors.get(code);
    }
    return 'Unknown error';
  }
}
