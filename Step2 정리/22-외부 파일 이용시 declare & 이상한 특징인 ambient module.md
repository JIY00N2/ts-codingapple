## 22. 외부 파일 이용시 declare & 이상한 특징인 ambient module

### .js에 있는 변수를 .ts에서 이용하고 싶다

### 변수 재정의가 가능한 declare 문법 -> declare로 정의한 내용은 js로 변환되지 않음

```ts
declare let a: number; // 어딘가에 분명 변수 a가 있으니 에러내지 마세요
```

### .ts -> .ts로 변수를 가져다 쓰고 싶을 때

### ts 이상한 특징: 모든 ts파일은 ambient module(글로벌 모듈) -> 그냥 가져다 쓰면 된다

### ts파일을 로컬 모듈로 만드는 법 -> import, export 있으면 자동으로 로컬 모듈

```ts
export {};
```

### 현재 로컬 모듈인 상태에서 글로벌 변수를 만들고 싶을 때 -> declare global{}

```ts
export {};
declare global {
  type Dog = string;
}
```
