// callback function: là function được truyền vào một function khác dưới dạng tham số 

// foreach lặp qua từng phần tử trong mảng
const nums = [1,2,3,4,5]
const callback = (item, key) =>{
    console.log(`stt ${key} la ${item}`)
}
const item = nums.forEach(callback)

// map() tạo một mảng mới được sửa từ mảng cũ
const binhphuong = (square)=>{
    console.log(square * square) 
}
const bpArray = nums.map(binhphuong)

// Currying là function mà return về function
function findNumber(num){
    return function(func){
        const result = []
        for(let i = 0; i<=num; i++){
            if(func(i)){
                result.push(i)
            }
        }
        return result
    }
}
const test = findNumber(10)(number => number % 2 === 0)
console.log(test);