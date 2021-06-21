const { addListener } = require("process");

function PostReview()
{
    
    review = {
                'camp_id': 1,
                'rating': 3,
                'title': document.getElementById("title").value,
                'body': document.getElementById("body").value,
                };
    fetch("http://localhost:3000/api/review/insertReview", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(review),
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
    location.href = 'http://localhost:8085/camp/review';
}