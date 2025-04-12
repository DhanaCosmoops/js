// charAt()

let str = "Dhanalakshmi";
console.log(str.charAt(3)); // op: n

console.log(str.charAt(-1)); // negative index val r not allowed

console.log(str.charAt(str.length - 1)); // op:i

// charCodeAt()

let str1 = "Aadhira";
console.log(str1.charCodeAt(1)); // op:97
console.log(str1.charCodeAt(0)); // op:65
console.log(str1.charCodeAt(-1)); // op:NaN
console.log(str1.charCodeAt(14)); // op: NaN

// concat()

let str2 = "Hello";
let str3 = "Everyone!!!";
let str4 = str2.concat(" ", str3);
console.log(str4); // Hello Everyone!!!

// includes()

let str5 = "Javascript";
console.log(str5.includes("a")); // true
console.log(str5.includes("a", 2)); // true
console.log(str5.includes("z")); // false

// indexOf() => Left 2 Right

let str6 = "viv richard";
console.log(str6.indexOf("v")); // 0
console.log(str6.indexOf("v", 1)); // 2
console.log(str6.indexOf("r", 5)); // 9
console.log(str6.indexOf("z")); // -1

// lastIndexOf => Right 2 Left

let str7 = "ramakrishnan";
console.log(str7.lastIndexOf("k")); // 4
console.log(str7.lastIndexOf("k", 3)); // -1
console.log(str7.lastIndexOf("k", 5)); // 4
console.log(str7.lastIndexOf("x")); // -1
console.log(str7.lastIndexOf("n", 10)); // 9

// repeat()

let str8 = "vamika";
console.log(str8.repeat(4));

// replace()

let str9 = "js is a scripting language";
console.log(str9.replace("js", "Javascript")); // Javascript is a scripting language

let str10 = "js is a scripting language js";
console.log(str10.replace("js", "Javascript")); // Javascript is a scripting language js

// replaceall()

let str11 = "js is a scripting language js";
console.log(str11.replaceAll("js", "Javascript")); // Javascript is a scripting language Javascript

// slice()

let str12 = "Hello World";
console.log(str12.slice(0, 5)); // Hello
console.log(str12.slice(3, 11)); // lo World
console.log(str12.slice(-6, -1)); //  Worl

// subString() & subStr()

let str13 = " Hi Everyone";
console.log(str13.substring(3)); //  Everyone
console.log(str13.substring(3, 9)); //  Every
console.log(str13.substring(-2)); // Hi Everyone
console.log(str13.substring(9, 3)); //  Every

// split()

let str14 = "I am Iron-Man";
console.log(str14.split(""));
/* op: [
  'I', ' ', 'a', 'm',
  ' ', 'I', 'r', 'o',
  'n', '-', 'M', 'a',
  'n'
] */
console.log(str14.split(" ")); // [ 'I', 'am', 'Iron-Man' ]
console.log(str14.split("-")); // [ 'I am Iron', 'Man' ]
console.log(str14.split("r")); // [ 'I am I', 'on-Man' ]
console.log(str14.split(" ", 2)); // [ 'I', 'am' ]
console.log(str14.split(" ", 1)); // [ 'I' ]
console.log(str14.split("-", 1)); // [ 'I am Iron' ]

// startsWith()

let str15 = "I am Captain America";
console.log(str15.startsWith("I")); // true
console.log(str15.startsWith("a")); // false
console.log(str15.startsWith("a", 2)); // true
console.log(str15.startsWith("c", 5)); // false (case sensitive)
console.log(str15.startsWith("C", 5)); // true
console.log(str15.startsWith("Captain", 5)); // true

// endsWith()

let str16 = "I am Thor";
console.log(str16.endsWith("r")); // true
console.log(str16.endsWith("r", str16.length)); // true
console.log(str16.endsWith("m")); // false
console.log(str16.endsWith("m", 4)); // true
console.log(str16.endsWith("m", str16.length - 5)); // true
console.log(str16.endsWith("Thor", 9)); // true

// toLowerCase() & toUpperCase()

let str17 = "Shobana";
console.log(str17.toLowerCase()); //  shobana
console.log(str17.toUpperCase()); //  SHOBANA

// trim()

let str18 = " I am Jaggu ";
console.log(str18.trim()); // trim the spaces from start and end

// trimStart() & trimEnd()

let str19 = " Welcome to String Methods ";
console.log(str19);
console.log(str19.trimStart());
console.log(str19.trimEnd());
