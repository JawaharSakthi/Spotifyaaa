let a={
    name:"Jawa",
}

let b={
    name1:"Sakthi",
}
let c={
    name2:"web"
}
let d={
    name3:"Jspiders"
}

a.__proto__=b
b.__proto__=c
c.__proto__=d

console.log(a);
console.log(b);
console.log(c);
console.log(d);

console.log(a.name1);



