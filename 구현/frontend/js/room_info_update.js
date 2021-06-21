const { addListener } = require("process");

function UpdateRoom()
{
    
    Room = {
                name: document.getElementById("name").value,
                price: document.getElementById("price").value,
                info: document.getElementById("info").value,
                };
    fetch("http://localhost:3000/api/camp/updateRoom/1", {
            method: 'UPDATE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(Room),
        })
        .then(res => res.json())
        .then((res) => {
            if (res.success == true) {
                alert('수정 성공');
                go_url();
            }
            if (res.success  == false) {
                alert('수정 실패');
        }  
        })
        .catch((err) => console.log(err));

}

function go_url(){
    location.href = 'http://localhost:8085/camp/room';
}