// ? Task:Напишите функцию anagram, которая проверяет, являются ли две строки анаграммами, причем регистр букв не имеет значения. Учитываются лишь символы; пробелы или знаки препинания в расчет не берутся.

// Solution 1
const anagram = (strA, strB) => {
  // Обработка строк исключаем не нужные символы
  const newStrA = strA.toLowerCase().replace(/[^a-z]/g, '');
  console.log(newStrA);
  const newStrB = strB.toLowerCase().replace(/[^a-z]/g, '');
  console.log(newStrB);
// Создание объекта свойство - символ в строке, значение - количество символов в строке
  const buildCharObject = (str) => {
    const charObj = {};
    for (let char of str) {
      charObj[char] = charObj[char] + 1 || 1;
    }
    console.log(charObj);

    return charObj;
  };

  const aCharObject = buildCharObject(newStrA);
  const bCharObject = buildCharObject(newStrB);

// Проверка длины обработанных строк для более быстрого определения несоответствия.Через преобразование в массивы и определение длин каждого.
  if (Object.keys(aCharObject).length !== Object.keys(bCharObject).length) {
    return `Увы!!! Данные строки: ${strA} и ${strB} -- НЕ являются анаграммами`;
  }
// Проход по свойствам созданных объектов с количеством каждого символа в строках, сравнение и обределение совпадает или нет
  for (let char in aCharObject) {
    if (aCharObject[char] !== bCharObject[char]) {
      return false;
    }
  }

  return `Поздравляю!!! Данные строки: ${strA} и ${strB} -- являются анаграммами`;
};

console.log(anagram('fi_n!d__er', 'Fr!!i_e!n_d')); //true
console.log(anagram('hello', 'bye')); //false 



// ! Explanation:
// Для хранения данных анаграммы стоит выбрать такую структуру, как объектный литерал JavaScript. Ключ в этом случае — символ буквы, значение — количество ее повторений в текущей строке.

// Есть и другие условия:

// Нужно убедиться в том, что регистр букв при сравнении не учитывается. Просто преобразуем обе строки в нижний или верхний регистр.
// Исключаем из сравнения все не-символы. Лучше всего работать с регулярными выражениями.
// Обратите внимание на использование Object.keys() в ответе. Этот метод возвращает массив, содержащий имена или ключи в таком же порядке, в каком они встречаются в объекте. В этом случае массив будет таким:

// [‘f’, ‘i’, ’n’, ‘d’, ‘e’, ‘r’]

// Таким образом, мы получаем свойства объекта без необходимости выполнять объемный цикл. В задаче можно использовать этот способ со свойством .length — для проверки того, есть ли в обеих строках одинаковое количество символов — это важная особенность анаграмм.