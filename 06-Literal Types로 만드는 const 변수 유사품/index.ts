// // 더 엄격한 type 검사
// // 이 변수엔 무조건 'kim'만 들어올 수 있음
// // 자동완성 힌트 굿
// let 이름: 'kim';
// let 저는요: '여자' | '사람';
// 저는요 = '사람';

// // 함수는?
// function 함수(a: 'hello'): 1 | 0 {
//   return 1;
// }
// 함수('hello');

// function 가위바위보(a: '가위' | '바위' | '보'): ('가위' | '바위' | '보')[] {
//   return ['바위'];
// }
// 가위바위보('보');

// // Literal type은 const변수 업글버전임

// // Literal type의 문제점
// // -> 솔루션1. object만들 때 타입지정 확실히 하기
// // -> 솔루션2. as문법으로 타입을 속이기
// // -> 솔루션3. as const 사용 -> object value값을 그대로 타입으로 지정해줌, object 속성들에 모두 readonly를 붙여줌

// var 자료 = {
//   name: 'kim',
// };
// // kim이라는 자료만 들어올 수 있습니다 x
// // kim이라는 타입만 들어올 수 있습니다 o
// function 내함수(a: 'kim') {}
// 내함수(자료.name); // 자료.name은 type은 string, 자료가 kim
