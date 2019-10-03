module.exports = function multiply(first, second) {
  //специальный метод в JS
  // return String (BigInt(first) * BigInt(second));


//  Переход в экспоненциальный (научнй) вид, случается при более чем 21 цифрах, поэтому с 4-го теста простое умножение не прокатит.

//  Разбиваем строку на массив по цифре и переворачиваем массив, или переворачиваем строку.
//  const firstArr = first.split('').reverse();
//  const secondArr = second.split('').reverse();

  let firstReverse = "",
    secondReverse = "",
    valueArr = [];

  for (let i = first.length - 1; i >= 0; i--) {
    firstReverse += first[i];
  }

  for (let i = second.length - 1; i >= 0; i--) {
    secondReverse += second[i];
  }

  for (let i = 0; i < firstReverse.length; i++) {
    for (let j = 0; j < secondReverse.length; j++) {
      let multiplication = firstReverse[i] * secondReverse[j];

      // если в valueArr есть запись - плюсуем, если нет, то перезаписываем
      if (valueArr[i + j]) {
        valueArr[i + j] += multiplication;
      } else {
        valueArr[i + j] = multiplication;
      }
      //Общая длина стека составит firstReverse.length + secondReverse.length
    }
  }

  for (var i = 0; i < valueArr.length; i++) {

    //если число больше 10, тогда заходим в if, если меньше - выход из интерации
    if (valueArr[i] >= 10) {
	     if (!valueArr[i + 1]) {
	       valueArr[i + 1] = 0;
	     }
	     valueArr[i + 1] += Math.floor(valueArr[i] / 10); //остаток
	     valueArr[i] %= 10; // получаем целую цифру
     }
     
	 }

  let value = valueArr.reverse().join('');
  return value;
}
