// 타입도 import export 가능
// typescript 타입 변수 숨기기 문법: namespace(=module)
// object와 다르게 생겼는데, 아무튼 object 안에 숨긴 것
/*namespace 네임스페이스 {
  export type Name = string | number;
}*/
// Name; // 오류
// let 변수: 네임스페이스.Name = 'kim';
// 예전에는 import 대신 이것 사용
// /// <reference path="./a.ts" />
// interface 이런 것들도 export 가능
// export type 이름 = string;
// export interface 인터페이스 {}
// (숙제1) Car 그리고 Bike 타입을 만들었는데 너무 길어요
// 리 위 코드를 다른 파일 아무데나 저장하신 후 index.ts에서 가져와서 변수만들 때 사용해보십시오.
/*(index.ts)

type Car = {
  wheel : number,
  model : string
}
interface Bike {
  wheel : 2,
  model : string
}*/
/*export type Car = {
  wheel: number;
  model: string;
};
export interface Bike {
  wheel: 2;
  model: string;
}

import { Car, Bike } from './a';
let car: Car = { wheel: 4, model: 'Lamborghini' };
*/
// (숙제2) 너무 자주만들어 쓰는 함수가 하나 있습니다
/*이 함수는 파라미터로 object자료 하나를 선택적으로 집어넣을 수 있고
아무것도 return 해주지 않아야합니다.
함수 만들 때마다 여기에 타입 일일이 붙이기 귀찮아서 그런데
이 타입을 다른 파일에 저장해두고 import 해와서 함수 만들 때마다 쓰려면 어떻게 코드를 짜야할까요*/
// export default Fnc = (a?: object) => void;
// import {Fnc} from './a'
// let fnc: Fnc = function(a){
//   console.log(a)
// }
// fnc({abc: '안뇽'})
// (숙제3) 타입 중복이 너무 많이 발생합니다.
/*namespace dog {
  export type Dog = string;
}
namespace dog2 {
  export interface Dog {
    name: string;
  }
}
let dog1: dog.Dog = 'bark';
let dog2: dog2.Dog = { name: 'paw' };
*/
