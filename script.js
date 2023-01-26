const items =[
    {name: "Chocolate",category: "Sweets", stock:20, total:50},
    {name: "Apple",category: "Fruits", stock:0, total:5},
    {name: "Pineapple",category: "Fruits", stock:5, total:10},
    {name: "Lamp",category: "Electronic", stock:10, total:30},
    {name: "Orange",category: "Fruits", stock:0, total:20}
]

let result = (map, value)=>{
    if (map[value]==null){
        map[value]=1;
    }else{
        ++map[value];
    }
    return map;
}
console.log(items.map(char=>char.category).reduce(result, {}))
//------------------------------------------------------
let fruits = items.map(i => i.category === "Fruits")
let countFruits = fruits.length
//----------------------------------------------------
let result = items.map(i=>i.total).reduce((sum,val)=>sum+val,0);
console.log(result)
//--------------------------------------------------
const result=(items.filter(items=>items.category === "Fruits")).reduce((count,stock)=>count+stock,0);
//-------------------------------------------------

/* Маленькі задачі по JS 
Дедлайн – субота 21.01 
Формат сдачі – задачі без DOM, можна просто одним файлом .js де  коментарями обмежено рішення задач. 
Дедлайн перевірки – 28.01 
Це домашнє завдання спрямоване на засвоєння простих елементів JS.  При виконанні завдань, звертайте увагу на свої слабкі місця, бо я бачу у фіналі  лише правильно працюючі рішення і не знаю, з чим у вас виникли труднощі в  процесі виконання. 
Задача1 
Ви повинні реалізувати функцію, яка повертає різницю між найбільшим  та найменшим значенням у списку , отриманому як аргумент функції. Масив,  який отримує функція як аргумент, може містити позитивні та негативні числа.  Якщо масив порожній або має значення, поверніть нуль. Спочатку масив буде  поданий у невідсортованому вигляді. 
arr([1, 2, 3, -4]); // вернет 7, потому что: 3 - (-4) == 7 
arr([16]) => 0  */

function arr(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let max = arr[0];
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    return max - min;
}




let array = [1,2,3,4];


console.log(arr(array));
//arr.length ? Math.max(...arr) - Math.min(...arr) : 0
/* Задача2 
Напишіть функцію, яка приймає рядок і число. Поверніть у вигляді  масиву тільки ті слова, довжина яких перевищує число.  */
function getStringAndNumber(string, num){
    let arr = [];
    if( string.length > num){
        arr.push(string)
        return console.log(arr);
    }   
}

getStringAndNumber("color",4)
//----------------------------------
function maxLength(num, str) {
    return str.split(' ').filter(item => item.length > num); 
}
console.log(maxLength(3, 'hello my name is Kapusta'))

/* Задача3 
Напишіть функцію, яка повертає true, якщо перший переданий аргумент  (рядок) закінчується другим аргументом (також рядком). 
Приклад: 
solution('abc', 'bc') => true 
solution('abc', 'd') => false */
const solution = (str, target) => {
    let i = target.length;
    let j = str.length;
   
    while (i >= 0) {
      if (target[i] !== str[j]) return false;
   
      i--;
      j--;
    }
   
    return true;
  }
   
  console.log(solution('abc', 'bc'));   //=> true
  console.log(solution('abc', 'd'));  //=> false

/* Задача4 
Напишіть функцію, яка отримує масив цілих чисел і повертає масив  середніх значень кожного цілого числа та його послідовника, якщо він є. 
Приклад: 
averages([2, -2, 2, -2, 2]), [0, 0, 0, 0] 
averages([1, 3, 5, 1, -10]), [2, 4, 3, -4.5]  */
 const averages = (array) => {
     let middleRange = [];
     for (let i = 0; i<array.length-1; i++) {
        middleRange.push((array[i] + array[i+1]) / 2);
         
     }
     return console.log(middleRange);
    }
averages([1, 3, 5, 1, -10])  
/* Задача5 
Створіть функцію, яка приймає рядок і повертає кількість (кількість)  голосних, які у ній. 
Приклад: 
countVowels("Celebration") ➞ 5 
countVowels("Palm") ➞ 1 
Створіть функцію, яка видаляє літери "a", "b" і "c" з цього рядка і поверне  змінену версію. Якщо цей рядок не містить "a", "b" або "c", повернути null. 
Приклад: 
removeABC("This might be a bit hard") ➞ "This might e it hrd" removeABC("hello world!") ➞ null  */


const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    let count = 0;
    // циклічний рядок для перевірки, якщо кожен символ є голосним
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    // повертає кількість голосних
    return count
}

// приймаємо строку
let result= countVowel('Palm');

console.log(result);
//-------

let regex = /[abc]/gi;
function giveLetter(str){
    if(regex.test(str)){
        return str.replace(regex, '');
    }else{
       return null;
    }
}
console.log(giveLetter('Pabar'))


let regex = /[abc]/gi;
function giveLetter(str){
    if(str.includes('a','b','c')){
        return str.replace(regex, '');
    }else{
       return null;
    }
}
console.log(giveLetter('Pabar'))
/* Задача6 
Напишіть JavaScript для пошуку унікальних елементів з двох масивів. Приклад: 
console.log(difference([1, 2, 3], [100, 2, 1, 10])); 
["1", "2", "3", "10", "100"] */
function difference(arr1,arr2) {
    const a1= flatten(arr1,true);
    const a2= flatten(arr2,true);
    const a=[];
    const diff=[];
    for(var i=0;i< a1.length;i++)
      a[a1[i]]=false;
    for(i=0;i< a2.length;i++)
    if(a[a2[i]]===true) 
       { delete a[a2[i]];}
      else a[a2[i]]=true;
    for(const k in a)
      diff.push(k);
    return diff;
  }
  var flatten = (a, shallow, r) => {
    if(!r){ r = [];}
  if (shallow) {
    return r.concat(...a);
    }  
     for(i=0; i< a.length; i++){
          if(a[i].constructor == Array){
              flatten(a[i],shallow,r);
          }else{
              r.push(a[i]);
          }
      }
      return r;
  };
  console.log(difference([1, 2, 3], [100, 2, 1, 10]));
  

/* Задача7 
Напишіть функцію, щоб отримати копію об'єкта, де ключі стали значеннями, а значення ключами. 
Вхід - {red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}  вихід - {"#FF0000":"red","#00FF00":"green","#FFFFFF":"white"}  */
function invert_key_value(obj) {
    var result = {};
    var keys = _keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  }
function _keys(obj) 
  {
    if (!isObject(obj)) return [];
    if (Object.keys) return Object.keys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    return keys;
  }
function isObject(obj) 
 {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  }
console.log(invert_key_value({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));


/* Задача8 
Івана Іванова обікрали. Але його речі було застраховано на певну суму.  Враховуючи вкрадені речі та обмеження страховки, поверніть різницю між  загальною вартістю цих речей та межею політики. 
Приклад: 
calculateDifference({ "baseball bat": 20 }, 5) ➞ 15 
calculateDifference({ skate: 10, painting: 20 }, 19) ➞ 11 
calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400) ➞ 1 
Обмеження: Об'єкт завжди повинен містити елементи, сума предметів  завжди повинна бути більшою за страховку.  */

function calculateDifference(obj, num) {
    let sum = 0;
    for (let key in obj) {
      sum = sum + obj[key];
    }
  
    return sum - num;
  }
  
  console.log(calculateDifference({ 'baseball bat': 20 }, 5));
  console.log(calculateDifference({ skate: 10, painting: 20 }, 19));
  console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));

/* Задача9 
Напишіть функцію, яка приймає три виміри цегли: висоту (a), ширину  (b) і глибину (c) і повертає істину, якщо ця цегла може поміститися в отвір з  шириною (w) та висотою (h). 
Приклад: 
doesBrickFit(1, 1, 1, 1, 1) ➞ true 
doesBrickFit(1, 2, 1, 1, 1) ➞ true 
doesBrickFit(1, 2, 2, 1, 1) ➞ false 
Обмеження: 
Цеглу можна повернути будь-якою стороною до отвору.
Ми припускаємо, що цегла підходить, якщо її розміри дорівнюють  розмірам отвору (тобто розмір цегли повинен бути меншим або дорівнює  розміру отвору, не строго менше). 
Цегла не можна класти під неортогональним кутом.  */

function doesBrickFit(height, deepness, width, maxHeight, maxWidth) {
    if (height <= maxHeight && width <= maxWidth) {
      return true;
    }
  
    return false;
  }
  
  console.log(doesBrickFit(1, 1, 1, 1, 1)); // true
  console.log(doesBrickFit(1, 2, 1, 1, 1)); // true
  console.log(doesBrickFit(1, 2, 2, 1, 1)); // false

/* Задача10 
Дано рядок, що містить повне ім'я файлу (наприклад,  'c:\WebServers\home\testsite\www\myfile.txt'). Виділіть із цього рядка ім'я  файлу без розширення.  */

function getFileName(path) {
    return path.split('.')[0].split('\\').slice(-1).join('');
  }
  
  console.log(
    getFileName(String.raw`c:\WebServers\home\testsite\www\myfile.txt`)
  )

/* 
Задача11 
Дано два рядки. Чи можна перший рядок отримати з другим циклічним  зрушенням?  */
let kate = "Kate love JS";
let hdhd="Ve js kate love"
            Love JS Kate
            kate.length === hdhd.length
            бульбашкове сортування

let str1 = "kasddste";
let str2= "tefka";

function shiftString(str1, str2) {
    let sum = str1.concat(str2);
    return sum.includes(str1);
  }
  
  console.log(shiftString(str1, str2));
/* Задача12 
З елементів масиву a, що складається з 2n елементів, отримати масиви b  і c наступним чином: вибрати в масиві a два найбільш близькі за значенням  елемента, менший з них помістити в масив b, а більший - масив c. Виключити  з розгляду в масиві a ці елементи і продовжити вибір з елементів, що  залишилися.  */

/* Задача13 
Дано рядок, що складається зі слів, розділених пробілами. Сформувати  новий рядок з такими властивостями: а) усі слова у нижньому регістрі, крім  першої літери першого слова; б) усі посилання у словах замінюються на  "[посилання заборонено]"; в) всі email замінюються на "[контакти  заборонені]"; г) усі слова довжини понад 3 символи, що містять лише цифри,  видаляються.  */


/* Задача14
Перевірити, чи дотримується в заданому тексті баланс круглих дужок,  що відкривають і закривають, тобто можна встановити взаємно однозначну  відповідність відкривають і закривають дужок, причому відкриває дужка  завжди передує відповідної закриває. Якщо баланс дотримується вивести цей  текст на html – сторінку і забороніть користувачу копіювати цей текст та  перегляд коду сторінки.   */
function checkText(text) {
    const result = text.split('');
    let opened = 0;
    let closed = 0;
  
    for (let i = 0; i < result.length; i++) {
      if (result[i] === '(') {
        opened++;
      }
  
      if (result[i] === ')') {
        closed++;
      }
    }
  
    if (opened === closed) {
      return text;
    }
  
    return 'Copying is permitted';
  }
  
  console.log(checkText('Some text (as expected) and (not expected'));

/* Задача15 (на заняттях такого не робили, буде гарно, якщо спробуєте��) 
Згенерувати пароль для користувача. Вимоги: довжина від 6 до 20  символів повинен бути рівно один символ підкреслення, хоча б дві великі  літери, не більше 5 цифр, будь-які дві цифри поспіль неприпустимі.  */

const upperCaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowCaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const underScore = '_';

const minPasswordLength = 6;
const maxPasswordLength = 20;
const numberOfUnderscores = 1;
const minNumberOfBigLetters = 2;
const maxNumberOfDigits = 5;

function getRandomUpperCaseLetter() {
  return upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
}

function getRandomLowCaseLetter() {
  return lowCaseLetters[Math.floor(Math.random() * lowCaseLetters.length)];
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomLength(minPasswordLength, maxPasswordLength) {
  return Math.floor(
    Math.random() * (maxPasswordLength - minPasswordLength) + minPasswordLength
  );
}

function generatePassword(underScore, length) {
  let generatedPassword = '';

  for (let i = 0; i < length; i++) {
    generatedPassword += getRandomUpperCaseLetter();
    generatedPassword += getRandomLowCaseLetter();
    generatedPassword += getRandomNumber();
    generatedPassword += underScore;
  }
  return generatedPassword.slice(0, length);
}

let length = getRandomLength(minPasswordLength, maxPasswordLength);
console.log(generatePassword(underScore, length));

/* Задача16 
В заданому масиві найменший елемент помістити на перше місце,  найменший з тих, що залишилися - на останнє місце, наступний - передостаннє  і так далі - до середини масиву. */
function moveElements(array) {
    let min = 0;
    let max = 0;
  
    const result = [];
    let index = 0;
  
    while (array.length > array.length / 2) {
      min = Math.min(...array);
      result.push(min);
      index = array.indexOf(min);
      array.splice(index, 1);
    }
  
    return result;
  }
  
  console.log(moveElements([61, 60, 88, 27, 92, 22]));

  