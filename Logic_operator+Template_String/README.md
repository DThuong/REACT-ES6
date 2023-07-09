# TOÁN TỬ LOGIC VÀ TEMPLATE STRING

## TOÁN TỬ LOGIC
**Ngoài tất cả các giá trị sau thì tất cả đều đúng**
1. false
2. 0
3. 0n
4. undefined
5. null
6. ' '
7. NaN

## TOÁN TỬ &&
**Trong quá trình kiểm tra, nếu gặp giá trị false hoặc đi đến cuối cùng thì return về giá trị dừng**
```js
const a = true

const b = ''

const c = 'hi'

const d = a && b && c

console.log(d); // trả về chuỗi rỗng vì b là giá trị false
```
## TOÁN TỬ ||
**Trong quá trình kiểm tra, nếu gặp giá trị true hoặc đi đến cuối cùng thì return về giá trị dừng**
```js
const a = undefined

const b = ''

const c = 'hi'

const d = a || b || c

console.log(d); // Trả về 'hi' vì c mang giá trị true
```

## TOÁN TỬ PHỦ ĐỊNH !(...)

## TOÁN TỬ 3 NGÔI
```js       
let fname = 'Thuong'
fname === 'Thuong' ? console.log(true) : console.log(false)
```

## OPTIONAL CHAINING ?.
**Nếu gặp undefined hay null thì nó sẽ dừng kiểm tra và trả về undefined**
```js
let user = {}

const c = user?.address?.street 

console.log(c); // undefined
```


## TOÁN TỬ NULL LIST ??
**Chỉ dùng trong trường hợp cần check một giá trị có phải là undefined hoặc null hay không**
```js 
let admin = 1
let user = null
console.log(admin ?? 'anonymus') // 1
console.log(admin ?? 'anonymus') // anonymus
```
## TEMPLATE STRING
**Sử dụng dấu `` thay vì " "**
```js 
let str = 'Thuong'

let str1 = 'is'

let str2 = 'Student'

const sum = (a,b) => {return a + b}

let connect = `${str} ${sum(1,3)} ${str2}`

console.log(connect) // Thuong 4 student
```