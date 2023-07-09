# MỘT SỐ HÀM CHUYÊN DÙNG XỬ LÝ MẢNG TRONG JS

## CALLBACK FUNCTION
<span style="color: red">**Callback function là function được truyền vào một function khác dưới dạng tham số**</span>

**`foreach()` không trả về một mảng mới mà chỉ lặp qua từng phần tử của mảng gốc.**
```js
// foreach lặp qua từng phần tử trong mảng
const nums = [1,2,3,4,5]

const callback = (item, key) =>{
    console.log(`stt ${key} la ${item}`)
}

const item = nums.forEach(callback)
```
**Tạo một mảng mới từ mảng gốc, sử dụng `map()`**
```js
// map() tạo một mảng mới được sửa từ mảng cũ
const binhphuong = (square)=>{
    console.log(square * square) 
}

const bpArray = nums.map(binhphuong)

```
## CURRYING FUNCTION
<span style="color: red">**Currying function là function return về function**</span>


```js
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
console.log(test); // output: 2 4 6 8 10
```