// console.log("hello");


// setTimeout(()=>{

// let a="anmol 2s";
// console.log(a);
// }, 2000)
// console.log("world");
// setTimeout(()=>{

// let a="rahul 1s";
// console.log(a);
// }, 1000)


// setTimeout(() => {
//     for(let i=1;i<=5 ; i++){
//         console.log(i)
//     }
// }, 0);

// promise 

// traditional way 
// async function myfun (){}


// todays way 


const myPromise=async ()=>{
    const respone=await fetch("https://fakestoreapi.in/api/products");

    const res=await respone.json();
    const data =res.products;
//  console.log(res);
    // console.log(res.products);
    showdata(data);
    // console.log(res.products[1].image);
    // console.log(res.message);
    // console.log(res.status);

}
// const myPromise=async ()=>{
//     const respone=await fetch("https://fakestoreapi.com/products");

//     const res=await respone.json();
//  console.log(res);
//     // console.log(res.Cart);

// }
myPromise();

const showdata =async(data)=>{
    let cardContainer=document.getElementById('cardContainer');
    // cardContainer.innerHTML=`<h1>hello</h1>`;
//  console.log(cardContainer)
 

data.forEach((ele,index)=>{
    const card=document.createElement('div')
    const image=document.createElement('div');
    const heading=document.createElement('div');
    heading.className="heading"
        image.className="image"
    card.className="card"
     const img=document.createElement('img');
     
     const title=document.createElement('h2');
      const description=document.createElement('p');
      const price= document.createElement('p')
      const button =document.createElement('button');
      button.innerText="Add to Cart";

       img.src=ele.image;
    title.innerText=ele.brand;
    description.innerText=ele.title;
    price.innerText=`Price: $${ele.price}`;
cardContainer.append(card);

card.append(image,heading,description,button)
heading.append(title,price)
image.append(img);
});
}