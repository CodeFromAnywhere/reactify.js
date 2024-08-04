# Reactify.js

Reactify.js simplfies raw HTML + JS development by adding the ability to use react-like states.

Examples:

- Counter [code](public/demo/counter.html) [result](https://reactify-js.vercel.app/demo/counter.html)
- Todo Manager [code](public/demo/todo.html) [result](https://reactify-js.vercel.app/demo/todo.html)
- Persistent Media Viewer with IndexedDB [code](public/demo/media-viewer.html) [result](https://reactify-js.vercel.app/demo/media-viewer.html)
- Blog website [code](public/demo/blog/index.html) [result](https://reactify-js.vercel.app/demo/blog)

Instructions:

- Works using raw HTML, CSS, and JS
- Ensure you load in a function called `Root()` into your HTML
- Use `<div id="root"></div><script>render()</script>` somewhere after that.
- Unlike React, you don't need any build-tools or runtime.
- Furthermore, all your states are available everywhere as they're defined at the root level, so choose your naming wisely!
- For more details: See [source code](public/index.js) (it's simple!)

Tips:

- Recommended VSCode plugin: [leet-html](https://marketplace.visualstudio.com/items?itemName=EldarGerfanov.leet-html)
- Take an example and use Claude.ai to generate something new in the same way.
