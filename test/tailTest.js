const tail = require('../tail');

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
tail.assertEqual(words.length, 3);

// Test cases
tail.assertEqual(tail([5, 6, 7]), [6, 7]);
tail.assertEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
tail.assertEqual(tail([42]), []); // An array with only one element should yield an empty array as its tail
tail.assertEqual(tail([]), []); // An empty array should yield an empty array as its tail