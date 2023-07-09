# THAM TRỊ VÀ THAM CHIẾU

## I, KIỂU THAM TRỊ (PRIMITIVE TYPES)
    1. Number
    2. String
    3. Boolean
    4. Null, undefined 
    5. BigInt
    6. Symbol

--> Tham trị sẽ lưu thẳng giá trị được gán vào vùng nhớ

## II, THAM CHIẾU (REFERENCE TYPES)
    1. Object
    2. Array
    3. Function

<span style="color: red ">**Một biến object không lưu trữ giá trị, nó lưu trữ địa chỉ bộ nhớ --> nó tham chiếu đến bộ nhớ (địa chỉ ô nhớ)** </span>

```js
    let user = {
        name: 'John'
    }
```
--> Object thì được lưu trữ trong bộ nhớ còn biến `user` thì tham chiếu đến địa chỉ của bộ nhớ đó.
(Lưu ý biến `user` không chứa toàn bộ object)

<span style="color: red ">**Khi chúng ta copy 1 biến object, tham chiếu của nó sẽ bị copy, object không bị nhân đôi lên**</span>

``` js
    let user = {name: 'John'}
    let admin = user // cùng tham chiếu đến địa chỉ ô nhớ name
    admin.name = 'Pete' // thay đổi thuộc tính
    console.log(user) // Pete
```
![](Screenshot%202023-05-16%20110316.png)

## III, SO SÁNH BẰNG THAM CHIẾU
a và b cùng tham chiếu đến 1 object thì chúng bằng nhau
```js
    let a = {}
    let b = a
    console.log(a == b) // true
```
a và b là 2 object độc lập, không bằng nhau
```js
    let a = {}
    let b = {}
    console.log(a == b) // false
```
## IV, CLONE VÀ MERGE
**Trong nhiều trường hợp chúng ta cần nhân đôi 1 object để chỉnh sửa biến này mà không ảnh hưởng tới biến kia người ta gọi là: <span style="color: red">CLONE</span>**

<span style="color: brown">**CLONE SHALLOW COPY SỬ DỤNG SPREAD SYNTAX**</span>
```js
    let user = {
        name: 'John',
        age: 23
    }
    let admin = {...user}
    admin.name = 'Pete'

    console.log(user) // giữ nguyên
    console.log(admin) // name được thay đổi thành Pete
```

Hoặc

```js
    let user = {
        name: 'John',
        age: 23
    }

    let admin = {}

    for(let key in user){
        admin[key] = user[key]
    }
    console.log(admin) // copy object có hiệu quả tương tự
```

<span style="color:  brown">**CLONE DEEP (COPY OBJECT TRONG OBJECT)**</span>

```js
let user = {
  name: "David",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes ); // true, same object
clone.sizes.width++; // Thay đổi thuộc tính width
alert(user.sizes.width); // Tăng lên 51
```


