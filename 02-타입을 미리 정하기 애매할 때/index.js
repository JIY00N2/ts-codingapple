// // Union Type -> 타입 2개 이상 합친 새로운 타입 만들기
// let 회원: number | string | boolean = 123;
// 회원 = 'kim';
// // 숫자 or 문자가 가능한 array 타입지정은?
// let 회원들: (number | string | boolean)[] = [1, 'lee', false];
// let 오브젝트: { a: string | number } = { a: 123 };
// // any 타입 -> 모든 자료형 허용해줌(쓰지말자)
// let 이름: any;
// 이름 = false;
// // unknown 타입 -> 모든 자료형 허용해줌, any보다 안정성이 높음
// let 이름2: unknown;
// 이름2 = 1234;
// 이름2 = {};
// // Q1. 이 코드는 왜 에러가 나는 것이죠?
// // let 나이: string | number;
// // 나이 + 1;
// // // Q2. 이 코드도 왜 에러가 나는 것이죠?
// // let 나이: unknown = 1;
// // 나이 + 1;
// /* 답
// 타입스크립트는 언제나 확실한걸 좋아한다고 했습니다.
// 지금 변경하려는 변수의 타입이 확실해야 연산을 수행해줍니다.
// 그래서 -1은 확실하게 왼쪽에 있는게 number 타입일 때만 가능합니다.
// unknown은 number타입이 아닙니다.
// string|number 이것도 number 타입이 아닙니다.
// +1도 마찬가지입니다.
// */
// // (숙제1) 다음 변수 4개에 타입을 지정해봅시다.
// let user: string = 'kim';
// let age: undefined | number = undefined;
// let married: boolean = false;
// let 철수: (string | undefined | number | boolean)[] = [user, age, married];
// // (숙제2) 학교라는 변수에 타입지정해보십시오.
// type School = {
//   score: (number | boolean)[];
//   teacher: string;
//   friend: string | string[];
// };
// let 학교: School = {
//   score: [100, 97, 84],
//   teacher: 'Phil',
//   friend: 'John',
// };
// 학교.score[4] = false;
// 학교.friend = ['Lee', 학교.teacher];
