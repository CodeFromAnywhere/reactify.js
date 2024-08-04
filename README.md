# Reactify.js

Reactify.js simplfies raw HTML + JS development by adding the ability to use react-like states

Your only requirement is you have a `Root` function in your html page when using this, returning a innerHTML string. Now you can use `useState` and `useStore`!

Example: index.html

```html
<html>
  <head>
    <script src="https://reactify.actionschema.com"></script>
  </head>
  <body>
    <script>
      const [getCount, setCount] = useStore("count", 0);
      const [getText, setText] = useState("Hello");

      function increaseCount() {
        setCount((prev) => prev + 1);
      }

      function decreaseCount() {
        setCount(getCount() - 1);
      }

      function changeText() {
        setText(getText() + "...");
      }

      const Text = () => {
        return `
                <div class="mt-6">
                    <p class="text-lg font-semibold mb-2">Text: ${getText()}</p>
                    <button onclick="changeText()" class="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors">
                        Chaknge Text
                    </button>
                </div>
            `;
      };

      const Root = () => {
        return `
                <div class="text-center">
                    <h1 class="text-3xl font-bold mb-6">Reactify.js Counter</h1>
                    <div class="text-xl mb-4">Count: ${getCount()}</div>
                    <div class="space-x-4">
                        <button onclick="increaseCount()" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                            Increase Count
                        </button>
                        <button onclick="decreaseCount()" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors">
                            Decrease Count
                        </button>
                    </div>
                    ${Text()}
                </div>
            `;
      };

      // Initial render
      render();
    </script>
  </body>
</html>
```

As long as you always call `render()` at the end, and you have a function `Root()` you can use it!

Recommended VSCode plugin: `leet-html` Name: [leet-html](https://marketplace.visualstudio.com/items?itemName=EldarGerfanov.leet-html)
