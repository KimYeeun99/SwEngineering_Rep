console.log('ok');
function getReservation(){
    fetch('http://localhost:3000/api/reservation/userReservation').then(function(response) {
        if (response.status === 200 || response.status === 201) {
            console.log('connected');
            response.text().then(function(text) {
                // var campArray = JSON.parse(text.data);
                //var container = document.getElementById('container');
                var userReservation = JSON.parse(text);
                console.log(userReservation);
                document.getElementById("nickname").innerHTML += userReservation['data'][0]['customer']['nickname'];
                for (var i=0; i<userReservation['data'].length; i++) {
                    document.getElementById("reservation").innerHTML += '<p class="camp-list">'+
            '<span><img class="camp-image" src="../image/camp(12).jpg"></span><span>'+
            userReservation['data'][i]['room']['name']
                +'</span><br /><span>★★★☆☆</span><br /><span>'+
            userReservation['data'][i]['startDate']+'~'+userReservation['data'][i]['endDate']+'</span><br /><button type="button" class="btn btn-outline-dark" onclick="goReviewWriter()">리뷰쓰기</button><br /><br/></p>'
                }


            })
        } else { 
            alert(response.status);
            console.log(response);
            console.log('err');
        }
    }).catch(err => console.log('err'));
}
getReservation();
function goReviewWriter(){
    location.href = 'http://localhost:8085/mypage/review_write';
}
function logout(){
    alert("로그아웃 되었습니다.");
    location.href = 'http://localhost:8085/home';
}
function withdraw(){
    alert("탈퇴 되었습니다.");
    location.href = 'http://localhost:8085/home';
}