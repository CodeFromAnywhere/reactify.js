# Reactify.js

Reactify.js simplfies raw HTML + JS development by adding the ability to use react-like states

Your only requirement is you have a `Root` function in your html page when using this, returning a innerHTML string. Now you can use `useState` and `useStore`!

Example: see [demo](public/demo/index.html) ([Result](https://reactify-js.vercel.app/demo))

As long as you always have a <div id="root"></div> and call `render()` at the end, and you have a function `Root()` you can use it!

Recommended VSCode plugin: `leet-html` Name: [leet-html](https://marketplace.visualstudio.com/items?itemName=EldarGerfanov.leet-html)
