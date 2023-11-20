const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

// Additional test cases
assertEqual(head([42]), 42); // An array with only one element should yield that one element as its head
assertEqual(head([]), undefined); // An empty array should yield undefined as its head