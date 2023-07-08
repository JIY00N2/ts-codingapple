// // document.getElementById()
// // h4글자를 바꿔보자
// let 제목 = document.querySelector('#title');
// // 1. !== 연산자
// if (제목 !== null) {
//   제목.innerHTML = '반가워요';
// }
// // 2. instanceof 연산자 -> 가장 많이 씀
// if (제목 instanceof Element) {
//   제목.innerHTML = '반가워요';
// }
// // 3. as로 속이기 -> 쓰지말자
// let 제목1 = document.querySelector('#title') as Element;
// 제목1.innerHTML = '반가워요';
// // 4. 오브젝트에 붙이는 옵셔널 체이닝 ?.
// if (제목?.innerHTML) {
//   제목.innerHTML = '반가워요';
// }
// // 5. strict mode 끄기
// // <a>태그의 href 속성내용 바꾸기
// let 링크 = document.querySelector('.link');
// if (링크 instanceof HTMLAnchorElement) {
//   링크.href = 'https://kakao.com';
// }
// // eventlistener 부착하기
// let 버튼 = document.querySelector('#button');
// 버튼?.addEventListener('click', function () {});
// // (숙제1) 버튼을 누르면 이미지를 바꿔봅시다.
// // <img id="image" src="test.jpg">
// let 이미지 = document.querySelector('#image');
// if (이미지 instanceof HTMLImageElement) {
//   이미지.src = 'change.jpg';
// }
// // (숙제2) 바꾸고 싶은 html 요소가 많습니다.
// // <a class="naver" href="naver.com">링크</a>
// // <a class="naver" href="naver.com">링크</a>
// // <a class="naver" href="naver.com">링크</a>
// let 링크2 = document.querySelectorAll('.naver');
// for (let i = 0; i < 3; i++) {
//   let a = 링크2[i];
//   if (a instanceof HTMLAnchorElement) {
//     a.href = 'https://kakao.com';
//   }
// }
