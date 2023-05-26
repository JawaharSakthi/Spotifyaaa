//object creation

let a={
    id:101,
    name:"JAWA"
}
console.log(a);

//access the values
console.log(a.name);
console.log(a["name"]);

//adding key and value
a.address="Coimbatore";
console.log(a);
a["address"]="Bangalore";
console.log(a);

//creating object inside another object
let b={
    id:101,
    name:"JAWA",
    hobbies:{
        sports:"Badminton",
        music:"Anirudh",
    }
}
console.log(b.hobbies.sports);
console.log(b["hobbies"]["music"]);

//creating function insde and object
let c={
    id:101,
    name:"JAWA",
    hobbies:function() {
        let name="Sakthi";
        let age=21;
        return `${name} ${age}`
    }
}
console.log(c.hobbies());

//using this keyword
let d={
    id:101,
    name:"JAWA",
    hello:function() {
        return this.name;
    }
}   
console.log(d.hello());

//using this keyword in arrow function  --> Wont't Work!
let e={
    id:101,
    name:"JAWA",
    bye:()=>
    {
        return this.id;
    }
}
console.log(e.bye());


// 31/3/2023
courses="JAVA";
let y={
    courses:"WEB TECH",
    place:"BANAGALORE",
    colors:()=> {
        let courses="sql";
        return this.courses;
    }
}
console.log(y.colors());



let emp=[
    {
        id:101,
        ename:"JAWA"
    },
    {
        id:102,
        ename:"DINESH"
    }
]
console.log(emp,typeof emp);
console.log(emp[0].ename);
console.log(emp[1].id);

//creating object using new keyword
let aa=new Object();
console.log(aa,typeof aa);
aa["id"]=101;
aa["name"]="JAWAHAR";
console.log(aa.id);
console.log(aa.name);

// objects are mutable
let bb={
    name:"SAKTHI",
    phone_number:7010983330
}
console.log(bb);
bb["name"]="JAWA";
console.log(bb);
bb.name="J";
console.log(bb);

//Keys in-terms of Numbers!
let key={
    1:"DUSTER",
    2:"MARKER"
}
console.log(key);
console.log(key[2]);

//object methods
// freeze
let free={
    name:"J",
    place:"CBE"
}
free["name"]="JAWA"
Object.freeze(free)
free.name="A";
console.log(free);

//assign
let abd={
    name:"JAWAHAR"
}
let sky={
    team:"INDIA"
}
let franchise=Object.assign(abd,sky);
console.log(franchise);

//keys
let key2=Object.keys(free)
console.log(key2);
//values
let values=Object.values(free)
console.log(values);

//entries
let enter={
    name:"VIRAT",
    jNo:18
}
console.log(enter);
console.log(Object.entries(enter));
console.log(enter);


//math object!

let az=188.2;
let math=Math.ceil(az);
console.log(math);

let math2=Math.floor(az);
console.log(math2);

let random=Math.ceil(Math.random()*100000).toString(16)
console.log(random);

let gg=2;
let jj=3;
                                                            
console.log(`Max Value: ${Math.max(gg,jj)}`);
console.log(`Min Value: ${Math.min(gg,jj)}`);
console.log(`Power Value: ${Math.pow(gg,jj)}`);
console.log(`Square Root Value: ${Math.sqrt(gg,jj)}`);
console.log(`Cube Root Value: ${Math.cbrt(gg,jj)}`);
console.log(`PI Value: ${Math.PI}`);
console.log(`Round OFF: ${Math.round(jj)}`);
console.log(`Round OFF: ${Math.trunc(jj)}`);

let body=document.querySelector('body');
// console.log(body);
body.style.backgroundColor=`#${random}`

//date object

let date=new Date();
console.log(date);

console.log(Date());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getFullYear());
console.log(date.getMinutes());
console.log(date.getMilliseconds());
console.log(date.getSeconds());
console.log(date.getMonth());
                   
let date1=new Date(2023,3,3,10,10,10,10)
console.log(date1);