// // let b=200;
// // var c=300;
// // console.log(b);
// // console.log(c);
// // function a() {
// //     let b1=100;
// //     let c1=202;
// //     console.log(b1);
// //     console.log(c1);    
// // }
// // a()

// // let a=210;
// // var b=310;
// // console.log(a);
// // console.log(b);
// // function jj() 
// // {
// //     const c=410;
// //     function mm() 
// //     {
// //         let d=510;
// //         function jimjim() 
// //         {
// //             let e=610;
// //             console.log(c);
// //             console.log(d);
// //             console.log(e);
// //         }
// //         return jimjim;
// //     }
// //     return mm;
// // }
// // jj()()()

// // let a=210;
// // var b=310;
// // console.log(a);
// // console.log(b);
// // function jj() 
// // {
// //     const c=410;
// //     function mm() 
// //     {
// //         let d=510;
// //         function jimjim() 
// //         {
// //             let e=610;
// //             console.log(c);
// //             console.log(d);
// //             console.log(e);
// //         }
// //         return jimjim;
// //     }
// //     return mm;
// // }
// // jj()()()

// // let a1=20;
// // var b1=30;
// // console.log(a1);
// // console.log(b1);
// // function jj1() 
// // {
// //     const c1=40;
// //     function mm1() 
// //     {
// //         let d1=50;
// //         function jimjim1() 
// //         {
// //             let e1=60;
// //             console.log(c1);
// //             console.log(d1);
// //             console.log(e1);
// //         }
// //         return jimjim1;
// //     }
// //     return mm1;
// // }
// // jj1()()()

// //BLock Scope

// console.log(a);
// {
//     var a=10;
//     console.log(a);
//     let b=20;
//     console.log(b);
// }
// console.log(a);

// //functional Scope

// function jawa() 
// {
//     var z=30;   
//     console.log(z);
//     const y=40;
//     console.log(y);
// }
// jawa()

// var m=90;
// {
//     console.log(m);
// }


//HIGHER ORDER FUNCTION!

// function demo(a,b,test) {
//     let y=test(a,b); 
//     console.log(y);
// }
// demo(10,20,add)
// demo(20,10,sub)

// function add(a,b) {
//     return a+b;
// }
// function sub(a,b) {
//     return a-b;
// }

//CALL BACK FUNCTION

function test2() {
    console.log("JAWA");
}
test2(test3())
function test3() {
    console.log("SAKTHI");
}



function sample(test) {
    console.log("HELLO WORLD!");
    test();
}
sample(sample2)
function sample2() {
    console.log("BRUH!");
}