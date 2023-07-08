// // type 변수 작명 관습은 대문자 or AnimalType
// // 같은 이름의 type 변수 재정의 불가능
// // type alias 만드는 법
// type Animal = string | number | undefined;
// let 동물: Animal = 'dog';
// // object 타입을 변수에 담기
// // object 속성 안에도 ? 사용 가능
// type Animal2 = { name: string; age: number };
// let 동물2: Animal2 = { name: 'lee', age: 25 };
// // readonly를 쓰면 object 자료 수정도 막을 수 있다
// type Boyfriend = {
//   readonly name: string;
// };
// const 남친: Boyfriend = {
//   name: '누군가',
// };
// // 남친.name = 'ㅋㅋ'; -> 실제 변환된 js파일은 에러가 없다
// // type 변수 -> union type으로 합치기 가능
// type Name = string;
// type Age = number;
// type Person = Name | Age;
// // &연산자로 object 타입 합치기
// type PositionX = { x: number };
// type PositionY = { y: number };
// type NewPositionType = PositionX & PositionY;
// let position: NewPositionType = { x: 10, y: 20 };
// // (숙제1) object 타입을 정의한 type alias 두개를 & 기호로 합칠 때 중복된 속성이 있으면 어떻게 될까요?
// // 오류명: An object literal cannot have multiple properties with the same name
// // (숙제2) 다음 조건을 만족하는 타입을 만들어봅시다
// /*
// 1. 이 타입은 object 자료형이어야합니다.
// 2. 이 타입은 color 라는 속성을 가질 수도 있으며 항상 문자가 들어와야합니다.
// 3. 이 타입은 size 라는 속성이 있어야하며 항상 숫자가 들어와야합니다.
// 4. 이 타입은 position 이라는 변경불가능한 속성이 있어야하며 항상 숫자가 담긴 array 자료가 들어와야합니다.
// type alias로 만들어보셈
//  */
// type MyType = {
//   color?: string;
//   size: number;
//   readonly position: number[];
// };
// let 테스트용변수: MyType = {
//   size: 123,
//   position: [1, 2, 3],
// };
// /*
// (숙제3) 다음을 만족하는 type alias를 연습삼아 간단히 만들어보십시오.
// 1. 대충 이렇게 생긴 object 자료를 다룰 일이 많습니다.
// { name : 'kim', phone : 123, email : 'abc@naver.com' }
// 2. object 안에 있는 이름, 전화번호, 이메일 속성이 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 3. 각 속성이 어떤 타입일지는 자유롭게 정하십시오.
// */
// type User = { name: string; email?: string; phone: number };
// let 테스트: User = {
//   name: 'lee',
//   phone: 23,
//   email: 'abc@gmail.com',
// };
// /*
// (숙제4) 다음을 만족하는 type alias를 만들어보십시오.
// 1. 숙제2와 똑같은데 이번엔 이름, 전화번호, 이메일, 미성년자여부 속성을 옳은 타입인지 검사하는 type alias를 만들어봅시다.
// 2. 미성년자 여부 속성은 true/false만 들어올 수 있습니다.
// 3. 멋있게 숙제3에서 만들어둔 type alias를 재활용해봅시다.
// */
// type User1 = { name: string; email?: string; phone: number };
// type User2 = { adult: boolean };
// type newUser = User1 & User2;
// let 테스트2: newUser = {
//   name: ' kim',
//   phone: 24,
//   email: 'ddf@gmail.com',
//   adult: true,
// };
