// 1) Дан массив с элементами [1, 2, 3, 4, 5].
// С помощью цикла for найдите сумму элементов этого массива.
// Запишите ее в переменную result.

// let result = 0
//
// const myFunction = (arg) => {
//     for (let i = 0 ; i < arg.length ; i++) {
//         result  += arg[i]
//     }
//     return result
// }
//
// console.log(myFunction([1, 2, 3, 4, 5]))




// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] => сумму всех элементов массива

// const myFunction = (arg) => {
//     return arg.reduce((acc ,el ,idx) => {
//        return acc += arg[idx]
//     } ,0)
// }
//
// console.log(myFunction([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))


// 3) Дан массив с элементами [1, 2, 5, 9, 4, 13, 4, 10].
// С помощью цикла for и оператора if проверьте есть ли в массиве элемент со значением,
// равным 4. Если есть - выведите на экран 'Есть!' и выйдите из цикла. Если нет - 'Нет!'

const myFunction = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(4)) {
            return 'Есть!'
        } else {
            return 'Нет!'
        }
    }
}
console.log(myFunction([1, 2, 5, 9, 13, 10]))
console.log(myFunction([1, 2, 5,4, 9, 13, 10]))