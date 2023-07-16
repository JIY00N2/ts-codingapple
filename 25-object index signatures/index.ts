// // index signature 쓰면 object 타입지정 한번에 가능
// // 모든 문자속성은 string을 가진다
// interface StringOnly {
//   [key: string]: string;
// }

// let user: StringOnly = {
//   name: 'kim',
//   age: '20',
//   location: 'seoul',
// };

// // recursive 하게 타입 만드는 법
// interface MyType {
//   'font-size': MyType;
// }

// // (숙제1) 다음 자료의 타입을 지정해보십시오.
// let obj: StringOrNumber = {
//   model: 'k5',
//   brand: 'kia',
//   price: 6000,
//   year: 2030,
//   date: '6월',
//   percent: '5%',
//   dealer: '김차장',
// };

// type StringOrNumber = {
//   [key: string]: string | number;
// };

// // (숙제2) 다음 object 자료의 타입을 interface 써서 만들어보십시오.
// let obj2 = {
//   'font-size': 10,
//   secondary: {
//     'font-size': 12,
//     third: {
//       'font-size': 14,
//     },
//   },
// };

// interface Obj2Type {
//   'font-size': number;
//   [key: string]: number | Obj2Type;
// }
