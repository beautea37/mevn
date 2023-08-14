console.log("커멘드 테스트 과정")


function b(){
    var i = 3;
    for (var i = 0; i < 10; i++) {
    }
    return i;
}

console.log(b());       //10

// function c() {
//     for(let i = 0; i < 10; i++) {
//     }
//     return i;
// }
// console.log(c());   //에러가 나오는 것이 맞다.

// let a = 1
// if(true){
//     console.log(a)
//     let a = 2
// }
//
// console.log(a);


function arrow() {
    setTimeout(() =>{
        console.log(this)
    }, 1000)
}

function not_arrow() {
    setTimeout(function () {
        console.log(this)
    }, 1000)
}


//----------------------------------------------------------------------------------

const func1 = (e, index) => {
    console.log(`${index}번째 요소는 ${e}`)
}
const func2 = (e, index ) => e*2
const func3 = (prev, curr, index) => prev + curr
const func4 = e => e % 2
const a = [1, 2, 3, 4, 5].forEach(func1);

//----------------------------------------------------------------------------------


// console.log(a);     //undefined
// const b = [1, 2, 3, 4, 5].forEach.map(func2);
// console.log(b); //[2,4,6,8,10]
// const c = [1, 2, 3, 4, 5].reduce(func3);
// console.log(c);
// const d = [1, 2, 3, 4, 5].filter(e => e % 2);
// console.log(d);

//----------------------------------------------------------------------------------

// const name = "기제";
// const age = 30
// const job = "개발자";
//
// const ES6 = {name, age, job}
// const not_ES6 = {"name" : name, "age" : age, "job": job}

// console.log(ES6);
// console.log(not_ES6)    // 같은 결과값이 나온다.
//---------------------------------------


const a1 = (b, ...rest) =>{
    console.log(rest)
}

const asd = () => ({"name" : "asd", "age" : 13})
const {name} = asd();
console.log(name)

const job_1 = () => {
    const b = Math.random() * 100
    setTimeout()(() => {
        console.log(1)
    }, b)
}

console.log("hi");
setTimeout(function setTime() {
    console.log("async function1 complete");
})
setTimeout(function time() {
    console.log("async function2 complete");
})
console.log("!!!!!!!!!!");


// Queue 클래스 선언
class Queue {
    // 생성자 함수
    constructor() {

        this.a = [];
    }

    // 큐의 맨 앞 요소 반환 함수
    front() {
        // 큐가 비어있는 경우
        if (this.a.length === 0) {
            console.log("큐가 비었다1");
            return;
        } else {
            // 큐의 맨 앞 요소 반환
            return this.a[0];
        }
    }

    // 큐에 요소를 추가하는 함수
    enqueue(value) {
        this.a.push(value);
    }

    // 큐의 맨 앞 요소 제 함수
    dequeue() {
        // 큐가 비어있는 경우
        if (this.a.length === 0) {
            console.log("큐가 비었다2");
            return;
        }
        // 큐의 맨 앞 요소 제거
        this.a.shift();
    }
}

// Queue 클래스의 인스턴스 생성
const q = new Queue();

// 큐에 1부터 5까지 값을 순서대로 넣기
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
q.enqueue(5);

// 4번 반복하는 반복문 실행
for (let i = 0; i < 4; i++) {
    // 현재 큐의 맨 앞 요소 출력
    console.log(q.front());
    // 큐의 맨 앞 요소 제거
    q.dequeue();
}
