# PROMISE
**Sử dụng arrow function để định nghĩa hàm anonymus function truyền vào đối tượng promise và trả về nó**
```JS
// cấu trúc của 1 promise
const test = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        reject() // callback function
    }, 0);
})
const func = 
test().then((value) => {
    return -100
}).catch((err) => {
    return 1000
}).finally(() => {
    console.log('ket thuc'); // luôn chạy
})
func.then((value)=>{
    console.log(value)
})
```

# ASYNC - AWAIT
**- Await chỉ sử dụng được trong async function**

**- Await chỉ sử dụng được khi đã return 1 đối tượng promise**
```js   
const promise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('hello')
    }, 1000);
})

const handle = async() =>{
    try{
        const test = await promise()
        console.log(test);
    }
    catch{
        console.warn('errror');
    }
    finally{
        console.log('ket thuc');
    }
}
handle()
```
OR
```js   
;(async() =>{
    try{
        const test = await promise()
        console.log(test);
    }
    catch{
        console.warn('errror');
    }
    finally{
        console.log('ket thuc');
    }
})()
```