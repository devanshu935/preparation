//Q1. Filter Even Numbers: Write a program that takes an array of numbers as input and uses the filter method to return a new array containing only the even numbers.
const arr = [1, 2, 3, 4, 5, 6];
console.log(arr.filter(x => x % 2 == 0));

//Q2. Map String Lengths: Create a program that takes an array of strings as input and uses the map method to create a new array that consists of the lengths of each string.
const strings = ["one", "two", "three"];
console.log(strings.map(x => x.length));

//Q3. Find Specific Object: Write a program that takes an array of objects representing books with title and author properties and a target title. Use the find method to locate and return the book object with the matching title.
const books = [
  { author: 'Author One', title: 'Book One' },
  { author: 'Author Two', title: 'Book Two' },
  { author: 'Author Three', title: 'Book Three' }
];

console.log(books.find(book => book.title == "Book One"));
//Q4. Filter and Map People Data: Create a program that takes an array of people objects with name and age properties. Use filter to create a new array of people who are older than a specified age and then use map to create an array containing only their names.
const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 40 }
];
console.log(people.filter(person => person.age > 25).map(person => person.name));

//Q1. Object Property Sum: Write a program that takes an object representing expenses, where the keys are expense categories (e.g., "food," "rent") and the values are amounts spent in each category. Calculate the total sum of expenses.
const expenses = {
  food: 200,
  rent: 1000,
  transportation: 150,
  entertainment: 50
};
let total = 0;

for (prop of Object.keys(expenses)) {
  total += expenses[prop];
}

console.log(total);

//Q2. Nested Object Search: Create a program that takes a nested object representing a file system directory structure. Implement a function that recursively searches for a file by name and returns its full path if found.
function searchFile(fileSystem, fileName, currentPath = '') {
  // Base case: If the current node is a file and its name matches the target file name, return the full path
  if (fileSystem.type === 'file' && fileSystem.name === fileName) {
      return currentPath + '/' + fileName;
  }

  // If the current node is a folder, recursively search each of its children (directories or files)
  if (fileSystem.type === 'folder') {
      // Construct the current path by appending the folder name
      const newPath = currentPath === '' ? fileSystem.name : currentPath + '/' + fileSystem.name;
      
      // Search recursively in each child node
      for (let child of fileSystem.contents) {
          const result = searchFile(child, fileName, newPath);
          // If the file is found in one of the children, return the full path
          if (result) {
              return result;
          }
      }
  }

  // If the file is not found in any of the children, return null
  return null;
}

// Example usage:
const fileSystem = {
  type: 'folder',
  name: 'root',
  contents: [
      {
          type: 'folder',
          name: 'documents',
          contents: [
              { type: 'file', name: 'resume.txt', size: '10KB' },
              { type: 'file', name: 'notes.txt', size: '5KB' }
          ]
      },
      {
          type: 'folder',
          name: 'photos',
          contents: [
              { type: 'file', name: 'family.jpg', size: '100KB' },
              { type: 'file', name: 'vacation.jpg', size: '150KB' }
          ]
      },
      { type: 'file', name: 'README.md', size: '2KB' }
  ]
};

console.log(searchFile(fileSystem, 'family.jpg')); // Output: root/photos/family.jpg

//Q3. Object Property Modification: Write a program that takes an object representing a user profile with username, email, and age properties. Modify the object to add a new property called isActive and set it to true.
const userProfile = {
  username: "John Doe",
  email: "john@gmail.com",
  age: 30,
}

userProfile.isActive = true;

//Q4. Object Property Filtering: Given an object with properties representing different types of fruits and their quantities, write a program to filter out fruits with quantities below a certain threshold.
const fruits = {
  apple: 5,
  mango: 10,
  guava: 15,
  strawberry: 90,
}

const filteredEntities = Object.entries(fruits).filter(([fruit, quantity]) => quantity > 10);

console.log(Object.fromEntries(filteredEntities));

//Q5. Nested Object Count: Create a program that takes a nested object representing a family tree. Write a function that recursively counts the total number of family members in the tree.(Pending)

//Q6. Object Sorting: Write a program that takes an array of objects representing products with name and price properties. Sort the products by price in ascending order.
const products = [
  { name: 'Product A', price: 10.99 },
  { name: 'Product B', price: 19.99 },
  { name: 'Product C', price: 15.49 },
  { name: 'Product D', price: 7.99 }
];
console.log(products.sort((a, b) => {
  return a.price - b.price;
}));

console.log(products.sort((a, b) => {
  return b.price - a.price;
}));
const sortedEntities = Object.entries(products).sort(([fruit, quantity]) => quantity > 10);

console.log(Object.fromEntries(filteredEntities));

//Q7. Find Longest Word: Write a program that takes an array of strings and uses the find method to find the longest word (string with the most characters) in the array.
const stringArray = ["apple", "banana", "orange", "grape", "kiwi"];


//Q8. Array of Objects Sorting: Given an array of objects representing students with name, grade, and age properties, write a program to sort the students first by grade (descending) and then by age (ascending).
const students = [
    { name: 'Alice', grade: 85, age: 20 },
    { name: 'Bob', grade: 75, age: 22 },
    { name: 'Charlie', grade: 90, age: 19 },
    { name: 'David', grade: 85, age: 21 }
];

students.sort((a, b) => {
    // First sort by grade (descending)
    if (a.grade !== b.grade) {
        return b.grade - a.grade;
    }
    // If grades are the same, sort by age (ascending)
    return a.age - b.age;
});

console.log(students);

const longestWord = stringArray.find(word => {
    return word.length === Math.max(...stringArray.map(word => word.length));
});

console.log("Longest word:", longestWord);

//Q9. Deep Object Comparison: Implement a program that performs a deep comparison between two objects, checking if they have the same structure and values (recursively).
const obj1 = {
  a: ['hello', 'hi'],
  b: 4,
  c: { name: 'hello', year: '2015' },
}

const obj2 = {
  a: ['hello', 'hi'],
  b: 4,
  c: { name: 'hello', year: '2015' },
}

function deepCompare(obj1, obj2) {
  // Check if both arguments are objects
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') {
      return obj1 === obj2; // Return true if they are primitives and equal, otherwise false
  }

  // Check if both objects have the same number of keys
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
      return false;
  }

  // Check if all keys in obj1 are present in obj2 and have the same values (recursively)
  for (let key of keys1) {
      if (!keys2.includes(key) || !deepCompare(obj1[key], obj2[key])) {
          return false;
      }
  }

  return true; // If all checks pass, the objects are deeply equal
}
console.log(deepCompare(obj1, obj2));
//Q10. JSON Flattening: Write a program that flattens a deeply nested JSON object into a single-level object with compound keys. For example, { "a": { "b": { "c": 1 } } } should become { "a.b.c": 1 }. (Pending)