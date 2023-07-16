// 변수, 함수 만들 때 타입지정하면 끝
// 새롭게 설치
// npx create-react-app 프로젝트명 --template typescript
// 기존 프로젝트에 설치
// npm install --save typescript @types/node @types/react @types/react-dom @types/jest
// JSX 문법을 쓰는 파일은 .tsx
// 일반 파일은 .ts
// 1. 일반변수, 함수 만들때 타입지정 잘하자
// 2. JSX 표현하는 타입 있음
// let 박스 :JSX.Element = <div></div>
// let 버튼 :JSX.Element = <button></button>
// 3. component 만들 때 타입지정 -> 함수 타입지정은 파라미터 & return 값
// props 파라미터는 알아서 타입 지정 해주고, 컴포넌트는 return으로 JSX를 뱉으니 JSX.Element 기입
// 생략해도 자동으로 타입 지정 됨
// type AppProps = {
//   name: string;
// };
// function App (props: AppProps) :JSX.Element {
//   return (
//     <div>{message}</div>
//   )
// }
// 4. component props 타입 지정
// 이제 a라는 props자리에 <h4>만 넣을 수 있게 타입쉴드를 씌워놓은 것임
// (참고) 아마 리액트 18버전부터는 JSX.IntrinsicElements는 props 타입넣을 때만 사용가능
// type ContainerProps = {
//   a: JSX.IntrinsicElements['h4'];
// };
// function Container(props: ContainerProps) {
//   return <div>{props.a}</div>;
// }
// 5. useState 타입지정(알아서 해줌)
//  const [user, setUser] = useState<string | null>('kim'); // 드문 경우
// props 잘못 전달해서 에러가 자주 남
