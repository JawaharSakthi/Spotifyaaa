// function validateForm()
// {
//     var name=document.Login.name.value;
//     var password=document.Login.password.value;

//     if(name==null ||  name=="")
//     {
//         alert("USERNAME can't be BLANK");
//         return false;
//     }
//     else if(password.length<6)
//     {
//         alert("PASSWORD must be atleast 6 characters long!");
//         return false;
//     }
//     else
//     {
//         alert("Validation Successful!");
//         location.href="Let's Start.html";
//     }
// }

 

// function validateForm()
// {
//     if(document.getElementById("user").value == "jawahar"
//     && document.getElementById("pass").value == "jawahar" 
//     || document.getElementById("user").value == "laxman"
//     && document.getElementById("pass").value == "laxman")
//     {
//         alert("LOGGING IN!");
//     }
//     else
//     {
//         alert("Username or Password is Wrong!")
//         return false;
//     }
// }


// local_Storage!

// function validateForm(){
//     var userName=document.getElementById('user').value;
//     var passWord=document.getElementById('pass').value;
//     // alert(userName + passWord );
    
//     var user=localStorage.setItem('Username',userName);
//     var pass=localStorage.setItem('Password',passWord);

//     var user=localStorage.getItem('Username',userName);
//     var pass=localStorage.getItem('Password',passWord);

//     var a,b;

//     a='jawahar';
//     b='jawahar123';

//     if(user==a)
//     {
//         if(pass==b)
//         {
//             alert('Login Successful!')
//         }
//         else{
//             alert('Invalid Password!')
//             return false;
//         }
//     }
//     else{
//         alert('Invalid Username!')
//         return false;
//     }
// }

// session storage

function validateForm() {
    var userName=document.getElementById('user').value;
    var passWord=document.getElementById('pass').value;

    var user=sessionStorage.setItem('USERNAME',userName);
    var pass=sessionStorage.setItem('PASSWORD',passWord);

    var user=sessionStorage.getItem('USERNAME',userName);
    var pass=sessionStorage.getItem('PASSWORD',passWord);

    var a="jawahar";
    var b="jawahar123";

    if(user==a)
    {
        if(pass==b)
        {
            alert('Login Successful!')
        }
        else{
            alert('Invalid Password!')
            return false;
        }
    }
    else{
        alert('Invalid Username!')
        return false;
    }
}