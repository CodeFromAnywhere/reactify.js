# Reactify.js

Reactify.js simplfies raw HTML + JS development by adding the ability to use react-like states.

Examples:

- Counter [code](public/demo/counter.html) [result](https://reactify-js.vercel.app/demo/counter.html)
- TODO List [code](public/demo/todo.html) [result](https://reactify-js.vercel.app/demo/todo.html)

Instructions:

- Works using raw HTML, CSS, and JS
- Ensure you load in a function called `Root()` into your HTML
- Use `<div id="root"></div><script>render()</script>` somewhere after that.
- Unlike React, you don't need any build-tools or runtime.
- Furthermore, all your states are available everywhere as they're defined at the root level, so choose your naming wisely!
- For more details: See [source code](public/index.js) (it's simple!)
- Recommended VSCode plugin: [leet-html](https://marketplace.visualstudio.com/items?itemName=EldarGerfanov.leet-html)
