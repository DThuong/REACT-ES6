# Destructuring và spread syntax

## PHÉP GÁN VỚI OBJECT
### vd1
```js
    const St = {
        name: 'Thuong',
        age: 21,
        id: '520H0581'
    }
    const {name: MyName, age, id, address, phone} = St
    console.log(age, id, MyName, address, phone); // 21, 520H0581, Thuong, undefined, undefined
```
### vd2 (gán object trong object)
```js
const data = {
    title: "Scratchpad",
    translations: [
      {
        locale: "de",
        localizationTags: [],
        lastEdit: "2014-04-14T08:43:37",
        url: "/de/docs/Tools/Scratchpad",
        title: "JavaScript-Umgebung",
      },
    ],
    url: "/en-US/docs/Tools/Scratchpad",
}

const {
    title: tit,
    translations: [
        {url: newUrl1}
    ],
    url: newUrl
} = data

console.log(tit); // Scratchpad
console.log(newUrl); // /de/docs/Tools/Scratchpad
```
### PHÉP GÁN VỚI OBJECT SỬ DỤNG VÒNG LẶP
```JS
const people = [
    {
      name: "Mike Smith",
      family: {
        mother: "Jane Smith",
        father: "Harry Smith",
        sister: "Samantha Smith",
      },
      age: 35,
    },
    {
      name: "Tom Jones",
      family: {
        mother: "Norah Jones",
        father: "Richard Jones",
        brother: "Howard Jones",
      },
      age: 25,
    },
  ];

for(const {
    name: iteName,
    family: {
        father: f
    }
} of people ){
    console.log(`Name: ${iteName}, Father: ${f}`);
} 
```

## PHÉP GÁN VỚI ARRAY
### vd1
```js

    const handle = (a,b, ...c) => {
        return c
    }
    const value = handle(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
    console.log(value); // a = 1, b = 2, c = 3,4,...10
```
### vd2
```js 
    const foo = ["a", "b"] // khai báo kiểu chuỗi
    const [red, green, yellow, black] = foo // gán giá trị chuỗi cho object 
    console.log(yellow); // undefined: vì object chỉ có 2 chuỗi là red và green
    const handle = function(a, b, ...c){
        return c
    }
    const value = handle(1, 2, 3, 4, 5, 6, 7)
    console.log(value); // 3 4 5 6 7
```


