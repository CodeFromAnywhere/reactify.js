// Global state to hold all our state values
const states = [];
let stateIndex = 0;

function useState(initialValue) {
  const currentIndex = stateIndex;

  // Initialize state if it doesn't exist
  if (states[currentIndex] === undefined) {
    if (typeof initialValue === "function") {
      states[currentIndex] = initialValue();
    } else {
      states[currentIndex] = initialValue;
    }
  }

  const setState = (newValue) => {
    if (typeof newValue === "function") {
      states[currentIndex] = newValue(states[currentIndex]);
    } else {
      states[currentIndex] = newValue;
    }
    render(); // Re-render after state change
  };

  // Move to next state for next useState call
  stateIndex++;

  // Return current state and setState function
  return [() => states[currentIndex], setState];
}

function useStore(key, initialValue) {
  let getStore = () => {
    const value = window.localStorage.getItem(key);
    if (value === null) {
      return initialValue;
    }
    return JSON.parse(value);
  };

  const setStore = (newValue) => {
    if (typeof newValue === "function") {
      window.localStorage.setItem(key, JSON.stringify(newValue(getStore())));
    } else {
      window.localStorage.setItem(key, JSON.stringify(newValue));
    }
    render(); // Re-render after state change
  };
  // Return current state and setState function
  return [getStore, setStore];
}

function render() {
  stateIndex = 0; // Reset index before rendering
  document.getElementById("root").innerHTML = Root();
}
