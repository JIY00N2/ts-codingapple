// // <>이건 일반 타입변수에도 사용가능
// type Age<T> = T;
// let a: Age<string>;
// // 파라미터로 string을 집어넣으면 string을 남겨주시고, 그게 아니면 unknown 남겨주세요
// // 1. type if문은 삼항연산자로
// // 2. 조건식은 extends 써야함
// type Age2<T> = T extends string ? string : unknown;
// let b: Age2<number>;
// // Q. 그럼 파라미터로 array 자료를 입력하면 array의 첫 자료의 타입을 그대로 남겨주고,
// // array 자료가 아니라 다른걸 입력하면 any 타입을 남겨주는 타입은 어떻게 만들면 될까요?
// type FirstItem<T> = T extends [] ? T[0] : any;
// let age1: FirstItem<string[]>;
// let age2: FirstItem<number>;
// // 조건문에서 쓸 수 있는 infer 키워드 -> 타입을 왼쪽에서 추출해줌(T에서 타입을 뽑아주세요)
// type Person<T> = T extends infer R ? R : unknown;
// type c = Person<string>;
// // 예시2: array태부의 타임만 뽑고 싶다 -> R = string
// type 타입추출<T> = T extends (infer R)[] ? R : unknown;
// type d = 타입추출<string[]>;
// // 예시3: 함수를 넣으면 함수의 return 타입만 뽑고 싶다
// // -> ReturnType이라는 기본 함수 쓰면 알아서 해줌
// type 타입추출2<T> = T extends () => infer R ? R : unknown;
// type e = 타입추출2<() => void>;
// type f = ReturnType<() => void>;
// // (숙제1) 타입 파라미터로
// /*
// 1. array 타입을 입력하면
// 2. array의 첫 자료가 string이면 string 타입을 그대로 남겨주고
// 3. array의 첫 자료가 string이 아니면 unknown 을 남겨주려면 어떻게 타입을 만들어놔야할까요?*/
// let age4: Age<[string, number]>;
// let age5: Age<[boolean, number]>;
// type age<T> = T extends [string, ...any] ? T[0] : unknown;
// // (숙제2) 함수의 파라미터의 타입을 뽑아주는 기계를 만들어보십시오.
// type 타입뽑기<T> = T extends (x: infer R) => any ? R : any;
// type aa = 타입뽑기<(x: number) => void>; //이러면 number가 이 자리에 남음
// type bb = 타입뽑기<(x: string) => void>; //이러면 string이 이 자리에 남음
