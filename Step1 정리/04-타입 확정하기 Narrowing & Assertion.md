## 04. 타입 확정하기

### Type이 아직 하나로 확정되지 않았을 경우

-> Type Narrowing 사용
else, elseif 안쓰면 에러가 발생할 수 있음
Narrowing으로 판정해주는 문법들

1.  typeof 변수
2.  속셩명 in 오브젝트자료
3.  인스턴스 instanceof 부모

```ts
function 내함수(x: number | string) {
  if (typeof x === 'string') {
    return x + '1';
  } else {
    return x + 1;
  }
}
내함수(123);
```

### assertion 문법(타 입 덮어쓰기)

x as number = x의 변수를 number로 덮어쓰겠다<br>
assertion 문법의 용도

1. Narrowing 할 때 사용
2. 무슨 타입이 들어올지 100% 확신할 떄 사용
3. 평소에는 쓰지말고 남이 짠 코드를 수정할때 사용

```ts
function Arr(x: number | string) {
  let array: number[] = [];
  array[0] = x as number;
}
Arr(123);
```

### (숙제1) 숫자여러개를 array 자료에 저장해놨는데

가끔 '4', '5' 이런 식의 문자타입의 숫자가 발견되고 있습니다.<br>
이걸 클리닝해주는 함수가 필요합니다.<br>
클리닝함수( ['1', 2, '3'] ) 이렇게 숫자와 문자가 섞인 array를 입력하면
[1,2,3] 이렇게 숫자로 깔끔하게 변환되어 나오는 클리닝함수를 만들어오고 타입지정까지 확실히 해보십시오.<br>
모르는 부분은 구글검색해도 봐드림

```ts
function filterArray(arr: (number | string)[]) {
  let cleanArray: number[] = [];
  arr.forEach((v) => {
    if (typeof v === 'string') {
      cleanArray.push(parseFloat(v));
    } else {
      cleanArray.push(v);
    }
  });
  return cleanArray;
}

console.log(filterArray(['1', 2, '3']));
```

### (숙제2) 다음과 같은 함수를 만들어보십시오.

```ts
let 철수쌤 = { subject: 'math' };
let 영희쌤 = { subject: ['science', 'english'] };
let 민수쌤 = { subject: ['science', 'art', 'korean'] };

function lastSubject(x: { subject: string | string[] }) {
  if (typeof x.subject === 'string') {
    return x.subject;
  } else if (Array.isArray(x.subject)) {
    return x.subject[x.subject.length - 1];
  } else {
    return 'error';
  }
}
console.log(lastSubject({ subject: ['english', 'art'] }));
console.log(lastSubject({ subject: ['science', 'art', 'korean'] }));
console.log(lastSubject({ hello: 'hi' }));
```
