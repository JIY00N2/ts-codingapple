// 롤 캐릭터들의 정보를 object 자료형으로 정리하자
const nunu = {
  q: 'consume',
  w: 'snowball',
};

const garen = {
  q: 'strike',
  w: 'courage',
};

// 비슷한 object들을 많이 만들일이 있으면 class를 쓰자
// class는 object 뽑는 기계
function 기계(구명) {
  this.q = 구멍;
  this.w = 'snowball';
}

const nami = new 기계('hail');
const lulu = new 기계('bigger');

// ES6 class 문법
class Hero {
  constructor(구멍) {
    this.q = 구멍;
    this.w = 'snowball';
  }
}

new Hero();
