// // Thay đổi thuộc tính trong tham trị
// let user = {name: 'John'}
// let admin = user // cùng tham chiếu đến địa chỉ ô nhớ name
// admin.name = 'Pete' // thay đổi thuộc tính
// console.log(user) // Pete

// // Clone lại object cũ và chỉnh sửa thuộc tính nhưng không ảnh hưởng tới object cũ
// let user = {
//     name: 'John',
//     age: 23
// }

// let admin = {}

// for(let key in user){
//     admin[key] = user[key]
// }
// console.log(admin);

let user = {
    name: "David",
    sizes: {
      height: 182,
      width: 50
    }
  };
  
let clone = Object.assign({}, user);
  
console.log( user.sizes === clone.sizes ); // true, same object
clone.sizes.height--; // Thay đổi thuộc tính width
console.log(user.sizes.height); // Giảm còn 181

