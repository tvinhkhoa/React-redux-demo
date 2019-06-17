# Demo React-Redux
Use Babel 7

## React
### Setup for Sublime-text
add Babel from Package Controller (Sublime-text)
add Babel-Snippets from Package Controller (Sublime-text)

https://github.com/babel/babel-sublime

### Start
For webpack-dev server

webpack-dev-server --host 0.0.0.0 --port 80

## Redux

npm install redux --save
npm install react-redux --save

### Use
- State Operator ...
npm install babel-preset-stage-0 --save-dev

- Pure function
var add =  (a, b) => a + b;

- Not sign effect
- Not contain async task
- 1 input => 1 out put

### State
- Status of Object (same in React)
- Private object

### Action:
They are activity, but not execute

### Reducer:
- Is then function then return state of Object
- Input (old-state, action)
- Output new-state

### Store
Create by Reducer & State init



```js
Reference source from
https://www.valentinog.com/blog/babel/
https://hackernoon.com/a-tale-of-webpack-4-and-how-to-finally-configure-it-in-the-right-way-4e94c8e7e5c1
```