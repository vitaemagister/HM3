//Конкатенація = приклеїли до рядка 3 та 3
console.log('number' + 3 + 3)

//Нічого + 3 = 3
console.log(null + 3)

//оператор && повертає значення другого операнда, якщо обидва операнди є істинними
console.log(5 && "qwerty")

//Джаваскріпт привів до числа потім суму зробив 40 + 2 + приклеїли рядок
console.log(+'40' + +'2' + "hillel")

// тут спочатку іде '10' (конвертуєтьсяі в число) - 5 = 5. А далі 5 не дорівнює 6
console.log('10' - 5 === 6)

// 0 + 1
console.log(true + false)

//4px не можна привести до числа тому що це рядок тому NaN (не число)
console.log('4px' - 3)

//4 привелось до числа
console.log('4' - 3)

//3 в 0 ступені це 1 до 6 приклеїли 1
console.log('6' + 3 ** 0)

//6 привелось до числа 
console.log(12 / '6')

//Тут 10 приклеїлось до false 
console.log('10' + (5 === 6))

//Нічого не дорівнює пустому значенню
console.log(null == '')

//Спочатку ділення на 3 потім 3 в кубі  
console.log(3 ** (9 / 3))

//Я поліз у chatgpt чому так, але не дуже все одно розумію, ми порівнюємо два значення, і воно нам видає true, тому що там просто є значення?
console.log(!!'false' == !!'true')

//=1 перший істиннє значення
console.log(0 || '0' && 1)

//Преоразували null до 0 який дорівнює 0 а це true тобто 1 а це не меньше 1 тому false
console.log((+null == false) < 1)

//Перша частина це false друга true тому в результаті true (теж розбирав з chatgpt тому що складно :( )
console.log(false && true || true)

//Перша частина у дужках = true але далі false && true це false
console.log(false && (false || true))

//1 < 1  1 не більше 1 тому false (пишаюсь що без chatgpt)
console.log((+null == false) < 1 ** 5)

/* Відповіді
number33
3
qwerty
42hillel
false
1
NaN
1
61
2
10false
false
27
true
1
false
true
false
false
*/