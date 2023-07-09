// // Destructuring với object
// const St = {
//     name: 'Thuong',
//     age: 21,
//     id: '520H0581'
// }
// const {name: MyName, age, id, address, phone} = St
// console.log(age, id, MyName, address, phone);

// // Destructuring với array
// const foo = ["a", "b"]
// const [red, green, yellow, black] = foo
// console.log(yellow);

// const handle = function(a, b, ...c){
//     return c
// }
// const value = handle(1, 2, 3, 4, 5, 6, 7)
// console.log(value);

// Destructuring with object
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

console.log(tit);
console.log(newUrl);

// Destructuring with array
const handle = (a,b, ...c) => {
    return c
}
const value = handle(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(value);

// vòng lặp
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