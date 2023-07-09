// const a = undefined

// const b = ''

// const c = 'hi'

// const d = a || b || c

// console.log(d); // Trả về 'hi' vì c mang giá trị true
let fname = 'Thuong'
fname === 'Thuong' ? console.log(true) : console.log(false)

let user = {}
const c = user?.address?.street
console.log(c);

let admin = null
console.log(admin ?? 'anonymus')

let str = 'Thuong'
let str1 = 'is'
let str2 = 'Student'
const sum = (a,b) => {return a + b}
let connect = `${str} ${sum(1,3)} ${str2}`
console.log(connect)