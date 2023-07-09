// setTimeout(() => {
//     console.log('hello');
// }, 1000); // bất đồng bộ luôn chạy sau các câu lệnh chính
// console.log('I am Thuong');

// cấu trúc của 1 promise
// const test = () => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject()
//     }, 0);
// })
// const func = 
// test().then((value) => {
//     return -100
// }).catch((err) => {
//     return 1000
// }).finally(() => {
//     console.log('ket thuc');
// })
// func.then((value)=>{
//     console.log(value)
// })

/**
 * Await chỉ sử dụng được trong asyns function
 * Chỉ sử dụng await với promise
 */
// khởi tạo 1 đối tượng promise
const promise = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('hello')
    }, 1000);
})

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


