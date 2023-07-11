// // ...rest 파라미터 개념
// // 다른 파라미터들 보다 맨 뒤에 있어야함
// function 함수(num, ...a) {
//   console.log(a);
// }
// 함수(1, 5, 4, 4, 6, 6); // 몇개의 파라미터가 들어올지 아직 모를 때

// rest 파라미터 타입 지정 가능
function 함수(...a: number[]) {
  console.log(a);
}
함수(1, 5, 4, 4, 6, 6);

// Q. rest 파리미터에 string or boolean or number 가능하다면?
function 함수1(...a: (number | string | boolean)[]) {
  console.log(a);
}
함수1(1, 5, 4, 4, 6, 6);

// ... Spread operator는 괄호 벗겨주세요 문법
let arr = [1, 2, 3];
let arr2 = [4, 5];
let arr3 = [...arr, ...arr2]; // [1,2,3,4,5]

// destructuring 개념
const [a, b] = ['hi', 123];
const { student, age } = { student: true, age: 20 };

// 함수 파라미터에 destructuring 가능
// 파라미터 만들기 === 변수 만들기
const obj = { name: 'lee', height: 163 };

function 함수2({ name, height }: { name: string; height: number }) {
  console.log(name, height);
}
함수2({ name: 'lee', height: 163 });

/*
(숙제1) 숫자 여러개를 입력하면 최댓값을 return 해주는 함수를 만들어봅시다. 
최댓값(6,3,7,2) 이렇게 쓰면 7이 return 되어야합니다. 
(조건1) 넣을 수 있는 숫자 갯수는 제한없음, 0 이상의 정수만 가능합니다.
(조건2) Math.max() 사용금지 반복문이나 쓰셈 
*/

function returnMaxNum(...arr: number[]) {
  let max = 0;
  arr.forEach((n) => {
    if (max < n) {
      max = n;
    }
  });
  return max;
}
returnMaxNum(6, 3, 7, 2);

/*
(숙제2) 이렇게 생긴 object 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다
(조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
(조건2) 함수실행시 입력한 파라미터의 value들 (kim, [3,5,4] 이런거)을 전부 콘솔창에 출력해줘야합니다.
*/

type UserType = {
  user: string;
  comment: number[];
  admin: boolean;
};

function fnc({ user, comment, admin }: UserType): void {
  console.log(user, comment, admin);
}

fnc({ user: 'kim', comment: [3, 5, 4], admin: false });

/*
(숙제3) 이렇게 생긴 array 자료를 파라미터로 입력할 수 있는 함수를 만들어봅시다. 
(조건1) 오늘 배운 파라미터 destructuring 문법을 써봅시다.
(조건2) 함수실행시 입력한 파라미터들을 전부 콘솔창에 출력해줘야합니다.
*/

type UserType2 = (number | string | boolean)[];

function fnc2([aa, bb, cc]: UserType2) {
  console.log(aa, bb, cc);
}

fnc2([40, 'wine', false]);
