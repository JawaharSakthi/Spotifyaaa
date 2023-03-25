let num=1000;
console.log(num);
console.log(num, typeof num);

let num2=20.56;
console.log(num2);
console.log(num2,typeof num2);

let num3=1/2;
console.log(num3);
console.log(num3,typeof num3);


let str="JAWA";
console.log(str);
console.log(str,typeof str);

let str2='JAWAHAR SAKTHI';
console.log(str2);
console.log(str2,typeof str2);

let str3=`SAKTHI`;
console.log(str3);
console.log(str3,typeof str3);

let empName="JAWAHAR";
let empSal="50000";
let empId="101";
console.log(`NAME ${empName} SALARY ${empSal} ID ${empId}`);

let n=null;
console.log(n,typeof n);


//BIGINT_TOPIC

let a=100n;
console.log(a,typeof a);

let b=BigInt("20");
console.log(b,typeof b);

let c=BigInt(true)
console.log(c,typeof c);

let d=BigInt(false)
console.log(d,typeof d);

// let e=BigInt("JAWA")
// console.log(e,typeof e);//cant convert string to bigInt

let f=BigInt("      ");
console.log(f,typeof f);//we can convert         

//undefined_Topic
var s;
console.log(s);

let g;
console.log(g);

// const h;
// console.log(h); //error

//Boolean_Topic
console.log(!true);`
console.log(!false);

let i=Boolean(1);
console.log(i,typeof i);

let j=Boolean(0)
console.log(j,typeof j);

let k=Boolean("-JAWA")
console.log(k,typeof k);

let l=Boolean(1n)
console.log(l,typeof l);

let m=Boolean(0n)
console.log(m,typeof m);

let o=Boolean("0n")
console.log(o,typeof o);