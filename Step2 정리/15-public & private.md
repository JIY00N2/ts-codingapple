### 15. public & private

### class에서 쓰는 public 키워드

### public 붙이면 모든 자식들이 이용 가능, 생략 가능

```ts
class User {
  public name = 'lee';
  constructor(a) {
    this.name = a;
  }
  public 함수() {}
}

let user = new User('park');
user.name = 'hi';
```

### class에서 쓰는 private 키워드

### private 붙으면 class 안에서만 수정, 이용 가능

```ts
class User2 {
  private name = 'lee';
  constructor(a) {
    this.name = a;
  }
  public 함수() {}
}

let user2 = new User2('park');
user2.name = 'hi'; // 오류 발생
```

### private 키워드 사용 예시

```ts
class User3 {
  name: string;
  private familyName: string = 'lee';
  constructor(a) {
    this.name = a + this.familyName;
  }
  changeFamilyName() {
    this.familyName = 'park';
  }
}
let user3 = new User3('윤');
console.log(user3); // User3 {familyName: 'lee', name:'지윤lee'}
console.log(user3.familyName); // 실수로 familyName을 수정하는 것을 막을 수 있음
```

### 자식들이 familyName을 바꾸고 싶으면?

```ts
user3.changeFamilyName();
console.log(user3); // User3 {familyName: 'lee', name:'지윤park'}
```

### public 키워드 쓰면 this.어쩌구 생략 가능

```ts
class Person {
  constructor(public age: number) {}
}

let 자식 = new Person(24);
console.log(자식); // Person {age: 24}
```
