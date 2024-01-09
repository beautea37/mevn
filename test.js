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



////////////////////

class Stack{
    constructor(){
        this.topOfStack = null;
        this.length = 0;
    }

    push(item){
        const node = new Node(item);
        if(this.topOfStack!=null){
            node.next = this.topOfStack;
        }
        this.topOfStack = node;
        this.length+=1;
    }

    pop(){
        if(this.length==0)return -1;
        const popItem = this.topOfStack;
        this.topOfStack = popItem.next;
        this.length-=1;

        return popItem.item
    }

    size(){
        return this.length;
    }

    empty(){
        if(this.length==0) return 1;
        else return 0;
    }

    top(){
        if(this.length==0)return -1;
        return this.topOfStack.item;
    }

}


//2.8 이터러블, 이터레이터, 제네레이터 - ES6
/*
* 이터러블 : 요소들을 순회하며 쉽게 탐색할 수 있는 자료구조
* */

console.log("iteratorA ver1. True값을 반환한 후 배열 출력한다.")
const iteratorA = ["사과", "딸기", "포도", "배"]
console.log(Symbol.iterator in iteratorA);
for(const iteratorB of iteratorA) console.log(iteratorB)

console.log("iteratorA ver2. 배열만 출력한다.")
for(let i = 0; i < iteratorA.length; i++) console.log(iteratorA[i])


console.log("--------------------")
let mp = new Map()
mp.set("사과", "딸기");
mp.set("포도", "배");
console.log(mp.get("사과"));
for(const a of mp) console.log(a)
console.log(Symbol.iterator in mp)

// 2.8.2 이터레이터
/*
이터러블한 것들은 이터레이터를 반환 가능한데, 이를 순회할 떄 쓰는 포인터로 이터러블 값 뽑아낼 때
console.log(사용된다);it의 next()메서드를 통해 순회해 객체 반환*/

console.log("2.8.2 iterator")
const iteA = ["사과", "딸기", "포도", "배"]
const it = iteA[Symbol.iterator]()
console.log(it.next())
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());     // value : undefined

// 2.8.3 제너레이터
console.log("2.8.3 generator")
const log = console.log
function * gen() {
    yield 10
    if (false) yield 20     //yield에는 조건문을 써서 값 추출 유무 결정 가능
    yield 30
    return 90               //제네레이터 함수가 return하면 다른 함수처럼 종료됨. but yield하면 value는 undefined, done은 true값 출력
    yield 30
}
let iter = gen()
console.log(iter)
log(iter.next())
log(iter.next())
log(iter.next())
log(iter.next())

const logiter = console.log
function * gen() {
    yield 10
    if (false) yield 20
    yield 30
    return 90
    yield 30
}

console.log([...gen()])         //출력 시  [10, 30]

const llog = console.log
const add = a => a + 10
const aaa = [1, 2, 3]
const ret = aaa.map(add)
log(ret)        // [ 11, 12, 13 ]


export default curry(function * mapL(f, iter) {
    for (const a of toIter(iter)) yield go1(a, f)
})




let mise_list = [
    {
        MSRDT: "201912052100",
        MSRRGN_NM: "도심권",
        MSRSTE_NM: "중구",
        PM10: 22,
        PM25: 14,
        O3: 0.018,
        NO2: 0.015,
        CO: 0.4,
        SO2: 0.002,
        IDEX_NM: "좋음",
        IDEX_MVL: 31,
        ARPLT_MAIN: "O3",
    },
    {
        MSRDT: "201912052100",
        MSRRGN_NM: "도심권",
        MSRSTE_NM: "종로구",
        PM10: 24,
        PM25: 18,
        O3: 0.013,
        NO2: 0.016,
        CO: 0.4,
        SO2: 0.003,
        IDEX_NM: "좋음",
        IDEX_MVL: 39,
        ARPLT_MAIN: "PM25",
    },
    {
        MSRDT: "201912052100",
        MSRRGN_NM: "도심권",
        MSRSTE_NM: "용산구",
        PM10: 0,
        PM25: 15,
        O3: 0.012,
        NO2: 0.027,
        CO: 0.4,
        SO2: 0.003,
        IDEX_NM: "점검중",
        IDEX_MVL: -99,
        ARPLT_MAIN: "점검중",
    },
    {
        MSRDT: "201912052100",
        MSRRGN_NM: "서북권",
        MSRSTE_NM: "은평구",
        PM10: 36,
        PM25: 14,
        O3: 0.019,
        NO2: 0.018,
        CO: 0.5,
        SO2: 0.005,
        IDEX_NM: "좋음",
        IDEX_MVL: 42,
        ARPLT_MAIN: "PM10",
    },
    {
        MSRDT: "201912052100",
        MSRRGN_NM: "서북권",
        MSRSTE_NM: "서대문구",
        PM10: 28,
        PM25: 9,
        O3: 0.018,
        NO2: 0.015,
        CO: 0.6,
        SO2: 0.004,
        IDEX_NM: "좋음",
        IDEX_MVL: 37,
        ARPLT_MAIN: "PM10",
    },
    {
        MSRDT: "201912052100",
        MSRRGN_NM: "서북권",
        MSRSTE_NM: "마포구",
        PM10: 26,
        PM25: 8,
        O3: 0.012,
        NO2: 0.021,
        CO: 0.5,
        SO2: 0.003,
        IDEX_NM: "좋음",
        IDEX_MVL: 36,
        ARPLT_MAIN: "NO2",
    },
    {
        MSRDT: "201912052100",
        MSRRGN_NM: "동북권",
        MSRSTE_NM: "광진구",
        PM10: 17,
        PM25: 9,
        O3: 0.018,
        NO2: 0.016,
        CO: 0.6,
        SO2: 0.001,
        IDEX_NM: "좋음",
        IDEX_MVL: 31,
        ARPLT_MAIN: "O3",
    },
    {
        MSRDT: "201912052100",
        MSRRGN_NM: "동북권",
        MSRSTE_NM: "성동구",
        PM10: 21,
        PM25: 12,
        O3: 0.018,
        NO2: 0.017,
        CO: 0.4,
        SO2: 0.003,
        IDEX_NM: "좋음",
        IDEX_MVL: 33,
        ARPLT_MAIN: "PM25",
    },
    {
        MSRDT: "201912052100",
        MSRRGN_NM: "동북권",
        MSRSTE_NM: "중랑구",
        PM10: 27,
        PM25: 10,
        O3: 0.015,
        NO2: 0.019,
        CO: 0.4,
        SO2: 0.003,
        IDEX_NM: "좋음",
        IDEX_MVL: 34,
        ARPLT_MAIN: "PM10",
    },
    {
        MSRDT: "201912052100",
        MSRRGN_NM: "동북권",
        MSRSTE_NM: "동대문구",
        PM10: 26,
        PM25: 9,
        O3: 0.016,
        NO2: 0.017,
        CO: 0.4,
        SO2: 0.003,
        IDEX_NM: "좋음",
        IDEX_MVL: 34,
        ARPLT_MAIN: "PM10",
    },
    {
        MSRDT: "201912052100",
        MSRRGN_NM: "동북권",
        MSRSTE_NM: "성북구",
        PM10: 27,
        PM25: 8,
        O3: 0.022,
        NO2: 0.014,
        CO: 0.5,
        SO2: 0.003,
        IDEX_NM: "좋음",
        IDEX_MVL: 37,
        ARPLT_MAIN: "PM10",
    },
    {
        MSRDT: "201912052100",
        MSRRGN_NM: "동북권",
        MSRSTE_NM: "도봉구",
        PM10: 25,
        PM25: 12,
        O3: 0.024,
        NO2: 0.011,
        CO: 0.3,
        SO2: 0.002,
        IDEX_NM: "좋음",
        IDEX_MVL: 41,
        ARPLT_MAIN: "O3",
    },
    {
        MSRDT: "201912052100",
        MSRRGN_NM: "동북권",
        MSRSTE_NM: "강북구",
        PM10: 30,
        PM25: 15,
        O3: 0.022,
        NO2: 0.02,
        CO: 0.4,
        SO2: 0.002,
        IDEX_NM: "좋음",
        IDEX_MVL: 39,
        ARPLT_MAIN: "PM10",
    },
    {
        MSRDT: "201912052100",
        MSRRGN_NM: "동북권",
        MSRSTE_NM: "노원구",
        PM10: 21,
        PM25: 14,
        O3: 0.017,
        NO2: 0.016,
        CO: 0.4,
        SO2: 0.004,
        IDEX_NM: "좋음",
        IDEX_MVL: 36,
        ARPLT_MAIN: "PM25",
    },
    {
        MSRDT: "201912052100",
        MSRRGN_NM: "서남권",
        MSRSTE_NM: "강서구",
        PM10: 36,
        PM25: 16,
        O3: 0.021,
        NO2: 0.013,
        CO: 0.4,
        SO2: 0.004,
        IDEX_NM: "좋음",
        IDEX_MVL: 42,
        ARPLT_MAIN: "PM10",
    },
    {
        MSRDT: "201912052100",
        MSRRGN_NM: "서남권",
        MSRSTE_NM: "구로구",
        PM10: 23,
        PM25: 10,
        O3: 0.022,
        NO2: 0.016,
        CO: 0.3,
        SO2: 0.003,
        IDEX_NM: "좋음",
        IDEX_MVL: 37,
        ARPLT_MAIN: "O3",
    },
    {
        MSRDT: "201912052100",
        MSRRGN_NM: "서남권",
        MSRSTE_NM: "영등포구",
        PM10: 29,
        PM25: 15,
        O3: 0.01,
        NO2: 0.022,
        CO: 0.4,
        SO2: 0.003,
        IDEX_NM: "좋음",
        IDEX_MVL: 41,
        ARPLT_MAIN: "PM10",
    },
    {
        MSRDT: "201912052100",
        MSRRGN_NM: "서남권",
        MSRSTE_NM: "동작구",
        PM10: 29,
        PM25: 15,
        O3: 0.012,
        NO2: 0.023,
        CO: 0.4,
        SO2: 0.003,
        IDEX_NM: "좋음",
        IDEX_MVL: 41,
        ARPLT_MAIN: "PM10",
    },
    {
        MSRDT: "201912052100",
        MSRRGN_NM: "서남권",
        MSRSTE_NM: "관악구",
        PM10: 27,
        PM25: 12,
        O3: 0.012,
        NO2: 0.022,
        CO: 0.4,
        SO2: 0.003,
        IDEX_NM: "좋음",
        IDEX_MVL: 37,
        ARPLT_MAIN: "NO2",
    },
    {
        MSRDT: "201912052100",
        MSRRGN_NM: "서남권",
        MSRSTE_NM: "금천구",
        PM10: 25,
        PM25: 15,
        O3: 0.015,
        NO2: 0.02,
        CO: 0.4,
        SO2: 0.004,
        IDEX_NM: "좋음",
        IDEX_MVL: 43,
        ARPLT_MAIN: "PM25",
    },
    {
        MSRDT: "201912052100",
        MSRRGN_NM: "서남권",
        MSRSTE_NM: "양천구",
        PM10: 0,
        PM25: 14,
        O3: 0.016,
        NO2: 0.017,
        CO: 0.4,
        SO2: 0.003,
        IDEX_NM: "점검중",
        IDEX_MVL: -99,
        ARPLT_MAIN: "점검중",
    },
    {
        MSRDT: "201912052100",
        MSRRGN_NM: "동남권",
        MSRSTE_NM: "강남구",
        PM10: 31,
        PM25: 16,
        O3: 0.018,
        NO2: 0.018,
        CO: 0.4,
        SO2: 0.003,
        IDEX_NM: "좋음",
        IDEX_MVL: 39,
        ARPLT_MAIN: "PM10",
    },
    {
        MSRDT: "201912052100",
        MSRRGN_NM: "동남권",
        MSRSTE_NM: "서초구",
        PM10: 34,
        PM25: 13,
        O3: 0.024,
        NO2: 0.019,
        CO: 0.3,
        SO2: 0.003,
        IDEX_NM: "좋음",
        IDEX_MVL: 41,
        ARPLT_MAIN: "PM10",
    },
    {
        MSRDT: "201912052100",
        MSRRGN_NM: "동남권",
        MSRSTE_NM: "송파구",
        PM10: 25,
        PM25: 6,
        O3: 0.014,
        NO2: 0.025,
        CO: 0.4,
        SO2: 0.003,
        IDEX_NM: "좋음",
        IDEX_MVL: 42,
        ARPLT_MAIN: "NO2",
    },
    {
        MSRDT: "201912052100",
        MSRRGN_NM: "동남권",
        MSRSTE_NM: "강동구",
        PM10: 24,
        PM25: 14,
        O3: 0.016,
        NO2: 0.02,
        CO: 0.4,
        SO2: 0.002,
        IDEX_NM: "좋음",
        IDEX_MVL: 39,
        ARPLT_MAIN: "PM25",
    },
];


for(let i = 0; i < mise_list.length; i++) {
    let gu_name = mise_list[i]["MSRSTE_NM"]
    let gu_mise  = mise_list[i]["IDEX_MVL"]

    if(gu_mise < 40) {
        console.log(gu_mise, gu_name)
    }
}

let bikes = [
    {
        rackTotCnt: "7",
        stationName: "101. (구)합정동 주민센터",
        parkingBikeTotCnt: "4",
        shared: "14",
        stationLatitude: "37.54956055",
        stationLongitude: "126.90575409",
        stationId: "ST-3",
    },
    {
        rackTotCnt: "22",
        stationName: "102. 망원역 1번출구 앞",
        parkingBikeTotCnt: "17",
        shared: "5",
        stationLatitude: "37.55564880",
        stationLongitude: "126.91062927",
        stationId: "ST-4",
    },
    {
        rackTotCnt: "16",
        stationName: "103. 망원역 2번출구 앞",
        parkingBikeTotCnt: "11",
        shared: "13",
        stationLatitude: "37.55495071",
        stationLongitude: "126.91083527",
        stationId: "ST-5",
    },
    {
        rackTotCnt: "15",
        stationName: "104. 합정역 1번출구 앞",
        parkingBikeTotCnt: "11",
        shared: "0",
        stationLatitude: "37.55062866",
        stationLongitude: "126.91498566",
        stationId: "ST-6",
    },
    {
        rackTotCnt: "7",
        stationName: "105. 합정역 5번출구 앞",
        parkingBikeTotCnt: "1",
        shared: "0",
        stationLatitude: "37.55000687",
        stationLongitude: "126.91482544",
        stationId: "ST-7",
    },
    {
        rackTotCnt: "12",
        stationName: "106. 합정역 7번출구 앞",
        parkingBikeTotCnt: "8",
        shared: "8",
        stationLatitude: "37.54864502",
        stationLongitude: "126.91282654",
        stationId: "ST-8",
    },
    {
        rackTotCnt: "7",
        stationName: "107. 신한은행 서교동금융센터점 앞",
        parkingBikeTotCnt: "5",
        shared: "14",
        stationLatitude: "37.55751038",
        stationLongitude: "126.91850281",
        stationId: "ST-9",
    },
    {
        rackTotCnt: "12",
        stationName: "108. 서교동 사거리",
        parkingBikeTotCnt: "9",
        shared: "8",
        stationLatitude: "37.55274582",
        stationLongitude: "126.91861725",
        stationId: "ST-10",
    },
    {
        rackTotCnt: "12",
        stationName: "109. 제일빌딩 앞",
        parkingBikeTotCnt: "8",
        shared: "33",
        stationLatitude: "37.54769135",
        stationLongitude: "126.91998291",
        stationId: "ST-11",
    },
    {
        rackTotCnt: "22",
        stationName: "110. 사천교",
        parkingBikeTotCnt: "16",
        shared: "5",
        stationLatitude: "37.56819916",
        stationLongitude: "126.91784668",
        stationId: "ST-13",
    },
    {
        rackTotCnt: "12",
        stationName: "111. 상수역 2번출구 앞",
        parkingBikeTotCnt: "9",
        shared: "25",
        stationLatitude: "37.54787064",
        stationLongitude: "126.92353058",
        stationId: "ST-15",
    },
    {
        rackTotCnt: "12",
        stationName: "112. 극동방송국 앞",
        parkingBikeTotCnt: "8",
        shared: "25",
        stationLatitude: "37.54920197",
        stationLongitude: "126.92320251",
        stationId: "ST-16",
    },
    {
        rackTotCnt: "27",
        stationName: "113. 홍대입구역 2번출구 앞",
        parkingBikeTotCnt: "24",
        shared: "22",
        stationLatitude: "37.55749893",
        stationLongitude: "126.92380524",
        stationId: "ST-18",
    },
    {
        rackTotCnt: "17",
        stationName: "114. 홍대입구역 8번출구 앞",
        parkingBikeTotCnt: "14",
        shared: "129",
        stationLatitude: "37.55706024",
        stationLongitude: "126.92442322",
        stationId: "ST-20",
    },
    {
        rackTotCnt: "17",
        stationName: "115. 사루비아 빌딩 앞",
        parkingBikeTotCnt: "1",
        shared: "0",
        stationLatitude: "37.55893326",
        stationLongitude: "126.92711639",
        stationId: "ST-12",
    },
    {
        rackTotCnt: "7",
        stationName: "116. 일진아이윌아파트 옆",
        parkingBikeTotCnt: "1",
        shared: "0",
        stationLatitude: "37.56454086",
        stationLongitude: "126.92707062",
        stationId: "ST-14",
    },
    {
        rackTotCnt: "27",
        stationName: "117. 홍은사거리",
        parkingBikeTotCnt: "9",
        shared: "0",
        stationLatitude: "37.59115982",
        stationLongitude: "126.94132996",
        stationId: "ST-17",
    },
    {
        rackTotCnt: "12",
        stationName: "118. 광흥창역 2번출구 앞",
        parkingBikeTotCnt: "9",
        shared: "67",
        stationLatitude: "37.54773331",
        stationLongitude: "126.93176270",
        stationId: "ST-19",
    },
    {
        rackTotCnt: "12",
        stationName: "119. 서강나루 공원",
        parkingBikeTotCnt: "9",
        shared: "17",
        stationLatitude: "37.54528427",
        stationLongitude: "126.93105316",
        stationId: "ST-21",
    },
    {
        rackTotCnt: "7",
        stationName: "120. 신수동 사거리",
        parkingBikeTotCnt: "3",
        shared: "0",
        stationLatitude: "37.54524231",
        stationLongitude: "126.93411255",
        stationId: "ST-22",
    },
    {
        rackTotCnt: "17",
        stationName: "121. 마포소방서 앞",
        parkingBikeTotCnt: "11",
        shared: "24",
        stationLatitude: "37.54976654",
        stationLongitude: "126.93317413",
        stationId: "ST-23",
    },
    {
        rackTotCnt: "12",
        stationName: "122. 신성기사식당 앞",
        parkingBikeTotCnt: "6",
        shared: "0",
        stationLatitude: "37.54745865",
        stationLongitude: "126.93837738",
        stationId: "ST-24",
    },
    {
        rackTotCnt: "22",
        stationName: "123. 문화촌 공원",
        parkingBikeTotCnt: "7",
        shared: "0",
        stationLatitude: "37.59432983",
        stationLongitude: "126.94738770",
        stationId: "ST-25",
    },
    {
        rackTotCnt: "22",
        stationName: "124. 서강대 정문 건너편",
        parkingBikeTotCnt: "7",
        shared: "0",
        stationLatitude: "37.55113983",
        stationLongitude: "126.93698883",
        stationId: "ST-26",
    },
    {
        rackTotCnt: "17",
        stationName: "125. 서강대 남문 옆",
        parkingBikeTotCnt: "13",
        shared: "0",
        stationLatitude: "37.54948425",
        stationLongitude: "126.93894958",
        stationId: "ST-27",
    },
    {
        rackTotCnt: "22",
        stationName: "126. 서강대 후문 옆",
        parkingBikeTotCnt: "17",
        shared: "5",
        stationLatitude: "37.55041122",
        stationLongitude: "126.94384766",
        stationId: "ST-28",
    },
    {
        rackTotCnt: "22",
        stationName: "128. 신촌역(2호선) 1번출구 옆",
        parkingBikeTotCnt: "14",
        shared: "5",
        stationLatitude: "37.55549622",
        stationLongitude: "126.93634033",
        stationId: "ST-30",
    },
    {
        rackTotCnt: "17",
        stationName: "129. 신촌역(2호선) 6번출구 옆",
        parkingBikeTotCnt: "8",
        shared: "0",
        stationLatitude: "37.55505371",
        stationLongitude: "126.93756866",
        stationId: "ST-31",
    },
    {
        rackTotCnt: "12",
        stationName: "130. 신촌역(2호선) 7번출구 앞",
        parkingBikeTotCnt: "8",
        shared: "17",
        stationLatitude: "37.55485916",
        stationLongitude: "126.93615723",
        stationId: "ST-32",
    },
    {
        rackTotCnt: "25",
        stationName: "131. 증산2교",
        parkingBikeTotCnt: "17",
        shared: "4",
        stationLatitude: "37.58417130",
        stationLongitude: "126.91110229",
        stationId: "ST-33",
    },
    {
        rackTotCnt: "17",
        stationName: "133. 해담는다리",
        parkingBikeTotCnt: "11",
        shared: "12",
        stationLatitude: "37.58203125",
        stationLongitude: "126.90899658",
        stationId: "ST-35",
    },
    {
        rackTotCnt: "10",
        stationName: "134. 연세로 명물길",
        parkingBikeTotCnt: "6",
        shared: "20",
        stationLatitude: "37.55789185",
        stationLongitude: "126.93807983",
        stationId: "ST-36",
    },
    {
        rackTotCnt: "12",
        stationName: "135. 명물길 원형무대 앞",
        parkingBikeTotCnt: "10",
        shared: "0",
        stationLatitude: "37.55910110",
        stationLongitude: "126.93917847",
        stationId: "ST-37",
    },
    {
        rackTotCnt: "9",
        stationName: "136. 대흥동 주민센터",
        parkingBikeTotCnt: "1",
        shared: "11",
        stationLatitude: "37.55600357",
        stationLongitude: "126.94229889",
        stationId: "ST-38",
    },
    {
        rackTotCnt: "12",
        stationName: "137. NH농협 신촌지점 앞",
        parkingBikeTotCnt: "4",
        shared: "0",
        stationLatitude: "37.55681229",
        stationLongitude: "126.94318390",
        stationId: "ST-39",
    },
    {
        rackTotCnt: "12",
        stationName: "138. 신촌동 제1공영주차장 앞",
        parkingBikeTotCnt: "7",
        shared: "25",
        stationLatitude: "37.55917740",
        stationLongitude: "126.93452454",
        stationId: "ST-40",
    },
    {
        rackTotCnt: "15",
        stationName: "139. 연세대 정문 건너편",
        parkingBikeTotCnt: "13",
        shared: "7",
        stationLatitude: "37.55979538",
        stationLongitude: "126.93447876",
        stationId: "ST-43",
    },
    {
        rackTotCnt: "22",
        stationName: "140. 이화여대 후문",
        parkingBikeTotCnt: "6",
        shared: "0",
        stationLatitude: "37.56000900",
        stationLongitude: "126.94073486",
        stationId: "ST-41",
    },
    {
        rackTotCnt: "22",
        stationName: "141. 연대 대운동장 옆",
        parkingBikeTotCnt: "13",
        shared: "5",
        stationLatitude: "37.56238174",
        stationLongitude: "126.93264771",
        stationId: "ST-42",
    },
    {
        rackTotCnt: "13",
        stationName: "142. 아현역 4번출구 앞",
        parkingBikeTotCnt: "1",
        shared: "0",
        stationLatitude: "37.55720139",
        stationLongitude: "126.95566559",
        stationId: "ST-200",
    },
    {
        rackTotCnt: "11",
        stationName: "143. 공덕역 2번출구",
        parkingBikeTotCnt: "7",
        shared: "0",
        stationLatitude: "37.54457855",
        stationLongitude: "126.95021820",
        stationId: "ST-201",
    },
    {
        rackTotCnt: "12",
        stationName: "144. 공덕역 8번출구",
        parkingBikeTotCnt: "6",
        shared: "0",
        stationLatitude: "37.54357910",
        stationLongitude: "126.95132446",
        stationId: "ST-202",
    },
    {
        rackTotCnt: "11",
        stationName: "145. 공덕역 5번출구",
        parkingBikeTotCnt: "8",
        shared: "36",
        stationLatitude: "37.54425049",
        stationLongitude: "126.95163727",
        stationId: "ST-203",
    },
    {
        rackTotCnt: "14",
        stationName: "146. 마포역 2번출구 뒤",
        parkingBikeTotCnt: "6",
        shared: "0",
        stationLatitude: "37.53993607",
        stationLongitude: "126.94582367",
        stationId: "ST-204",
    },
    {
        rackTotCnt: "9",
        stationName: "147. 마포역 4번출구 뒤",
        parkingBikeTotCnt: "4",
        shared: "0",
        stationLatitude: "37.53927231",
        stationLongitude: "126.94591522",
        stationId: "ST-205",
    },
    {
        rackTotCnt: "17",
        stationName: "150. 서강대역 2번출구 앞",
        parkingBikeTotCnt: "13",
        shared: "65",
        stationLatitude: "37.55295563",
        stationLongitude: "126.93434143",
        stationId: "ST-207",
    },
    {
        rackTotCnt: "12",
        stationName: "151. 망원1동주민센터",
        parkingBikeTotCnt: "11",
        shared: "58",
        stationLatitude: "37.55568695",
        stationLongitude: "126.90554810",
        stationId: "ST-208",
    },
    {
        rackTotCnt: "32",
        stationName: "152. 마포구민체육센터 앞",
        parkingBikeTotCnt: "8",
        shared: "31",
        stationLatitude: "37.55661011",
        stationLongitude: "126.89801788",
        stationId: "ST-209",
    },
    {
        rackTotCnt: "12",
        stationName: "153. 성산2교 사거리",
        parkingBikeTotCnt: "7",
        shared: "17",
        stationLatitude: "37.56469727",
        stationLongitude: "126.91261292",
        stationId: "ST-210",
    },
    {
        rackTotCnt: "15",
        stationName: "154. 마포구청역 ",
        parkingBikeTotCnt: "9",
        shared: "0",
        stationLatitude: "37.56090927",
        stationLongitude: "126.90549469",
        stationId: "ST-211",
    },
    {
        rackTotCnt: "17",
        stationName: "155. 가좌역1 번출구 뒤",
        parkingBikeTotCnt: "14",
        shared: "0",
        stationLatitude: "37.56855011",
        stationLongitude: "126.91451263",
        stationId: "ST-212",
    },
    {
        rackTotCnt: "12",
        stationName: "156. 서울서부지방법원 앞",
        parkingBikeTotCnt: "9",
        shared: "0",
        stationLatitude: "37.54990387",
        stationLongitude: "126.95514679",
        stationId: "ST-213",
    },
    {
        rackTotCnt: "14",
        stationName: "157. 애오개역 4번출구 앞",
        parkingBikeTotCnt: "1",
        shared: "0",
        stationLatitude: "37.55300140",
        stationLongitude: "126.95668793",
        stationId: "ST-214",
    },
    {
        rackTotCnt: "17",
        stationName: "158. 독립문 어린이 공원",
        parkingBikeTotCnt: "1",
        shared: "0",
        stationLatitude: "37.57125854",
        stationLongitude: "126.96047974",
        stationId: "ST-215",
    },
    {
        rackTotCnt: "9",
        stationName: "159. 이대역 4번 출구",
        parkingBikeTotCnt: "1",
        shared: "0",
        stationLatitude: "37.55695343",
        stationLongitude: "126.94634247",
        stationId: "ST-216",
    },
    {
        rackTotCnt: "22",
        stationName: "160. 북아현동 가구거리",
        parkingBikeTotCnt: "15",
        shared: "0",
        stationLatitude: "37.55754852",
        stationLongitude: "126.95938110",
        stationId: "ST-217",
    },
    {
        rackTotCnt: "10",
        stationName: "161. 무악재역1번 출구",
        parkingBikeTotCnt: "0",
        shared: "0",
        stationLatitude: "37.58224487",
        stationLongitude: "126.95064545",
        stationId: "ST-218",
    },
    {
        rackTotCnt: "17",
        stationName: "162. 봉원고가차도 밑",
        parkingBikeTotCnt: "8",
        shared: "0",
        stationLatitude: "37.56526947",
        stationLongitude: "126.94624329",
        stationId: "ST-219",
    },
    {
        rackTotCnt: "9",
        stationName: "163. 명지전문대학교 정문 앞",
        parkingBikeTotCnt: "0",
        shared: "0",
        stationLatitude: "37.58369827",
        stationLongitude: "126.92496490",
        stationId: "ST-220",
    },
    {
        rackTotCnt: "12",
        stationName: "164. 북가좌1동 주민센터 ",
        parkingBikeTotCnt: "7",
        shared: "25",
        stationLatitude: "37.57447815",
        stationLongitude: "126.91004944",
        stationId: "ST-221",
    },
    {
        rackTotCnt: "22",
        stationName: "165. 중앙근린공원",
        parkingBikeTotCnt: "9",
        shared: "0",
        stationLatitude: "37.57513809",
        stationLongitude: "126.91394043",
        stationId: "ST-222",
    },
    {
        rackTotCnt: "22",
        stationName: "166. 가재울 초등학교",
        parkingBikeTotCnt: "6",
        shared: "0",
        stationLatitude: "37.57327652",
        stationLongitude: "126.91967773",
        stationId: "ST-223",
    },
    {
        rackTotCnt: "17",
        stationName: "167. 연가초등학교 옆",
        parkingBikeTotCnt: "12",
        shared: "0",
        stationLatitude: "37.57946014",
        stationLongitude: "126.91712952",
        stationId: "ST-224",
    },
    {
        rackTotCnt: "17",
        stationName: "169. 북가좌 삼거리",
        parkingBikeTotCnt: "6",
        shared: "0",
        stationLatitude: "37.57300186",
        stationLongitude: "126.90779877",
        stationId: "ST-226",
    },
    {
        rackTotCnt: "12",
        stationName: "170. 가재울 뉴타운 주유소 옆",
        parkingBikeTotCnt: "9",
        shared: "33",
        stationLatitude: "37.57311249",
        stationLongitude: "126.92244720",
        stationId: "ST-227",
    },
    {
        rackTotCnt: "12",
        stationName: "171. 임광빌딩 앞",
        parkingBikeTotCnt: "9",
        shared: "8",
        stationLatitude: "37.56472397",
        stationLongitude: "126.96727753",
        stationId: "ST-228",
    },
    {
        rackTotCnt: "10",
        stationName: "173. 서대문역 8번출구 앞",
        parkingBikeTotCnt: "4",
        shared: "0",
        stationLatitude: "37.56477737",
        stationLongitude: "126.96614838",
        stationId: "ST-230",
    },
    {
        rackTotCnt: "22",
        stationName: "175. 홍연2교옆",
        parkingBikeTotCnt: "6",
        shared: "0",
        stationLatitude: "37.57807159",
        stationLongitude: "126.93081665",
        stationId: "ST-231",
    },
    {
        rackTotCnt: "12",
        stationName: "176. 명지대학교 도서관",
        parkingBikeTotCnt: "0",
        shared: "0",
        stationLatitude: "37.58109665",
        stationLongitude: "126.92402649",
        stationId: "ST-555",
    },
    {
        rackTotCnt: "10",
        stationName: "177. 북가좌 초등학교",
        parkingBikeTotCnt: "1",
        shared: "0",
        stationLatitude: "37.57767487",
        stationLongitude: "126.90980530",
        stationId: "ST-345",
    },
    {
        rackTotCnt: "12",
        stationName: "178. 증산3교 앞",
        parkingBikeTotCnt: "0",
        shared: "0",
        stationLatitude: "37.57987595",
        stationLongitude: "126.90634918",
        stationId: "ST-349",
    },
    {
        rackTotCnt: "17",
        stationName: "179. 가좌역 4번출구 앞",
        parkingBikeTotCnt: "14",
        shared: "47",
        stationLatitude: "37.56912231",
        stationLongitude: "126.91479492",
        stationId: "ST-232",
    },
    {
        rackTotCnt: "12",
        stationName: "180. 충정로역 7번출구 아래",
        parkingBikeTotCnt: "10",
        shared: "8",
        stationLatitude: "37.55996704",
        stationLongitude: "126.96246338",
        stationId: "ST-233",
    },
    {
        rackTotCnt: "17",
        stationName: "181. 망원초록길 입구",
        parkingBikeTotCnt: "9",
        shared: "0",
        stationLatitude: "37.55134201",
        stationLongitude: "126.90267181",
        stationId: "ST-339",
    },
    {
        rackTotCnt: "12",
        stationName: "182. 망원2빗물펌프장 앞",
        parkingBikeTotCnt: "7",
        shared: "0",
        stationLatitude: "37.55156708",
        stationLongitude: "126.90284729",
        stationId: "ST-340",
    },
    {
        rackTotCnt: "17",
        stationName: "183. 하늘채코오롱아파트 건너편",
        parkingBikeTotCnt: "10",
        shared: "0",
        stationLatitude: "37.56516647",
        stationLongitude: "126.91939545",
        stationId: "ST-341",
    },
    {
        rackTotCnt: "11",
        stationName: "184. SK망원동주유소 건너편",
        parkingBikeTotCnt: "4",
        shared: "0",
        stationLatitude: "37.55894852",
        stationLongitude: "126.90775299",
        stationId: "ST-342",
    },
    {
        rackTotCnt: "17",
        stationName: "185. 마포 신수공원 앞",
        parkingBikeTotCnt: "5",
        shared: "0",
        stationLatitude: "37.54254532",
        stationLongitude: "126.93429565",
        stationId: "ST-343",
    },
    {
        rackTotCnt: "42",
        stationName: "186. 월드컵공원",
        parkingBikeTotCnt: "22",
        shared: "10",
        stationLatitude: "37.56396484",
        stationLongitude: "126.89820862",
        stationId: "ST-344",
    },
    {
        rackTotCnt: "12",
        stationName: "188. 홍은동 정원여중 입구",
        parkingBikeTotCnt: "2",
        shared: "0",
        stationLatitude: "37.58638763",
        stationLongitude: "126.93512726",
        stationId: "ST-346",
    },
    {
        rackTotCnt: "12",
        stationName: "191. 서우빌딩(바른학원)",
        parkingBikeTotCnt: "6",
        shared: "0",
        stationLatitude: "37.57889175",
        stationLongitude: "126.91073608",
        stationId: "ST-347",
    },
    {
        rackTotCnt: "12",
        stationName: "192. 연서어린이공원",
        parkingBikeTotCnt: "0",
        shared: "0",
        stationLatitude: "37.57222748",
        stationLongitude: "126.92306519",
        stationId: "ST-348",
    },
    {
        rackTotCnt: "12",
        stationName: "194. 증산교 앞",
        parkingBikeTotCnt: "2",
        shared: "0",
        stationLatitude: "37.57731628",
        stationLongitude: "126.90296936",
        stationId: "ST-350",
    },
    {
        rackTotCnt: "12",
        stationName: "195. 모래내고가차도 ",
        parkingBikeTotCnt: "6",
        shared: "42",
        stationLatitude: "37.56765747",
        stationLongitude: "126.91780853",
        stationId: "ST-351",
    },
    {
        rackTotCnt: "12",
        stationName: "196. 연희교차로 인근",
        parkingBikeTotCnt: "1",
        shared: "0",
        stationLatitude: "37.56612015",
        stationLongitude: "126.92589569",
        stationId: "ST-352",
    },
    {
        rackTotCnt: "17",
        stationName: "198. 충정2교",
        parkingBikeTotCnt: "15",
        shared: "0",
        stationLatitude: "37.56213760",
        stationLongitude: "126.96377563",
        stationId: "ST-354",
    },
    {
        rackTotCnt: "32",
        stationName: "199. 서울 월드컵 경기장",
        parkingBikeTotCnt: "7",
        shared: "0",
        stationLatitude: "37.56684494",
        stationLongitude: "126.89644623",
        stationId: "ST-443",
    },
    {
        rackTotCnt: "22",
        stationName: "200. 국회의원회관",
        parkingBikeTotCnt: "8",
        shared: "0",
        stationLatitude: "37.52841568",
        stationLongitude: "126.91391754",
        stationId: "ST-45",
    },
    {
        rackTotCnt: "17",
        stationName: "201. 진미파라곤 앞",
        parkingBikeTotCnt: "9",
        shared: "6",
        stationLatitude: "37.53123856",
        stationLongitude: "126.92133331",
        stationId: "ST-46",
    },
    {
        rackTotCnt: "32",
        stationName: "202. 국민일보 앞",
        parkingBikeTotCnt: "21",
        shared: "19",
        stationLatitude: "37.52881622",
        stationLongitude: "126.92453003",
        stationId: "ST-47",
    },
    {
        rackTotCnt: "17",
        stationName: "203. 국회의사당역 3번출구 옆",
        parkingBikeTotCnt: "14",
        shared: "76",
        stationLatitude: "37.52805710",
        stationLongitude: "126.91870117",
        stationId: "ST-51",
    },
    {
        rackTotCnt: "15",
        stationName: "204. 국회의사당역 5번출구 옆",
        parkingBikeTotCnt: "10",
        shared: "53",
        stationLatitude: "37.52816391",
        stationLongitude: "126.91702271",
        stationId: "ST-50",
    },
    {
        rackTotCnt: "22",
        stationName: "205. 산업은행 앞",
        parkingBikeTotCnt: "13",
        shared: "0",
        stationLatitude: "37.52626419",
        stationLongitude: "126.92050934",
        stationId: "ST-52",
    },
    {
        rackTotCnt: "37",
        stationName: "206. KBS 앞",
        parkingBikeTotCnt: "24",
        shared: "11",
        stationLatitude: "37.52466583",
        stationLongitude: "126.91802216",
        stationId: "ST-53",
    },
    {
        rackTotCnt: "42",
        stationName: "207. 여의나루역 1번출구 앞",
        parkingBikeTotCnt: "16",
        shared: "0",
        stationLatitude: "37.52698898",
        stationLongitude: "126.93209839",
        stationId: "ST-73",
    },
    {
        rackTotCnt: "14",
        stationName: "209. 유진투자증권빌딩 앞",
        parkingBikeTotCnt: "12",
        shared: "14",
        stationLatitude: "37.52461243",
        stationLongitude: "126.92783356",
        stationId: "ST-55",
    },
    {
        rackTotCnt: "23",
        stationName: "210. IFC몰",
        parkingBikeTotCnt: "16",
        shared: "13",
        stationLatitude: "37.52606583",
        stationLongitude: "126.92553711",
        stationId: "ST-56",
    },
    {
        rackTotCnt: "15",
        stationName: "211. 여의도역 4번출구 옆",
        parkingBikeTotCnt: "2",
        shared: "0",
        stationLatitude: "37.52222824",
        stationLongitude: "126.92463684",
        stationId: "ST-57",
    },
    {
        rackTotCnt: "37",
        stationName: "212. 여의도역 1번출구 옆",
        parkingBikeTotCnt: "9",
        shared: "0",
        stationLatitude: "37.52136230",
        stationLongitude: "126.92346191",
        stationId: "ST-58",
    },
];

for (let i = 0; i < bikes.length; i++) {
    let bikeCnt = bikes[i]['parkingBikeTotCnt']
    let stName = bikes[i]['stationName']
    if(bikeCnt <= 5) {
        console.log(stName + "에 남은 자전거의 개수 : " + bikeCnt)
    }
}