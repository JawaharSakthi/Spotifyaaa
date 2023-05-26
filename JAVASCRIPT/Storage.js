// let lStorage=localStorage.setItem('ID',100);
// let lStorage1=localStorage.setItem('Name',"Jawa");
// console.log(lStorage,lStorage1);

// let lStorage2=localStorage.getItem('Name')
// console.log(lStorage2);

// let lStorage3=localStorage.removeItem('Name')
// console.log(lStorage);

// let lStorage4=localStorage.clear()
// console.log(lStorage4);

// //session Storage
// let session=sessionStorage.setItem('Bike','Continental GT')
// console.log(session);

// let session1=sessionStorage.getItem('Bike')
// console.log(session1);

//cookie
// document.cookie="name=Jawa"
// alert(document.cookie)

//promise

// let promise=new Promise((resolve,reject)=>{
//     let a=1+1;
//     if(a==2)
//     {
//         resolve("Promise is Fulfilled")
//     }
//     else{
//         reject("Promise is Rejected")
//     }
// })
// promise.then((success)=>{
//     console.log(success);
// }).catch((error)=>{
//     console.log(error);
// })

let promise=true;
let p=new Promise((resolve, reject)=>{
    if(promise==true)
    {
        resolve('Success')
    }
    else
    {
        reject('Failed')
    }
})
p.then((message)=>{
    console.log(message);
}).catch((message)=>{
    console.log(message);
})