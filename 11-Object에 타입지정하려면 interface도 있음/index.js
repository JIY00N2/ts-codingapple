// // Object 타입 지정 법
// // 1. type 키워드로 타입변수 생성가능
// // 2. interface 키워드로도 타입변수 생성가능
// type Square = { color: string; width: number };
// interface Box {
//   texture: string;
//   height: number;
// }
// // interface vs type 뭐가 다를까?
// // -> interface는 중복선언 가능, type은 중복선언 불가능
// // 다른 사람이 이용 많이할 것 같으면 object 타입 정할 때 interface 사용
// // interface 장점: extends로 복사 가능
// // -> extends 쓸 때 중복 속성이 발생하면? 에러로 잡아줌
// // -> & 쓸 때 중복 속성이 발생하면? 에러를 못잡아줌
// interface StudentType {
//   name: string;
// }
// interface StudentType {
//   // 중복선언 허용
//   score?: number;
// }
// interface TeacherType extends StudentType {
//   age: number;
// }
// let student: StudentType = { name: 'kim' };
// let teacher: TeacherType = { name: 'lee', age: 25 };
// // &기호 (intersection type)
// type Animal = { name: string };
// type Cat = { age: number } & Animal;
// let kitten: Cat = { name: 'nabi', age: 25 };
// // interface도 & 사용 가능
// type Human = { age: number; married: boolean } & StudentType;
// /* (숙제1) interface 이용해서 간단하게 타입을 만들어봅시다
// 이런 변수가 있는데 interface 키워드로 타입지정 이쁘게 하고 싶습니다.
// 어떻게 코드를 짜면 될까요?
// 무슨 타입일지는 알아서 기입합시다.*/
// let 상품 = { brand: 'Samsung', serialNumber: 1360, model: ['TV', 'phone'] };
// interface Product {
//   brand: string;
//   serialNumber: number;
//   model: string[];
// }
// /*
// (숙제2) array 안에 object 여러개가 필요합니다.
// 이렇게 생긴 object들이 잔뜩 들어갈 수 있는 array는 어떻게 타입을 지정해야할까요?
// 오늘 배운 interface 문법을 써봅시다.
// */
// interface ShoppingCart {
//   product: string;
//   price: number;
// }
// let 장바구니: ShoppingCart[] = [
//   { product: '청소기', price: 7000 },
//   { product: '삼다수', price: 800 },
// ];
// /*
// (숙제3) 위에서 만든 타입을 extends 해봅시다.
// 갑자기 서비스가 업데이트되어서 일부 상품은 card 속성이 들어가야합니다.
// 위에서 만든 interface를 extends 해서 이 object의 타입을 만들어보십시오.
// { product : '청소기', price : 7000, card : false }
// */
// interface UpdateCart extends ShoppingCart {
//   card: boolean;
// }
// /*
// (숙제4) object 안에 함수를 2개 넣고 싶은데요
// 1. 이 object 자료는 plus() 함수를 내부에 가지고 있으며 plus 함수는 파라미터 2개를 입력하면 더해서 return 해줍니다.
// 2. 이 object 자료는 minus() 함수를 내부에 가지고 있으며 minus 함수는 파라미터 2개를 입력하면 빼서 return 해줍니다.
// 이 object 자료를 어떻게 만들면 될까요?
// interface를 이용해서 object에 타입지정도 해보십시오
// */
// interface Obj {
//   plus: (a: number, b: number) => number;
//   minus: (a: number, b: number) => number;
// }
// let obj: Obj = {
//   plus(a, b) {
//     return a + b;
//   },
//   minus(a, b) {
//     return a - b;
//   },
// };
