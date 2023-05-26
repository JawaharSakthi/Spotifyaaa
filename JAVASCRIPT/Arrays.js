let array=[10,20,"JAWA",true,undefined,function a(){}]
console.log(array);
console.log(typeof(array));

console.log(Array.isArray(array));
console.log(array instanceof Array);

//literal way
let c=[1,2,3];
console.log(c,typeof c);

//constructor way
let b=new Array(100,200,300);
console.log(b,typeof b);

let d=new Array(1,2,3);
console.log(d,typeof d);

// access
console.log(d[1]);

//modify
console.log(d[2]="HELLLO");
console.log(d);

// Array Methods

// push -->Adds the element from end
let ja=[1,2,3,4,5,6]
console.log(ja);
console.log(ja.push(7,8,9));
console.log(ja);

//unshift -->Adds the element from start
console.log(ja.unshift(-1,0));
console.log(ja);

//pop -->Deletes the element from end
console.log(ja.pop());
console.log(ja);

//shift -->Deletes the element from start
console.log(ja.shift());
console.log(ja);

//slice -->It acts like a substring, retrieves a part of values based upon the index values passed in the parameter
console.log(ja.slice(2,5));
console.log(ja);         

//splice
console.log(ja.splice(1,3,"CSK","RCB","RR"));
console.log(ja);


//29/3/2022
//split reverse join
let str="HELLO";
console.log(str.split("").reverse().join(""));

//for in
let arr=[100,200,300,400];
for(index in arr)
{
    console.log(index);
}

//for of
for(values of arr)
{
    console.log(values);
}

//for each
let z=arr.forEach((index,values)=>{
    console.log(index,values);
});

//Filter()
let arr1=arr.filter((x)=>{
    return x>100;
})
console.log(arr1);

//Map
let arr2=arr.map((x)=>{
    return x+x*0.08;
})
console.log(arr2);

//Reduce
let arr3=arr.reduce((x,y)=>{
    return x+y;
})
console.log(arr3);  