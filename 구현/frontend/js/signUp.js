const { addListener } = require("process");


function checkForm(){

   if(document.getElementById("1").checked){
       host_signUp();
   }
   else{
       cus_signUp();
   }
}
function cus_signUp()
{
    
    userInfo = {"user": {
                "id":  document.getElementById("id").value,
                "password":  document.getElementById("pw").value,
                "isHost": false,
                },
                "nickname":  document.getElementById("nickname").value};
    fetch("http://localhost:3000/api/user/cusRegister", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo),
        })
        .then(res => res.json())
        .then((res) => {
            console.log(res);
        })
        .catch((err) => console.log(err));
        setTimeout(go_url(),1000);

}
function host_signUp()
{
    
    userInfo = {"user": {
                "id":  document.getElementById("id").value,
                "password":  document.getElementById("pw").value,
                "isHost": true,
                },
                "name":  document.getElementById("nickname").value,
                "businessNum": document.getElementById("businessNum").value};
    fetch("http://localhost:3000/api/user/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo),
        })
        .then(res => res.json())
        .then((res) => {
            console.log(res);
        })
        .catch((err) => console.log(err));
    setTimeout(go_url(),1000);
}
function go_url(){
    location.href = 'http://localhost:8085/';
}