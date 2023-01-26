
// Клас, який використовується для формування масиву даних з номерами сторінок та стрілок для відображення

export class PaginationService {
  #currentPage = 0;
  #totalPage = 0;
  #isMobile = false;

  // Кількість зафіксованих сторінок зліва та справа. При необхідності, можна змінювати
  static countFixedPaged = 2;

  constructor(currentPage, totalPage, isMobile) {
    this.#currentPage = currentPage;
    this.#totalPage = totalPage;
    this.#isMobile = isMobile;
  }

  // Отримати результуючий масив пагінації
  get() {
    // Загальна кількість сторінок
    let totalPage = this.#totalPage;
    // Поточна сторінка
    let currentPage = this.#currentPage;
    // Признак роботи через мобільний
    let isMobile = this.#isMobile;
    // Загальна базова кількість сторінок зліва (або справа).
    //   - для мобільного пристрою - 2
    //   - для повної версії - 4
    let maxPageLeftOrRight =
      PaginationService.countFixedPaged + (isMobile ? 0 : 2); // 2 символа виділяються на "..." та "останню сторінку"
    // Стартова сторінка
    const startPage = 1;

    let arrayRight;
    let arrayLeft;

    // Якщо поточна сторінка ближче до кінця, тоді спочатку формуємо масив "від поточної до кінця" і визначає кількість вільних місць
    if (totalPage - currentPage <= currentPage - startPage) {
      // Отримати масив зправа від поточної сторінки
      arrayRight = PaginationService.getArrayRight(
        currentPage,
        totalPage,
        0,
        isMobile
      );
      // Кількість вільних місць
      let countAdditionalFreePlace = Math.max(
        0,
        maxPageLeftOrRight - arrayRight.length
      );
      // Отримати масив зліва з врахуванням вільних місць зправа
      arrayLeft = PaginationService.getArrayLeft(
        currentPage,
        countAdditionalFreePlace,
        isMobile
      );
    } else {
      // Отримати масив зліва від поточної сторінки
      arrayLeft = PaginationService.getArrayLeft(currentPage, 0, isMobile);
      // Кількість вільних місць
      let countAdditionalFreePlace = Math.max(
        0,
        maxPageLeftOrRight - arrayLeft.length
      );
      // Отримати масив справа з врахуванням вільних місць зліва
      arrayRight = PaginationService.getArrayRight(
        currentPage,
        totalPage,
        countAdditionalFreePlace,
        isMobile
      );
    }
    return [
      ...(currentPage == 1 ? [] : ['<=']), // Якщо поточка сторінка не перша, додати стрілку
      ...arrayLeft, // Додати масив зліва
      currentPage, // Додати поточну сторінку
      ...arrayRight, // Додати масив зправа
      ...(currentPage == totalPage ? [] : ['=>']), // Якщо поточка сторінка не остання, додати стрілку
    ];
  }

  // Отримати масив зправа
  static getArrayRight(
    currentPage,
    totalPage,
    countAdditionalFreePlace,
    isMobile
  ) {
    let pages = [];
    let index;

    // 1. ДОДАТИ ЗАФІКСОВАНІ СТОРІНКИ + ЗАПОВНИТИ ВІЛЬНІ МІСЦЯ, ЯКЩО ВОНИ Є
    for (
      index = currentPage + 1; // Перебор починаємо з наступної від поточної сторінки
      index <=
      currentPage +
        PaginationService.countFixedPaged +
        countAdditionalFreePlace; // Закінчуємо: від поточної + кількість зафіксованих (2) + кількість вільних
      index++
    ) {
      // Якщо поточний індекс > ніж загальна кількість сторінок, тоді повертаємо пустий масив. Для випадку, коли поточка сторінка - остання
      if (index > totalPage) {
        return [];
      }
      // Додаємо поточну сторінку
      pages.push(index);

      // Якщо дійшли до останньої сторінки, повертаємо заповнений масив
      if (index == totalPage) {
        return pages;
      }
    }

    // 2. ЯКЩО ЦЕ НЕ МОБІЛЬНА ВЕРСІЯ, ДОДАТИ ЩЕ "..." та останню сторінку
    if (!isMobile) {
      // Якщо після циклу ми вийшли на передостанню сторінку, тоді "..." не потірібні, додати передостанню та останню сторінку
      if (index == totalPage - 1) {
        pages.push(index);
        pages.push(index + 1);
        // Якщо після циклу ми вийшли на останню сторінку, додати тільки її
      } else if (index == totalPage) {
        pages.push(index);
        // Інакше додаємо ... та останню сторінку
      } else {
        pages.push('...');
        pages.push(totalPage);
      }
    }
    return pages;
  }

  // Отримати масив зліва
  static getArrayLeft(currentPage, countAdditionalFreePlace, isMobile) {
    let pages = [];
    let index;
    const startPage = 1;
    for (
      index = currentPage - 1; // Перебор починаємо з попередньої сторінки і назад
      index >=
      currentPage -
        PaginationService.countFixedPaged -
        countAdditionalFreePlace; // Закінчуємо: від поточної - кількість зафіксованих (2) - кількість вільних
      index--
    ) {
      // Якщо індекс <1, повертаємо пустий масив. Для випадку, коли поточка сторінка перша
      if (index < 1) {
        return [];
      }
      // Додаємо сторінку в масив
      pages.push(index);
      // Якщо дійшли до 1-ю сторінку, далі додавати нічного не потібно, повертаємо пустий масив, робимо реверс
      if (index == 1) {
        return pages.reverse();
      }
    }
    if (!isMobile) {
      // Якщо після перебору по циклу поточна сторінка = 2, тоді додаємо ще 2 сторінки. 2-гу та 1-шу
      if (index == 2) {
        pages.push(index);
        pages.push(index - 1);
        // Якщо після перебору по циклу поточна сторінка = 1, тоді додаємо тільки 1-шу сторінку
      } else if (index == 1) {
        pages.push(index);
        // Інакше додаємо ... та 1 сторінку
      } else {
        pages.push('...');
        pages.push(1);
      }
    }

    return pages.reverse();
  }
}


