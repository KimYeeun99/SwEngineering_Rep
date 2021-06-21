const { addListener } = require("process");

function login()
{
    
    userInfo = {
                "id":  document.getElementById("id").value,
                "password":  document.getElementById("pw").value,
                "isHost": document.getElementById("1").checked 
                };
    fetch("http://localhost:3000/api/user/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo),
        })
        .then(res => res.json())
        .then((res) => {
            if (res.success == true) {
                alert('로그인 성공');
                go_url();
            }
            if (res.success  == false) {
                alert('로그인 실패');
        }  
        })
        .catch((err) => console.log(err));

}

function go_url(){
    location.href = 'http://localhost:8085/';
}
function go_register(){
    location.href ='http://localhost:8085/register'
}