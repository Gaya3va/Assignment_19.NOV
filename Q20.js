


`Q19.js` (Closure-Based Counter Implementation)

// Q19.js
// Closure-Based Counter Implementation

function createCounter(initial = 0) {
  // private variable inside closure
  let count = initial;

  return {
    increment() {
      count += 1;
      console.log("Current count:", count);
    },
    decrement() {
      count -= 1;
      console.log("Current count:", count);
    },
    get() {
      // expose read-only access
      return count;
    }
  };
}

// --- Example usage & demonstration ---

console.log("=== Q19: Closure-Based Counter Implementation ===");

// Single counter usage
const counter = createCounter();
counter.increment(); // Current count: 1
counter.increment(); // Current count: 2
counter.decrement(); // Current count: 1
console.log("Final count (via get):", counter.get()); // 1

// Demonstrate encapsulation: 'count' is not accessible directly
console.log("Direct property access attempt (should be undefined):", counter.count);

// Multiple independent counters
const counterA = createCounter(10);
const counterB = createCounter(100);

counterA.increment(); // 11
counterA.increment(); // 12
counterB.decrement(); // 99

console.log("counterA.get():", counterA.get()); // 12
console.log("counterB.get():", counterB.get()); // 99

