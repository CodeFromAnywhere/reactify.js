# Reactify.js

Reactify.js simplfies raw HTML + JS development by adding the ability to use react-like states.

Examples:

- Counter [code](public/demo/counter.html) [result](https://reactify-js.vercel.app/demo/counter.html)
- Todo Manager [code](public/demo/todo.html) [result](https://reactify-js.vercel.app/demo/todo.html)
- Persistent Media Viewer with IndexedDB [code](public/demo/media-viewer.html) [result](https://reactify-js.vercel.app/demo/media-viewer.html)
- Blog website (multi page) [code](public/demo/blog/index.html) [result](https://reactify-js.vercel.app/demo/blog/)

Instructions:

- Works using raw HTML, CSS, and JS
- Ensure you load in a function called `Root()` into your HTML
- Use `<div id="root"></div><script>reactify()</script>` somewhere after that.
- Unlike React, you don't need any build-tools or runtime.
- For more details: See [source code](public/index.js) (it's simple!)

Disclaimer:

- All your hooks need to be used at the root level! This also mean your states are available everywhere as they're defined at the root level, so choose your naming wisely! Naming collisions are fairly likely this way, especially on bigger projects. Ensure to either use `var` or be sure not to collide your naming.

Tips:

- Recommended VSCode plugin: [leet-html](https://marketplace.visualstudio.com/items?itemName=EldarGerfanov.leet-html)
- Take an example and use Claude.ai to generate something new in the same way.
- Divide your project into multiple pages if you run into naming collisions
- Use a VSCode plugin for naming collisions (haven't found one yet)
