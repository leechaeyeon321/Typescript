// 변수

// 키워드 변수이름:타입 = 값;
// 타입표기(type annotation);

const str:string = "string";
const num:number = 1;
const bool:boolean = true;

// object
const arr1:number[] = [1,2,3];
const arr2:string[] = ['a', 'b', 'c'];
const arr3:Array<number> = [1,2,3];
// console.log(arr2[0].concat('!'));

// tuple 각 요소에 지정되어 있는 배열 행
const arr4:[boolean,string] = [true, 'a'];
// console.log(arr4[0].concat('!')); => 이렇게 하면 에러남.

// console.log(arr4[1].concat('!'))

// enum 열거형 C나 Java에 흔하게 쓰이는 타입인데 어떤 특정 집합을 열거할 때 사용
enum Names {sesac, 새싹}
let name1:Names = Names.sesac;

// name1 = 'sesac' => 오류 뜬다..

// any : 최대한 안 쓰는 게 좋다.
// 모든 타입에 대해서 허용한다.
const any1:any = [1,2,3]; //어떤 타입이든 상관 없다는 것을 의미함. 그러면 타입스크립트를 쓰는 이유가 없음.

// void : undefined 와 null만 들어갈 수 있는 타입.
const void1:void = undefined; // 보통 함수에서 쓰임...! return을 하지 않으면 그때 void로 지정해야 한다

// never : 절대 끝에 도달하지 않는 타입
function neverEnd():never {
    while(true){

    }
}

///////함수///////
// (매개변수:type):<return>

//function 함수이름(매개변수:type):반환타입{}
function sum1(a:number, b:number) :number {
    return a+b;
}
// console.log(sum1(1,2));
// console.log(sum1('1',1)); // 다른 타입으로 보내는 것 X
// console.log(sum1(1,2,3)); // 많이 보내는 것 X

function sum2(a:number, b?:number) :void { // number + number // number + undefined
    console.log(a);
    console.log(b);
}
sum2(1)
sum2(1,2)
function sum3(a:number, b?:number) :number { 
    // number + number // number + undefined
    // 각각의 타입에 대해 b가 undefined일 때는 어떻게 하겠다
    if(b == undefined) return a;
    else return a+b;
};

// interface: 미리 정의하는 약속 혹은 규칙..!
interface Student {
    name:string,
    age:number
    nickName?: string
}
const student1: Student = {
    name: '이름1',
    age: 10
}
// interface를 정의해두면 이거에 맞춰서 작업을 할 수가 있다.
// console.log를 계속 찍는 번거로움도 사라질 것임..!

const student2: Student = {
    name:'이름2',
    age: 20,
    nickName: '닉네임2'
}
function check(stu:Student){
    console.log(stu.name);
}
check(student1);
check(student2);

// 클래스
// class 클래스 이름{
//     변수명: 타입;
//     constructor(변수:타입){
//         this.변수명 = 변수;
//     }
// }

class Person {
    id: String;
    constructor(name:string, age:number){
        this.id = name + age;
    }
}
const person1 = new Person('이름3', 30);
console.log(person1.id);

interface Shape {
    width: number;
    getLength(): number;
}
// class Square implements Shape {
//     width: number;
//     getLength(): number {
//         return this.width;
//     }
// }
class Square2 implements Shape{
    constructor(readonly width: number){}
    getLength(): number{
        return this.width;
    }
}
const square1 = new Square2(10);
console.log(square1.getLength());

class Person2{
    constructor(public name: string, private age:number){
        this.name = name;
        this.age = age;
    }
}
const person3 = new Person2('a', 1);
console.log(person3.name);
//console.log(person.age);

// 제네릭 (Generic) <T>
// 타입을 함수의 매개변수처럼 사용하는 것..!
// 재사용성이 높은 함수

function getText<T>(text:T):T{
    return text;
}
console.log(getText<string>('a'))
console.log(getText<number>(1))

//하나를 만들고 재사용하는 것..!