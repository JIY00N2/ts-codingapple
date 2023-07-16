// // d.ts 파일
// // 1. 타입 정의 보관용 파일
// // 2. 모든 타입을 정리해놓은 래퍼런스용으로 d.ts 파일 쓰기
// // 다른 ts 파일에서 사용하고 싶으면 export import
// // export type Age = number;
// // export interface person {
// //   name: string;
// // }
// import { Age } from './index.d';
// let age: Age;
// // tsconfig.json -> "declaration": true // ts파일마다 d.ts파일 자동생성됨
// // d.ts가 자동생성되는 경우 -> d.ts 파일 수정 x
// // d.ts 파일은 자동으로 글로벌 모듈 아님
// // -> 글로벌 모듈로 만드는 법: tsconfig.json -> "typeRoots": ["./types"]하고 types\common 폴더 생성
// // types 폴더 안의 타입들은 글로벌하게 이용 가능
// // 외부라이브러리 타입
// // https://github.com/DefinitelyTyped/DefinitelyTyped or 타입스크립트 공홈(추천)
// // (참고) "typeRoots" 옵션이 있을 경우 node_modules/@types 폴더를 추가해야합니다. 아니면 그냥 "typeRoots" 옵션을 제거해보셈
