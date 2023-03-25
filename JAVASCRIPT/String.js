let str="Jawahar Sakthi";
console.log( str.length);
console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.indexOf('u'));
console.log(str.charAt(9));
console.log(str.slice(0,7)); //slice and substring are same!
console.log(str.split("").reverse().join(""));
console.log(str.endsWith('i'));
console.log(str.startsWith('J'));
console.log(str.substring(0,7)); //slice and substring are same!

let a="JAWAHAR";
let b="SAKTHI";
console.log(a.concat(b));
console.log(`${a} ${b}`);
console.log(a+" "+b);

console.log(b.lastIndexOf('A'));
console.log(a.repeat(10));
console.log(b.replace("SAKTHI","V"));
console.log(a.includes("J"));
console.log(a.replaceAll("A","$"));