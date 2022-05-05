// 1. Написать скрипт, который сосчитает и выведет результат от возведения 2 в степень 10

let i = 1;
let result = 1;
while (i < 11) {
    result = result *2;
    i++;
}
console.log(result)

// 1^ Пробразовать 1 задачу в функцию, принимающую на вход степень, в которую будет возводиться число 2

const solo = function(num) {
    return 2**num;
}
console.log(solo(10))

// 2. Написать скрипт, который выведет 5 строк в консоль таким образом, 
// чтобы в первой строчке выводилось :),во второй :):) и так далее.
// Пример в консоли:
// :)
// :):)
// :):):)
// :):):):)
// :):):):):)

let word = ":)";
let result2 = "";
for (let i=1; i<=5; i++) {
    result2+=word;
    console.log(result2)
}

// 2^. Преобразовать 2 задачу в функцию, принимающую на вход строку, 
// которая и будет выводиться в консоль (как в условии смайлик), 
// а также количество строк для вывода 
// e.g. function printSmile(stroka, numberOfRows)

function printSmile(stroka, numberOfRows) {
    let result = " ";
    for (let i = 1; i<=numberOfRows; i++) {
        result+=stroka;
        console.log(result)
    }
}
printSmile(";)",5)

// 3^.  Написать функцию, которая принимает на вход слово. Задача функции посчитать и вывести в консоль, 
// сколько в слове гласных и сколько согласных букв.
// e.g. function getWordStructure(word)
// В консоли: 
// Слово (word) состоит из  (число) гласных и (число) согласных букв

// Проверки: 'case', 'Case', 'Check-list'

function getWordStructure(word) {
    const vowels = "aeiouy".split("");
    const consonants = "bcdgghjklmnpqrstvwxz".split("");
    let numberOfVowels = 0;
    let numberOfConsonants = 0;
    for (char of word.toLowerCase()) {
        if (vowels.includes(char)) numberOfVowels++;
        if (consonants.includes(char)) numberOfConsonants++;
    }
    console.log("Слово ${word} сoстоит из ${numberOfVowels} гласных и ${numberOfConconants} согласных букв")
}
getWordStructure("case")
getWordStructure("Case")
getWordStructure("Check-list")


// 4^. Написать функцию, которая проверяет, является ли слово палиндромом
// e.g. function isPalindrom(word)

// Проверки: 'abba', 'Abba'

function isPalindrome(word) {
    return word.toLowerCase() == word.toLowerCase().split("").reverse().join("");
}
console.log(`${isPalindrome("Abba") ? "It is a palindrome" : "It is not a palindrome"}`)

isPalindrome("Ab1ba")
isPalindrome("Ab12ba")
