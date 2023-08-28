exports.sayLove = name => `${name} Love`
exports.sayHi = name => {
    console.log(this.sayLove("MEVN"))
    return `${name}아 안녕`
}
exports.value = 1
//exports안에서 this로 접근 가능. sayHi의 경우가 sayLove를 하고 문자열 반환한다. value처럼 1 exports도 가능

const s = 1
export default s