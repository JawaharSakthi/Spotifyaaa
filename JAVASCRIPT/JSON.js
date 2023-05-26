let obj={
    id:101,
    name:"Jawa"
}
console.log(obj);


//converting object to string using JSON stringify
let JStr=JSON.stringify(obj)
console.log(JStr);

let JPar=JSON.parse(JStr)
console.log(JPar);

let api=fetch("https://cataas.com/api/cats?tags=cute")
api.then((a)=>{
    console.log(a.ok);
    return a.json()
}).then((b)=>{
    console.log(b);
})