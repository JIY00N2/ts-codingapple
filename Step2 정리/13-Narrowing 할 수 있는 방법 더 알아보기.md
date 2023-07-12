## 13. Narrowing 할 수 있는 방법 더 알아보기

### null & undefined 타입 체크하는 경우 매우 많음

```ts
function 함수(a: string | undefined) {
  // 1. a가 undefined이면 조건식 -> undefined (if문 실행 x)
  // 2. a가 string 타입이면 조건식 -> true (if문 실행 o)
  if (a && typeof a === 'string') {
  }
}
```

### 1. && 사이에서 처음 등장하는 falsy 값을 찾아주고 그게 아니면 마지막 값을 남겨줌

```ts
1 && null && 3; // null이 남음
undefined && '안녕' && 100; // undefined 남음
```

### 2. in 키워드로 object narrowing (속성명 in 오브젝트 자료)

```ts
type Fish = { swim: string };
type Bird = { fly: string };
function 함수2(animal: Fish | Bird) {
  if ('swim' in animal) {
    animal.swim;
  }
}
```

### 3. instanceof 연산자로 object narrowing 가능 (오브젝트 instanceof 부모class)

```ts
let date = new Date();
if (date instanceof Date) {
}
```

### 4. object 타입마다 literal type(고정된 값) 만들어두면 narrowing 편리

2 & 3 불가능 -> 비슷한 오브젝트 두 개 타입 구분하기<br>
(애초에 잘 만들기 or literal type 강제로 만들기)

```ts
type Car = {
  wheel: '4개';
  color: string;
};
type Bike = {
  wheel: '2개';
  color: string;
};
function 함수3(x: Car | Bike) {
  if (x.wheel === '4개') {
    console.log('x는 Car 타입');
  } else {
    console.log('x는 Bike 타입');
  }
}
```
