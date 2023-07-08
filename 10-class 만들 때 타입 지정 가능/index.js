// class Person {
//   name: string; //  필드값
//   constructor(b: string) {
//     this.name = b;
//   }
//   // prototype 함수는 여기에 만듬
//   함수(b: string) {
//     console.log('안녕' + b);
//   }
// }
// let person1 = new Person('lee');
// let person2 = new Person('park');
// console.log(person1); // Person {name: 'lee'}
// console.log(person2); // Person {name: 'park'}
// person1.함수('hi'); // 안녕hi
// // Q. 타입지정은 어떻게하게요
// // name 속성에는 string만 들어올 수 있게 타입지정 해보십시오.
// class User {
//   name;
//   age;
//   constructor(a: string) {
//     this.name = a;
//     this.age = 20;
//   }
// }
// /*
// Q. 필드값이랑 constructor랑 똑같은 역할이네요? 왜 구분해놓음?
// 들켰군요 똑같은 기능을 합니다.
// 근데 new Person() 사용할 때 파라미터로 뭔가 집어넣고 싶으면 constructor로 만들어야합니다.
// */
// /*
// (숙제1) Car 클래스를 만들고 싶습니다.
// 1. 대충 { model : '소나타', price : 3000 } 이렇게 생긴 object를 복사해주는 class를 만들어보십시오.
// 2. 그리고 복사된 object 자료들은
// tax() 라는 함수를 사용가능한데 현재 object에 저장된 price의 10분의1을 출력해주어야합니다.
// 3. model과 price 속성의 타입지정도 알아서 잘 해보십시오.
// tax() 함수의 return 타입도요.
//  */
// class Car {
//   model: string;
//   price: number;
//   constructor(m: string, p: number) {
//     this.model = m;
//     this.price = p;
//   }
//   tax(): number {
//     return 0.1 * this.price;
//   }
// }
// let car1 = new Car('소나타', 3000);
// console.log(car1); // { model : '소나타', price : 3000 }
// console.log(car1.tax()); // 300
// /*
// (숙제2) class인데 파라미터가 잔뜩 들어가는 class Word를 만들어봅시다.
// 1. object 만들 때 new Word() 소괄호 안에 숫자 혹은 문자를 입력하면
// 2. 숫자는 전부 object 안의  num 속성 안에 array 형태로 저장되고
// 3. 문자는 전부 object 안의 str 속성 안에 array 형태로 저장되는 class를 만들어봅시다.
// 4. class 만들 때 넣을 수 있는 숫자와 문자 갯수는 일단 제한은 없습니다.
// 그리고 타입 빼먹지 마셈
//  */
// class Word {
//   num: number[];
//   str: string[];
//   constructor(...param: (string | number)[]) {
//     let numArr: number[] = [];
//     let strArr: string[] = [];
//     param.forEach((item) => {
//       if (typeof item === 'number') {
//         numArr.push(item);
//       } else {
//         strArr.push(item);
//       }
//     });
//     this.num = numArr;
//     this.str = strArr;
//   }
// }
// let obj = new Word('kim', 3, 5, 'park');
// console.log(obj.num); // [3,5]
// console.log(obj.str); // ['kim', 'park']
