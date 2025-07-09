// let arr=[1,2,3,4,5,6];

// map method
// let element=arr.map((ele)=>{
//     return ele*2;
// });
// console.log(element);

// // forEach loop


// arr.forEach((ele)=>{
//     console.log(ele*3)
//     // return ele*2;
// });


// filter 
// let elements=arr.filter((ele,index)=>{
//     return ele%2==0;
// });
// console.log(elements);

// let newarr=[1,2,3,4,5,6,"rahul",true,undefined];

// let newelements=newarr.filter((ele)=>{
//     return typeof(ele)=="string";
// });
// console.log(newelements);


// reduce 

// let element=arr.reduce((acc,curr)=>{
//     return acc+curr;
// },5);
// console.log(element)

// console.log(4+"44")
// console.log(4-"44")


// filter on map , use both

// let out = arr.map((element,index)=>{
//     return element**2;
// }).filter((element, index)=>{
//     return element%2==0
// }).map((element,index)=>{
//     return element*0.5;
// })

// console.log(out)


let array=[4,5,6,7,8]
let studentInfo=[1,2,3,"ramesh","rahul","ritik"]


// map 
let mapOut=array.map((ele,index)=>{
    return ele*4;
})
console.log(mapOut)

// filter method

let student=studentInfo.filter((ele,index)=>{
    return ele=="rahul";
})
console.log(student)


// foreach method 

let loop=studentInfo.forEach((ele)=>{
    console.log(ele)
})

// reduce methode

let reduceMethod=array.reduce((acc,curr)=>{
    return acc+curr;
})
console.log(reduceMethod)



