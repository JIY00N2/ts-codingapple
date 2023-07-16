## 21. array 자료에 붙일 수 있는 tuple type

### array에 타입 넣는 법

```ts
let dog: (string | boolean)[] = ['dog', true];
```

### tuple type: 위치까지 고려한 타입 지정 가능

### tuple안에 옵션 표시 가능(?) - 맨 뒤만 가능

```ts
let tDog: [string, boolean?, number?] = ['dog', true];
```

### 함수에서 쓰는 tuple

### rest parameter 타입 지정시 tuple 가능

```ts
function 함수(...x: [number, string]) {
  console.log(x);
}
함수(1, '2');
```

### array 합칠 때 -> ...spread 연산자 사용

```ts
let arr = [1, 2, 3];
let arr2: [number, number, ...number[]] = [4, 5, ...arr];
```

### (숙제1) 여러분이 최근에 사먹은 음식의 1. 이름 2. 가격 3. 맛있는지여부를 array 자료에 담아보고 타입지정까지 해보십시오.

```ts
let drink: [string, number, boolean] = ['펩시제로', 1500, true];
```

### (숙제2) 이렇게 생긴 자료는 타입지정 어떻게 해야할까요?

```ts
let arr = ['동서녹차', 4000, true, false, true, true, false, true];
```

```ts
type Arr = [string, number, ...boolean[]];
let res1 = [true, false, true, true, false, true];
let res2: Arr = ['동서녹차', 4000, ...res1];
```

### (숙제3) 함수에 타입지정을 해보도록 합시다

1.  이 함수의 첫째 파라미터는 문자,<br>
2.  둘째 파라미터는 boolean,<br>
3.  셋째 파라미터부터는 숫자 또는 문자가 들어와야합니다.<br>
    그럼 함수에 파라미터를 어떻게 만들고 타입지정은 또 어떻게 해야할까요?<br>
    오늘 배운 tuple 타입과 rest parameter를 사용해봅시다.<br>

```ts
function 함수2(...x: [string, boolean, ...(number | string)[]]) {}
함수2('str', true, 1, 1, '2');
```

### (숙제4) 다음과 같은 문자/숫자 분류기 함수를 만들어보십시오.

파라미터 중 문자만 모아서 [] 에 담아주고, 숫자만 모아서 [] 에 담아주는 함수가 필요합니다.<br>
문자 숫자 외의 자료는 입력불가능하고 파라미터 갯수 제한은 일단 없습니다.<br>
함수 만들어보시고 함수의 파라미터/return 타입지정도 확실하게 해봅시다.<br>
(동작예시)<br>
함수('b', 5, 6, 8, 'a') 이렇게 사용할 경우 이 자리에 [ ['b', 'a'], [5, 6, 8] ] 이 return 되어야합니다.<br>

```ts
function filterFnc(...x: (string | number)[]) {
  let result: [string[], number[]] = [[], []];
  x.forEach((a) => {
    if (typeof a === 'string') {
      result[0].push(a);
    } else {
      result[1].push(a);
    }
  });
  return result;
}
filterFnc('b', 5, 6, 8, 'a');
```
