// // class 복사하고 싶을 때 -> extends 붙이기
// class User {
//   x = 10;
// }

// class NewUser extends User {}
// let user = new NewUser();
// console.log(user); // NewUser {x:10}

// // private, protected 붙이면 class{} 안에섬나 사용가능
// class User2 {
//   protected x = 10;
// }

// // protected: extends된 class는 사용 가능, 자식들 사용 불가능
// class NewUser2 extends User2 {
//   doThis() {
//     this.x = 20;
//   }
// }

// // static 키워드 붙으면 부모 class에 직접 부여됨
// // +자식에게 안물려줌, extends하면 잘 따라옴
// class User3 {
//   static x = 10;
//   y = 20;
// }
// let user3 = new User3();
// console.log(user3); // User3 {y:20}
// console.log(User3.x); // 10 부모
// console.log(user3.x); // 오류 자식

// // private / protected / public + static 가능

// // 활용 예시
// class Person {
//   static skill = 'js';
//   intro = Person.skill + '전문가입니다';
// }
// let 철수 = new Person();
// console.log(철수); // Person {intro : 'js전문가입니다'}

// Person.skill = 'ts';
// let 영희 = new Person();
// console.log(영희); // Person {intro : 'ts전문가입니다'}

// // (숙제1) 다음 x, y, z 속성의 특징을 설명해보십시오.
// class Users {
//   private static x = 10;
//   public static y = 20;
//   protected z = 30;
// }
// /*
// 1. 필드값은 원래는 모든 User의 자식들에게 물려주는 속성이지만
// x와 y에는 static 키워드가 붙었기 때문에 User.x 이런 식으로만 접근해서 쓸 수 있습니다.
// User의 자식들은 x와 y를 쓸 수 없습니다.

// 2. private static x는 class 내부에서만 수정가능합니다.

// 3. public static y는 class 내부 외부 상관없이 수정가능합니다. public 키워드 지워도 똑같이 동작할 듯

// 4. protected z는 private 키워드와 유사하게 class 내부에서만 사용이 가능한데
// 약간 범위가 넓어서 extends로 복사한 class 내부에서도 사용할 수 있습니다.
// */

// // (숙제2) x 속성에 숫자를 더해주는 함수가 필요합니다.
// // (조건) private static x = 10; 이거 코드 수정금지
// // class Users1 {
// //   private static x = 10;
// //   public static y = 20;
// // }
// // Users1.addOne(3); //이렇게 하면 x가 3 더해져야함
// // Users1.addOne(4); //이렇게 하면 x가 4 더해져야함
// // Users1.printX(); //이렇게 하면 콘솔창에 x값이 출력되어야함

// class Users1 {
//   private static x = 10;
//   public static y = 20;

//   static addOne(파라미터: number) {
//     Users1.x += 파라미터;
//   }

//   static printX() {
//     console.log(Users1.x);
//   }
// }
// Users1.addOne(3);
// Users1.addOne(10);
// Users1.printX();

// // (숙제3) 이런거 어떻게 만들게요
// // let 네모 = new Square(30, 30, 'red');
// // 네모.draw();
// // 네모.draw();
// // 네모.draw();
// // 네모.draw();

// // <body>
// //   <script src="index.js"></script>
// // </body>

// class Square {
//   constructor(public width: number, public height: number, public color: string) {}
//   draw() {
//     let a = Math.random();
//     let square = `<div style="position:relative;
//       top:${a * 400}px;
//       left:${a * 400}px;
//       width:${this.width}px;
//       height : ${this.height}px;
//       background:${this.color}"></div>`;
//     document.body.insertAdjacentHTML('beforeend', square);
//   }
// }

// let 네모 = new Square(30, 30, 'red');
// 네모.draw();
// 네모.draw();
// 네모.draw();
// 네모.draw();
