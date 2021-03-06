/*1)
  Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
  Возвращает true, если все аргументы, кроме первого входят в первый.
  Первым всегда должен быть массив.
*/

function isInArray(arr: any[], ...args: any[]): boolean {
   return args.every((el: any) => arr.includes(el));
 }

/*2)
 Написать функцию summator(), которая сумирует переданые ей аргументы.
 Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено.
*/

function summator(...args: string[]): number;
function summator(...args: number[]): number;
function summator(...args: (string | number)[]): number {
    return args.reduce((sum: number, arg: (string | number)) => {
        if (typeof arg === 'string') {
            arg = parseInt(arg, 10);
        }
        return sum += arg;
    }, 0);
}

/*3)
  Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
  и возвращает массив уникальных элементов. Аргумент не должен изменяться.
  Порядок элементов результирующего массива должен совпадать с порядком,
  в котором они встречаются в оригинальной структуре.
*/

function getUnique(...arr: any[]): any[] {
    let result: any[] = [];
    arr.forEach((el) => {
        if (result.indexOf(el) !== -1) {
           return;
        }
        result.push(el);
    });
    return result;
}

/*4)
 Написать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
 возвращает новый массив. Число показывает количество элементов в подмассивах,
 элементы подмассивов берутся из массива data. Оригинальный массив не должен быть изменен.
 */

 //Не понятно условие этой задачи. Например, что должна вывести функция в случае data = [1, 2, 3, 4, 5, 6, 7]
 //и data = 3. Что делать с элементами из data, не вошедшими в подмассивы?
