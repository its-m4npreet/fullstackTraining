

let form=document.getElementById("form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let username=document.getElementById("username").value;
let email=document.getElementById('email').value;

let password=document.getElementById('password').value;

let confirmPassword=document.getElementById('confirmpassword').value;
let userInfo= document.getElementById('userinfo');
userInfo.innerHTML=`<h2>${username}</h2>
<p>${email}</p>`;

 console.log(userInfo)

    // let name=document.createElement('h2');
    // let emailInfo=document.createElement('p');
    //     let pass=document.createElement('p');
    // let confirmpass=document.createElement('p');

    
    
    if(password!=confirmPassword){
        prompt("password is mismatch")
    }

    if(password.length>6)(
        alert("password is long , min length is 6")
    )
//  let obj={
//     username,email,password,confirmPassword
//  }
// name.innerText=obj.username;
// emailInfo.innerText=email;
// pass.textContent=password
// confirmpass.textContent=confirmPassword
// userInfo.append(name,emailInfo,pass,confirmpass
// )
// userInfo.append(emailInfo)
// userInfo.append(pass)
// userInfo.append(confirmpass)


// console.log(name)
// console.log(emailInfo)
//  console.log(obj);

})


