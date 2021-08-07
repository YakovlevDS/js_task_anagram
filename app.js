// ? Task:Реализуйте функцию propertiesToSnakeCase, которая преобразует ключи обьекта из CamelCase в snake_case

// Solution 1
const objectSnakeCase = {
  firstName: "Ivan",
  lastName: "Ivanov",
  dateOfBirth: new Date(),
};

const propertiesToSnakeCaseFirst = (obj) =>
  Object.entries(obj).reduce(
    (acc, [key, value]) => ({
      ...acc,
      [key.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)]: value,
    }),
    {}
  );

const propertiesToSnakeCaseSecond = (obj) => {
  const pairs = Object.entries(obj);

  const mapPair = ([key, value]) => {//Destructuring
  const mappedKey = key.replace(
      /[A-Z]/g,
      (letter) => `_${letter.toLowerCase()}`
    );//replacement letter
    return { [mappedKey]: value };//Forming a converted property - values
  };

  return pairs.reduce(
    (accObj, pair) => ({ ...accObj, ...mapPair(pair) }), //Forming a new obj
    {}
  );
};

console.log(propertiesToSnakeCaseFirst(objectSnakeCase));
console.log(propertiesToSnakeCaseSecond(objectSnakeCase));




// ! Explanation:
// Метод reduce() применяет функцию reducer к каждому элементу массива (слева-направо), возвращая одно результирующее значение.

// Object.entries(obj) преобразуем объект в массив массивов.вида [[key,value],[key1,value1]...]
// replace(/[A-Z]/g замена всех больших латинских букв
//Array.reduce() -метод для накопительного создания нового объекта из пустого {}
// (letter) => `_${letter.toLowerCase()}`) колбек функция с переданной по очереди БОЛЬШОЙ литерой всех свойств, и  возвращающей "_" с преобразование в нижний регистр литеры letter.toLowerCase().
// [key.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`)]: value, - Это возвращаемое в новый объек ключ-значение. Ключ- преобразуется значение -без изменений.

// pairs.reduce((accObj, pair) => ({ ...accObj, ...mapPair(pair) }),{});--тут на входе в колбек буд пустой объект и каждый элемент (пара ключ-значение) от pairs и пропускаем через функцию преобразования пары mapPair. Добавляем накопительно спредом(...) в новый объект accObj.


// Регулярные выражения могут иметь флаги, которые влияют на поиск.

// В JavaScript их всего шесть:

// i
// С этим флагом поиск не зависит от регистра: нет разницы между A и a (см. пример ниже).
// g
// С этим флагом поиск ищет все совпадения, без него – только первое.
// m
// Многострочный режим (рассматривается в главе Многострочный режим якорей ^ $, флаг "m").
// s
// Включает режим «dotall», при котором точка . может соответствовать символу перевода строки \n (рассматривается в главе Символьные классы).
// u
// Включает полную поддержку юникода. Флаг разрешает корректную обработку суррогатных пар (подробнее об этом в главе Юникод: флаг "u" и класс \p{...}).
// y
// Режим поиска на конкретной позиции в тексте (описан в главе Поиск на заданной позиции, флаг "y")

// Регулярное выражение состоит из шаблона и необязательных флагов: g, i, m, u, s, y.
// Без флагов и специальных символов, которые мы изучим позже, поиск по регулярному выражению аналогичен поиску подстроки.
// Метод str.match(regexp) ищет совпадения: все, если есть флаг g, иначе только первое.
// Метод str.replace(regexp, replacement) заменяет совпадения с regexp на replacement: все, если у регулярного выражения есть флаг g, иначе только первое.
// Метод regexp.test(str) возвращает true, если есть хоть одно совпадение, иначе false.