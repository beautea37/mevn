console.log("커멘드 테스트 과정")


function b() {
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
    setTimeout(() => {
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
const func2 = (e, index) => e * 2
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


const a1 = (b, ...rest) => {
    console.log(rest)
}

const asd = () => ({"name": "asd", "age": 13})
const {name} = asd();
console.log(name)

const job_1 = () => {
    const b = Math.random() * 100
    setTimeout()(() => {
        console.log(1)
    }, b)
}

console.log("hi");
/*
동기, 비동기를 통한 순서 설정. async는 마지막에 출력될 것임.
JS에서 함수는 CallStack에 쌓였다가 pop이 되며 동기적으로 실행됨.
허나 web API의 setTimeout, I/O bound는 콜스택 쌓인 후 바로 web APIs의 백그라운드에서 비동기 작업 실행.
정리하면 console.log같은 경우 heap에서 스트레이트로 가지만 function은 web APIs에서 콜백 큐에 담겨 있다가 이벤트 루프를 통해 Heap으로 전달되어 실행
http://latentflip.com/loupe
*/
setTimeout(function setTime() {
    console.log("async function1 complete");
})
setTimeout(function time() {
    console.log("async function2 complete");
})
console.log("!!!!!!!!!!");


// Queue
/*
* FIFO(선입선출 구조)*/
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


//비동기 실행의 순차 적용 법 promise, resolve, reject
console.log("비동기 시작")
const p = (c = "첫 c") => {
    return new Promise((resolve, reject) => {
        //비동기 함수 로직
        setTimeout(() => {
            resolve(`${c} 는 resolve`)
        }, 1 * 10000)
    });
}
p().then(ret => {
    console.log(ret)
    return p(`then 리턴`)
}).then(ret => {
    console.log(ret)
})
console.log("비동기 끝")

const as = [1, 2, 30000, 4]
Math.max(...as);
const asdf = [1, 2, 3, 4];
console.log("MAX : " + Math.max(...asdf));

//Promise 감싸기 async & await
const promiseA = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(1);
            resolve(1);
        }, Math.random() * 100);
    })
}
const promiseB = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(2);
            resolve(2);
        }, Math.random() * 100);
    })
}
const promiseC = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(3);
            resolve(3);
        }, Math.random() * 100);
    })
}
const main = async () => {
    await promiseA()
    await promiseB()
    await promiseC()
}
console.log("main async")
main()

//Promise를 통한 에러 핸들링
const errorHandeling = (c = "asdf") => {
    return new Promise((resolve, reject) => {
        //비동기 로직
        throw new Error("에러 msg")
        reject(new Error("reject error"))
        reject("에러 3");
        setTimeout(() => {
            resolve(`${c} resolve msg`)
        }, 1 * 1000)
    })
}
errorHandeling().then(ret => {
    return a(`asdf`);
}).then(ret => {
    console.log(ret);
}).catch(e => {
    console.log(`${e} Error3`)
})
//then을 통한 에러처리 - 1
const async1 = param => {
    return new Promise((resolve, reject) => {
        resolve(param * 2);
    })
}
const async2 = param => {
    return new Promise((resolve, reject) => {
        throw "에러"
        resolve(param * 2);
    })
}
async1(1)
    .then(async2)
    .then(result => {
        console.log(result)     // 4
    }, reason => {
        console.log(`이 Promise 부분은 ${reason}으로 종료시킴`)
    })

//then을 통한 에러처리 - 2
const async3 = param => {
    return new Promise((resolve, reject)=> {
        resolve(param * 2);
    })
}
const async4 = param => {
    return new Promise((resolve, reject) => {
        resolve(param * 2);
    })
}
async3(1).then(async4)
    .then(result => {
        throw "에러";
        console.log(result);        //4
    }, reason => {
        console.log((`이 promise는 ${reason}`));
    })

//catch로 에러처리
const async5 = param => {
    return new Promise((resolve, reject) => {
        resolve(param * 2);
    })
}
const async6 = param => {
    return new Promise((resolve, reject) => {
        throw "에러";
        resolve(param * 2);
    })
}
async5(1).then(async6)
    .then(result => {
        console.log(result);        //4
        throw "에러";
    })
    .catch(reason => {
        console.log(`이 Promise로 ${reason}으로 종료`);
    })
    .finally(() => {
        console.log(`이 부분은 무조건 실행되는 로직임`);
    })

const async7 = (message, ret) => {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log(message);
            console.log(new Date());
            resolve(ret)
        }, 2000);
    })
}

const promises = [async7("비동기 함수 1", 1), async7("비동기 함수 2", 2)]
Promise.all(promises)
    .then(data => {
        console.log(data);
    })


//rest 매개변수 Case 세가지
const rest1 = (b, ...rest) => {
    console.log(rest);
}
rest1(1, 2, 3);

const rest2 = [1, 2, 3];
const rest22 = (a, b, c) => console.log(a, b, c);
rest22(...rest2);

const rest3 = [1, 2, 3, 4, 5];
const [head, ...rest] = rest3;
console.log(head, rest);

//배열 통합
const combineA = [1, 2, 3];
const combineB = [4, 5, 6];
const combineC = [...combineA, ...combineB];
console.log(combineC);

//Max함수 매개변수 형합
const maxRest = [1, 2, 3, 4];
console.log(Math.max(...maxRest));
console.log(Math.min(...maxRest));

//객체 복사
const copyObj = {"name": "asdf", "age": 12}
const copyObj2 = {...copyObj, "key": 1}
console.log(copyObj2);
//객체의 깊이가 1인 경우에 한해 사용 하능하다는 한계 존재

//swap
let swapA = 1;
let swapB = 2;
[swapA, swapB] = [swapB, swapA];
console.log(swapA, swapB)       //2, 1

//배열에 값 쉽게 넣는 법
const easyToPutD = () => [1, 2, 3, 4]
const [easyToPutA, easyToPutB, easyToPutC] = easyToPutD()
console.log(easyToPutA, easyToPutB, easyToPutC);        //1, 2, 3
// 함수로 받은 값들을 추출해 배열로 받기 좋다. 아래는 예시
const easyPutValueD = () => {
    return {"nameValue": "이름v", "job": "직업"}
}
const {nameValue} = easyPutValueD();
console.log(nameValue);

const easyPutValueVa2 = [12345215, 5234654376]
const [easyPutValueVB, easyPutValueVC] = easyPutValueVa2;
console.log(easyPutValueVB + " and " + easyPutValueVC);
//{}를 통한 객체 역시 마찬가지로 변수 값 변경 및 입력 가능함.

//274 Promise