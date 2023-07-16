// // implements 키워드
// class Car {
//   model: string;
//   price: number = 1000;
//   constructor(a: string) {
//     this.model = a;
//   }
// }
// let car = new Car('morning');

// // class가 model, price 속성을 가지고 있는지 타입으로 확인하고 싶을 때 -> interface + implements
// interface CarType {
//   model: string;
//   price: number;
// }

// class Car2 implements CarType {
//   model: string;
//   price: number = 1000;
//   constructor(a: string) {
//     this.model = a;
//   }
// }
// let car2 = new Car('morning');

// // implements는 타입지정문법이 아님 -> interface에 들어있는 속성을 가지고 있는지 확인만하라는 뜻
// interface CarType {
//   model: string;
//   tax: (price: number) => number;
// }

// class Car3 implements CarType {
//   model; ///any 타입됨
//   tax(a) {
//     ///a 파라미터는 any 타입됨
//     return a * 0.1;
//   }
// }
