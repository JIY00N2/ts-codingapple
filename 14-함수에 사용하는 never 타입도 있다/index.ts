// // function return 값에 붙일 수 있는 never type
// // 조건1. return 값이 없어야함
// // 조건2. 함수 실행이 끝나지 않아야함(endpoint가 없어야함)

// // throw new Error
// function 함수(): never {
//   throw new Error(); // 코드가 중단됨
// }

// // while(true)
// function 함수2(): never {
//   while (true) {}
// }

// // 실제 코딩생활에서의 never 타입 쓰는 법 -> 대부분 안 씀

// // never타입이 등장하는 경우1
// function 함수3(parameter: string) {
//   if (typeof parameter == 'string') {
//     console.log(parameter);
//   } else {
//     console.log(parameter); // parameter == never
//   }
// }

// // never타입이 등장하는 경우2
// // 함수4 == never
// let 함수4 = function () {
//   throw new Error();
// };
