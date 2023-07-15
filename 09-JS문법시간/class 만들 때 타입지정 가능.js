var Person = /** @class */ (function () {
    function Person(b) {
        this.name = b;
    }
    // prototype 함수는 여기에 만듬
    Person.prototype.함수 = function (b) {
        console.log('안녕' + b);
    };
    return Person;
}());
var person1 = new Person('lee');
var person2 = new Person('park');
console.log(person1); // Person {name: 'lee'}
console.log(person2); // Person {name: 'park'}
person1.함수('hi'); // 안녕hi
