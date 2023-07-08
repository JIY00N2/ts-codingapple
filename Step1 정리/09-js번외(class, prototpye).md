## 09. js번외(class, prototype)

## 1. class 키워드 알아보기

### 롤 캐릭터들의 정보를 object 자료형으로 정리하자

```js
const nunu = {
  q: 'consume',
  w: 'snowball',
};
```

```js
const garen = {
  q: 'strike',
  w: 'courage',
};
```

### 비슷한 object들을 많이 만들일이 있으면 class를 쓰자

### class는 object 뽑는 기계

```js
function 기계(구명) {
  this.q = 구멍;
  this.w = 'snowball';
}
```

```js
const nami = new 기계('hail');
const lulu = new 기계('bigger');
```

### ES6 class 문법

```js
class Hero {
  constructor(구멍) {
    this.q = 구멍;
    this.w = 'snowball';
  }
}

new Hero();
```

## 2. prototype 문법 짚어보기

### prototype을 쓰면 자식 object에게 데이터를 물려줄 수 있음

### prototype은 유전자다

```js
function 기계() {
  this.q = 'strike';
  this.w = 'snowball';
}

기계.prototype.name = 'kim';
```

```js
var nunu = new 기계(); // 자식
nunu.name; // 'kim'
```

nunu가 name을 가지고 있지 않으면 -> nunu 부모 유전자를 찾음<br>
거기서 name이 있으면 출력

### object에서 자료를 뽑을 때 일어나는 일

1. 직접 자료를 가지고 있으면 출력
2. 없으면 부모 유전자에서 찾음
3. 없으면 부모의 부모 유전자까지 찾음...

### 모든 array 자료에서 쓸 수 있는 함수 추가하기?

```js
Array.prototype.new함수 = function () {};
var array = [1, 2, 3];
array.new함수();
```
