# Nối các file js lại với nhau
**Lưu ý: trong thẻ script bên html thêm thuộc tính style = module**

Ex: `<script src="app.js" type="module"></script>`

<span style="color: yellow">VD:</span>

react.js
```js
const react = 'react'

const arr = [1, 2, 3, 4, 5]

const handle = () =>{
    console.log('handle');
}
export { handle }
export { arr }
export default react
```
app.js
```js
import react, {arr as mang, handle} from "./react.js";

handle() // handle
console.log(mang) // [1 2 3 4 5]
console.log(react); // react

```