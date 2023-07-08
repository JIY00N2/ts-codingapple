// // 1. node 설치
// // 2. npm install -g typescript
// // 3. tscofig.json 파일생성
// // 4. terminal -> tsc -w
// // 변수 선언(string, number, boolean, null, undefined, bigint, [], {}...)
// let 이름: string = 'lee';
// // array 타입 지정
// let 이름1: string[] = ['kim', 'lee'];
// // object 타입 지정(?옵션은 속성이 들어올수도있고 안들어올수도있음)
// let 이름2: { name: string; num: number } = { name: 'lee', num: 1 };
// let 이름21: { name?: string; num: number } = { name: 'lee', num: 1 };
// // | or 기능
// let 이름3: string | number = 123;
// // Type alias 타입은 변수에 담아 쓸 수 있음(대문자로)
// type Name = string | number;
// let 이름4: Name = 'jiyoon';
// // 함수에 타입 지정 -> 매개변수도 number, return 값도 number
// function double(x: number): number {
//   return x * 2;
// }
// // array에 쓸 수 있는 tuple 타입 -> 첫번째는 number, 두번쨰는 boolean
// type Member = [number, boolean];
// let yoon: Member = [123, true];
// // object에 타입지정해야할 속성이 너무 많으면
// type Member1 = {
//   name: string;
// };
// let min: Member1 = { name: 'kim' };
// // [모든 object속성] 글자로 된 모든 object 속성의 타입은: string
// type Member2 = {
//   [key: string]: string;
// };
// let ho: Member2 = { name: 'kim', age: '1234' };
// // class 타입 지정 가능
// class User {
//   name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
