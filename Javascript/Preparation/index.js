// Type coercion in JavaScript
// Implicit coercion: JavaScript automatically converts types when necessary
// Explicit coercion: You can manually convert types using functions like String(), Number(), Boolean()

// let x = "5" + 5; // "55" (string concatenation)

// let y = "5" - 5; // 0 (string to number conversion)

// let z = "5" * 5; // 25 (string to number conversion)

// let w = "5" / 5; // 1 (string to number conversion)

// let v = "5" == 5; // true (loose equality, type coercion)

// let u = "5" === 5; // false (strict equality, no type coercion)

// let t = Boolean(0); // false (0 is falsy)

// let s = Boolean(1); // true (1 is truthy)

// let r = Boolean(""); // false (empty string is falsy)

// let q = Boolean("Hello"); // true (non-empty string is truthy)

// let p = Boolean(null); // false (null is falsy)

// let o = Boolean(undefined); // false (undefined is falsy)

// let n = Boolean({}); // true (empty object is truthy)

// let m = Boolean([]); // true (empty array is truthy)

// let l = Boolean([1, 2, 3]); // true (non-empty array is truthy)

// let k = Boolean(function() {}); // true (function is truthy)

// let j = Boolean(() => {}); // true (arrow function is truthy)

// let i = Boolean(new Date()); // true (Date object is truthy)

// let h = Boolean(new RegExp("")); // true (RegExp object is truthy)

// let g = Boolean(new Map()); // true (Map object is truthy)

// let f = Boolean(new Set()); // true (Set object is truthy)

// let e = Boolean(new WeakMap()); // true (WeakMap object is truthy)

// let d = Boolean(new WeakSet()); // true (WeakSet object is truthy)

// let c = Boolean(new ArrayBuffer(10)); // true (ArrayBuffer object is truthy)

// let b = Boolean(new DataView(new ArrayBuffer(10))); // true (DataView object is truthy)

// let a = Boolean(new Int8Array(10)); // true (Int8Array object is truthy)

// let aa = Boolean(new Uint8Array(10)); // true (Uint8Array object is truthy)

// let ab = Boolean(new Uint8ClampedArray(10)); // true (Uint8ClampedArray object is truthy)