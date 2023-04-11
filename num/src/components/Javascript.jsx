'String';length
'String';slice()
'String';substring()
'String';substr()
'String';replace()
'String'; replaceAll()
'String'; toUpperCase()
'String'; toLowerCase()
'String'; concat()
'String'; trim()
'String'; trimStart()
'String'; trimEnd()
'String'; padStart()
'String'; padEnd()
'String'; charAt()
'String'; charCodeAt()
'String';split()


//for loops
let text = "reezy";
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

// for browser cookies
<p id="demo"/>
document.getElementById("demo").innerHTML =
"cookiesEnabled is " + navigator.cookieEnabled;



//for browser cookies with app name
<p id="demo"/>
document.getElementById("demo").innerHTML =
"navigator.appName is " + navigator.appName;

// app with code name
<p id="demo"/>
document.getElementById("demo").innerHTML =
"navigator.appCodeName is " + navigator.appCodeName;
//object
let person = {
    firstName : "John",
    lastName  : "Doe",
    age     : 50,
    eyeColor  : "blue"
  };
  
  document.getElementById("demo").innerHTML = person.firstName + "age" + person.lastName;
  //called the firstname age  last name 
  const reezy = {
    firstName:"John",
    lastName:"Doe",
    age:50, eyeColor:"blue"
  }
  
  const x = person;
  x.age = 10;      // Will change both x.age and person.age

  //for accessing a property given by an object
  objectName.property      // person.age
or

objectName["property"]   // person["age"]
or

objectName[expression]   // x = "age"; person[x]

//example
person.firstname + " is " + person.age + " years old.";//(1)

person["firstname"] + " is " + person["age"] + " years old.";//(2)

//for adding new properties in an object
person.nationality = "English";

//for looping through the product of an object
const person = {
    fname:" John",
    lname:" Doe",
    age: 25
  };
  
  for (let x in person) {
    txt += person[x];
  }
  //to delete a property of an object
  const person = {
    fname:" John",
    lname:" Doe",
    age: 25
  };
  
  for (let x in person) {
    txt += person[x];
  }
  // to delete a particular data in an object
  const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
  };
  
  delete person["age"];
  //for nested objects
  myObj = {
    name:"John",
    age:30,
    cars: {
      car1:"Ford",
      car2:"BMW",
      car3:"Fiat"
    }
  }
  //how to access particular data type in a nested object
  
  
  myObj.cars.car2;

  // or
  myObj["cars"]["car2"];

//or

let p1 = "cars";
let p2 = "car2";
myObj[p1][p2];
  
//a full object data
const myObj = {
    name: "John",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }
//To access arrays inside arrays, use a for-in loop for each array:
for (let i in myObj.cars) {
    x += "<h1>" + myObj.cars[i].name + "</h1>";
    for (let j in myObj.cars[i].models) {
      x += myObj.cars[i].models[j];
    }
  }  
//calling an object
  const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  const myArray = Object.values(person);
  document.getElementById("demo").innerHTML = myArray;
  //JSON.stringify converts dates into strings:
  const person = {
    name: "John",
    today: new Date()
  };
  
  let myString = JSON.stringify(person);
  document.getElementById("demo").innerHTML = myString;
  //JSON.stringify will not stringify functions:
  const person = {
    name: "John",
    age: function () {return 30;}
  };
  
  let myStrin = JSON.stringify(person);
  document.getElementById("demo").innerHTML = myStrin;
  //This can be "fixed" if you convert the functions into strings before stringifying.
  const person = {
    name: "John",
    age: function () {return 30;}
  };
  person.age = person.age.toString();
  
  let myStri  = JSON.stringify(person);
  document.getElementById("demo").innerHTML = myStri;
  //It is also possible to stringify JavaScript arrays:
  const arr = ["John", "Peter", "Sally", "Jane"];

let myStr = JSON.stringify(arr);
document.getElementById("demo").innerHTML = myStr;

// Create an object:
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
      return this.language;
    }
  };
  
  // Display data from the object using a getter:
  document.getElementById("demo").innerHTML = person.lang;
  //javascript function getter
  const person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  // Display data from the object using a method:
  document.getElementById("demo").innerHTML = person.fullName();
//   Using the lang property, in this example, stores an upper case value in the language property:

Example
const person = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang.toUpperCase();
  }
};

// Set an object property using a setter:
person.lang = "en";

// Display data from the object:
document.getElementById("demo").innerHTML = person.language;

Object.defineProperty()
// The Object.defineProperty() method can also be used to add Getters and Setters:


// Define object
const obj = {counter : 0};

// Define setters and getters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (value) {this.counter -= value;}
});

// Play with the counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;

 //object constructors
 function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  //object types (blueprints)(classes)
  const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
//built in javascript constructors
new String()    // A new String object
new Number()    // A new Number object
new Boolean()   // A new Boolean object
new Object()    // A new Object object
new Array()     // A new Array object
new RegExp()    // A new RegExp object
new Function()  // A new Function object
new Date()      // A new Date object




//As you can see above, JavaScript has object versions of the primitive data types String, Number, and Boolean. But there is no reason to create complex objects. Primitive values are much faster:

// Use string literals "" instead of new String().

// Use number literals 50 instead of new Number().

// Use boolean literals true / false instead of new Boolean().

// Use object literals {} instead of new Object().

// Use array literals [] instead of new Array().

// Use pattern literals /()/ instead of new RegExp().

// Use function expressions () {} instead of new Function().
let x1 = "";             // new primitive string
let x2 = 0;              // new primitive number
let x3 = false;          // new primitive boolean

const x4 = {};           // new Object object
const x5 = [];           // new Array object
const x6 = /()/          // new RegExp object
const x7 = function(){}; // new function
//using the prototype property
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
  }
  
  Person.prototype.nationality = "English";
  // Home Made Iterable
function myNumbers() {
    let n = 0;
    return {
      next: function() {
        n += 10;
        return {value:n, done:false};
      }
    };
  }
  
  // Create Iterable
  const n = myNumbers();
  n.next(); // Returns 10
  n.next(); // Returns 20
  n.next(); // Returns 30

  // Create an Object
myNumbers = {};

// Make it Iterable
myNumbers[Symbol.iterator] = function() {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {done = true}
      return {value:n, done:done};
    }
  };
}
// Now you can use for..of

for (const num of myNumbers) {
  // Any Code Here
}

//The Symbol.iterator method is called automatically by for..of.

//But we can also do it "manually":


let iterator = myNumbers[Symbol.iterator]();

while (true) {
  const result = iterator.next();
  if (result.done) break;
  // Any Code Here
}
//javascript sets
// Method	      Description
new Set()	     //Creates a new Set
add()	     //Adds a new element to the Set
// delete().     //Removes an element from a Set
has()	      //Returns true if a value exists
clear()	     //Removes all elements from a Set
forEach()	//Invokes a callback for each element
values()	//Returns an Iterator with all the values in a Set
keys()	  //Same as values()
entries()	//Returns an Iterator with the [value,value] pairs from a Set
// Property	Description
// size	Returns the number elements in a Set
// How to Create a Set
// You can create a JavaScript Set by:

// Passing an Array to new Set()
// Create a new Set and use add() to add values
// Create a new Set and use add() to add variables
// The new Set() Method
// Pass an Array to the new Set() constructor:

// Example
// Create a Set
const lettersss = new Set(["a","b","c"]);

// Create a Set and add literal values:


// Example
// Create a Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
// Create a Set and add variables:


// Create Variables
const a = "a";
const b = "b";
const c = "c";

// Create a Set
const letterss= new Set();

// Add Variables to the Set
letters.add(a);
letters.add(b);
letters.add(c);
// The add() Method
// Example

letters.add("d");
letters.add("e");

// If you add equal elements, only the first will be saved:

// Example
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
// Create an Iterator
const myIterator = letters.entries();

// List all Entries
let texts = "";
for (const entry of myIterator) {
  text += entry;
}
//Map methods
new Map()	//Creates a new Map object
set()	//Sets the value for a key in a Map
get()	//Gets the value for a key in a Map
clear()	//Removes all the elements from a Map
// delete()	//Removes a Map element specified by a key
has()	//Returns true if a key exists in a Map
forEach()	//Invokes a callback for each key/value pair in a Map
entries()	//Returns an iterator object with the [key, value] pairs in a Map
keys()	//Returns an iterator object with the keys in a Map
values()	//Returns an iterator object of the val
//How to craete a map
// You can create a JavaScript Map by:

new Map()  //Passing an Array to 
 Map.set()  //Create a Map and use
new Map()
// You can create a Map by passing an Array to the 
new Map()  //constructor:

// Example
// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
//The set() method can also be used to change existing Map values:

// Example
fruits.set("apples", 500);
// The get() method gets the value of a key in a Map:

// Example
fruits.get("apples");    // Returns 500
// The size property returns the number of elements in a Map:

// Example
fruits.size;


Map.delete()
// The delete() method removes a Map element:

// Example
fruits.delete("apples");

Map.clear()
// The clear() method removes all the elements from a Map:

// Example
fruits.clear();


Map.has()
// The has() method returns true if a key exists in a Map:

// Example
fruits.has("apples");
// Try This:

fruits.delete("apples");
fruits.has("apples");
// Maps are Objects
// typeof returns object:

// Example
// Returns object:
typeof fruits;

// instanceof Map returns true:
// Returns true:
fruits instanceof Map;
// JavaScript Objects vs Maps
// Differences between JavaScript Objects and Maps:
// Object	                                             Map
// Not directly iterable	                            Directly iterable
// Do not have a size property	                      Have a size property
// Keys must be Strings (or Symbols)	                Keys can be any datatype
// Keys are not well ordered	                        Keys are ordered by insertion
// Have default keys	                                Do not have default keys
Map.forEach()
// The forEach() method invokes a callback for each key/value pair in a Map:

// Example
// List all entries
let //text = "";
//fruits.forEach (function(value, key) {
 //text += key + ' = ' + value;
// })

// Map.entries()
// The entries() method returns an iterator object with the [key,values] in a Map:

// Example
// List all entries
// let text = "";
// for (const x of fruits.entries()) {
//   text += x;
// }

// Map.keys()
// The keys() method returns an iterator object with the keys in a Map:

// Example
// // List all keys
// let text = "";
// for (const x of fruits.keys()) {
//   text += x;
// }

// Map.values()
// The values() method returns an iterator object with the values in a Map:

// Example
// // List all values
// let text = "";
// for (const x of fruits.values()) {
//   text += x;
// }
// You can use the values() method to sum the values in a Map:

// Example
// // Sum all values
// let total = 0;
// for (const x of fruits.values()) {
//   total += x;
// }
// Objects as Keys
// Being able to use objects as keys is an important Map feature.

// Example
// // Create Objects
// const apples = {name: 'Apples'};
// const bananas = {name: 'Bananas'};
// const oranges = {name: 'Oranges'};

// // Create a Map
// const fruits = new Map();

// // Add new Elements to the Map
// fruits.set(apples, 500);
// fruits.set(bananas, 300);
// fruits.set(oranges, 200);
// Remember: The key is an object (apples), not a string ("apples"):

// Example
// fruits.get("apples");  // Returns undefined
// Managing Objects
// Create object with an existing object as prototype
// Object.create()

// Adding or changing an object property
// Object.defineProperty(object, property, descriptor)

// Adding or changing object properties
// Object.defineProperties(object, descriptors)

// Accessing Properties
// Object.getOwnPropertyDescriptor(object, property)

// Returns all properties as an array
// Object.getOwnPropertyNames (object)

// Accessing the prototype
// Object.getPrototypeOf(object)

// Returns enumerable properties as an array
// Object.keys(object)
// Protecting Objects
// Prevents adding properties to an object



// Object.preventExtensions(object)

// Returns true if properties can be added to an object
(Object.isExtensible(object))

// Prevents changes of object properties (not values)
Object.seal(object)

// Returns true if object is sealed
Object.isSealed(object)

// Prevents any changes to an object
Object.freeze(object)

// Returns true if object is frozen
Object.isFrozen(object)

// Changing a Property Value
// Syntax
// Object.defineProperty(object, property, {value : value})
// This example changes a property value:

// Example
const person = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

// Change a property
Object.defineProperty(person, "language", {value : "NO"});
ADVERTISEMENT

// Changing Meta Data
// ES5 allows the following property meta data to be changed:

writable : true      // Property value can be changed
enumerable : true    // Property can be enumerated
configurable : true  // Property can be reconfigured
writable : false     // Property value can not be changed
enumerable : false   // Property can be not enumerated
configurable : false // Property can be not reconfigured

// ES5 allows getters and setters to be changed:

// Defining a getter
// get: function() { return language }
// // Defining a setter
// set: function(value) { language = value }
// This example makes language read-only:

// Object.defineProperty(person, "language", {writable:false});
// This example makes language not enumerable:

// Object.defineProperty(person, "language", {enumerable:false});
// Listing All Properties
// This example list all properties of an object:

Example
const person = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

Object.defineProperty(person, "language", {enumerable:false});
Object.getOwnPropertyNames(person);  // Returns an array of properties
// Listing Enumerable Properties
// This example list only the enumerable properties of an object:

// Example
const person = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

Object.defineProperty(person, "language", {enumerable:false});
Object.keys(person);  // Returns an array of enumerable properties
// Adding a Property
// This example adds a new property to an object:

Example
// Create an object:
const person = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

// Add a property
// Object.defineProperty(person, "year", {value:"2008"});
// Adding Getters and Setters
// The Object.defineProperty() method can also be used to add Getters and Setters:

Example
//Create an object
const person = {firstName:"John", lastName:"Doe"};

// Define a getter
Object.defineProperty(person, "fullName", {
  get: function () {return this.firstName + " " + this.lastName;}
});
// A Counter Example
// Example
// Define object
const obj = {counter:0};

// Define setters
Object.defineProperty(obj, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(obj, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(obj, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(obj, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(obj, "subtract", {
  set : function (i) {this.counter -= i;}
});

// Play with the counter:
obj.reset;
obj.add = 5;
obj.subtract = 1;
obj.increment;
obj.decrement;