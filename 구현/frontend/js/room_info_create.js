const { addListener } = require("process");

function PostRoom()
{
    
    Room = {
                name: document.getElementById("name").value,
                price: document.getElementById("price").value,
                info: document.getElementById("info").value,
                };
    fetch("http://localhost:3000/api/camp/insertRoom/1", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Room),
        })
        .then(res => res.json())
        .then((res) => {
            if (res.success == true) {
                alert('등록 성공');
                go_url();
            }
            if (res.success  == false) {
                alert('등록 실패');
        }  
        })
        .catch((err) => console.log(err));

}

function go_url(){
    location.href = 'http://localhost:8085/campsite';
}