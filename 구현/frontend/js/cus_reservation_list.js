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
                document.getElementById("num").innerHTML += '총'+userReservation['data'].length+'개';
                for (var i=0; i<userReservation['data'].length; i++) {
                    document.getElementById("reservation").innerHTML += 
                    '<div class="container"><p class="contents"><span><img class="camp-image" src="../image/camp(12).jpg"></span><span>'
                    +userReservation['data'][i]['room']['name']
                    +'</span><br /><span>★★★☆☆</span><br /><span>'
                    +userReservation['data'][i]['endDate']+'~'+userReservation['data'][i]['startDate']
                    +'</span><br /><button type="button" class="btn btn-outline-dark" onclick="goReviewWriter()">리뷰쓰기</button><br /></p></div>';
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