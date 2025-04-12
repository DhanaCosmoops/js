let date = new Date();
console.log(date);
console.log(date.toLocaleDateString());
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(date.toLocaleTimeString());

// date.getFullYear()
console.log(date.getFullYear());

// date.getMonth()
console.log(date.getMonth() + 1);

// date.getDate()
console.log(date.getDate());

// date.getHours()
console.log(date.getHours());

// date.getMinutes()
console.log(date.getMinutes());

// date.getSeconds()
console.log(date.getSeconds());

// date.setFullYear(year,month,date)
date.setFullYear(2025, 4, 12);
console.log(date);

// date.setMonth(month,day)
date.setMonth(4, 12);
console.log(date);

// date.setDate(date)
date.setDate(12);
console.log(date);

// date.setHours(hours,mins,secs,millisecs)
date.setHours(5);
console.log(date);

// date.setMinutes()
date.setMinutes(25);
console.log(date);

// date.setSeconds()
date.setSeconds(23);
console.log(date);
