## 26. object 타입 변환기 만들기

```ts
let obj = { name: 'kim', age: 20 };
Object.keys(obj); // ['name', 'age']
```

### key 값을 전부 가져오는 keyof

```ts
interface Person {
  age: number;
  name: string;
}

type PersonKeys = keyof Person; // 'age' | 'name'
let a: PersonKeys = 'age';
```

### 타입을 만들었는데, 전부 string으로 바꾸려면 -> 타입 변환기 만들기

```ts
type Car = {
  color: boolean;
  model: boolean;
  price: boolean | number;
};

type TypeChanger<MyType> = {
  [key in keyof MyType]: string; // keyof MyType => 'color'|'model'|'price'
};

type 새로운타입 = TypeChanger<Car>;
```

### (숙제1) 다음 타입을 변환기 돌려보십시오.

```ts
type Bus = {
  color: string;
  model: boolean;
  price: number;
};
```

color, model, price 속성은 전부 string 또는 number 타입이어야합니다.<br>

1. 변환기 하나 만드시고<br>
2. 기존 Bus 타입을 변환기 돌려서 위 조건을 충족하는 새로운 타입을 하나 만들어보십시오.<br>

```ts
type TypeChanger2<T> = {
  [key in keyof T]: string | number;
};

type newBus = TypeChanger2<Bus>;
```

### (숙제2) 이런 변환기는 어떻게 만들어야할까요?

object안에 들어있는 모든 속성을 string, number 이렇게 고정된 타입으로 변환해주는게 아니라<br>
내가 원하는 타입을 입력하면 그걸로 변환해주는 범용성 좋은 변환기를 만들어보십시오.

```ts
type Bus2 = {
  color: string;
  model: boolean;
  price: number;
};

type TypeChanger3<MyType, T> = {
  [key in keyof MyType]: T;
};

type NewBus = TypeChanger3<Bus2, boolean>;
type NewBus2 = TypeChanger3<Bus2, string[]>;
```
