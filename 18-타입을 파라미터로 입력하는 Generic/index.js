// // 함수에 타입도 파라미터로 입력가능
// function 함수(x: unknown[]) {
//   return x[0];
// }
// let a = 함수([4, 2]);
// // console.log(a + 1); // unknown이라 오류 발생
// // 해결책 1. narrowing 잘하면 해결되지만 귀찮다.
// // 해결책 2. Generic(파라미터로 타입을 입력하는) 함수 만들기
// function 함수2<MyType>(x: MyType[]): MyType {
//   return x[0];
// }
// // Generic 함수의 장점 -> 확장성이 조금 있음, 매번 다른 타입 출력 가능
// let num = 함수2<number>([4, 2]);
// let str = 함수2<string>(['1', '2', '3']);
// // 타입파라미터 제한두기
// // MyType을 number로 제한두기
// function 함수3<MyType extends number>(x: MyType) {
//   return x - 1;
// }
// let b = 함수3<number>(100);
// // 커스텀 타입으로도 타입파라미터 제한가능
// interface LengthCheck {
//   length: number;
// }
// function 함수4<MyType extends LengthCheck>(x: MyType) {
//   return x.length;
// }
// let aaa = 함수4<string[]>(['100']);
// // class에도 타입파라미터 넣을 수 있음
// // (숙제1) 문자를 집어넣으면 문자의 갯수, array를 집어넣으면 array안의 자료 갯수를 콘솔창에 출력해주는 함수는 어떻게 만들까요?
// /*연습삼아 Generic 이런걸로 만들어봅시다. 굳이 Generic 이런게 필요는 없겠지만요
// (동작 예시)
// 함수<string>('hello') 이렇게 사용하면 콘솔창에 5가 나와야합니다.
// 함수<string[]>( ['kim', 'park'] ) 이렇게 사용하면 콘솔창에 2가 나와야합니다. */
// function myFnc<T extends string | string[]>(x: T) {
//   console.log(x.length);
// }
// myFnc<string>('hello');
// myFnc<string[]>(['hi', 'bye']);
// // (숙제2) Animal 이라는 타입이 있습니다.
// /*그리고 data라는 변수도 있습니다.
// object처럼 생겼지만 따옴표 쳐진 JSON 자료입니다.
// data라는 JSON 자료를 object { } 자료로 변환을 해서 return 해주는 함수를 만들어보십시오.
// 근데 변환된 object의 타입은 Animal이 되었으면 좋겠는데 어떻게 코드를 짜면 될까요?
// 오늘 배운 Generic을 이용해서 구현해보도록 합시다.*/
// interface Animal {
//   name: string;
//   age: number;
// }
// let data = '{"name" : "dog", "age" : 1 }';
// function myFnc2<T>(data: string): T {
//   return JSON.parse(data);
// }
// let answer2 = myFnc2<Animal>(data);
// console.log(answer2);
// // (숙제3) class 를 수정해봅시다.
// class Person<T> {
//   name;
//   constructor(a: T) {
//     this.name = a;
//   }
// }
// let c = new Person<string>('어쩌구');
// c.name; //any 타입이 되었넹 -> string으로 변신
