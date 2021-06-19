console.log('ok');
function getReservation(){
    fetch('http://localhost:3000/api/reservation/hostReservation').then(function(response) {
        if (response.status === 200 || response.status === 201) {
            response.text().then(function(text) {
                // var campArray = JSON.parse(text.data);
                //var container = document.getElementById('container');
                var hostReservation = JSON.parse(text);
                console.log(hostReservation);
                for (var i=0; i<hostReservation['data'].length; i++) {
                    document.getElementById("reservation").innerHTML += '<p class="camp-list">'+
            '<span><img class="camp-image" src="../image/camp(12).jpg"></span><span>'+
            hostReservation['data'][i]['room']['name']+'</span><br /><span>예약자명: '+
            hostReservation['data'][i]['name']+'</span>'
                +'</span><br /><span>★★★☆☆</span><br /><span>'+
            hostReservation['data'][i]['startDate']+'~'+hostReservation['data'][i]['endDate']+'</span><br /><br/></p>'
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
    fetch("http://localhost:3000/api/user/delUser", {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then((res) => {
            if (res.success == true) {
                alert('탈퇴 되었습니다.');
                location.href = 'http://localhost:8085/home'
            }
            if (res.success  == false) {
                alert('탈퇴 실패');
        }  
        })
        .catch((err) => console.log(err));
    ;
}