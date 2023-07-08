// // 함수의 타입 지정
// function 내함수(x: number): number {
//   return x * 2;
// }
// // 함수에서 void 타입 활용가능
// // -> 실수로 뭔가 return 하는걸 사전에 막을 수 있음
// // 파라미터가 옵션일 경우에 -> ? 추가
// // 변수?.: number === 변수: number | undefined
// function 함수(x?: number): void {
//   1 + 1;
// }
// 함수();
// // 콘솔 오류 -> npm install @types/node --save-dev
// // (숙제1) 이름을 파라미터로 입력하면 콘솔창에 "안녕하세요 홍길동"을 출력해주고
// // 아무것도 파라미터로 입력하지 않고 함수를 사용하면 "이름이 없습니다" 를 출력하는 함수를 만들어봅시다.
// function sayHi(x?: string) {
//   if (x) {
//     console.log('안녕하세요 ' + x);
//   } else {
//     console.log('이름이 없습니다.');
//   }
// }
// // (숙제2) 함수에 숫자 또는 문자를 집어넣으면 자릿수를 세어 출력해주는 함수를 만들어보십시오.
// function countStringLength(str: string | number): number {
//   return str.toString.length;
// }
// countStringLength(245);
// // (숙제3) 결혼 가능 확률을 알려주는 함수를 만들어봅시다.
// function marryPercentage(
//   money: number,
//   house: boolean,
//   charm: string
// ): string | void {
//   let score: number = 0;
//   score += money;
//   if (house) {
//     score += 500;
//   }
//   if (charm === '상') {
//     score += 100;
//   }
//   if (score >= 600) {
//     return '결혼가능';
//   }
// }
// marryPercentage(700, false, '중');
// marryPercentage(100, false, '상');
