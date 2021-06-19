console.log('ok');
function getReview(){
    fetch('http://localhost:3000/api/review/allReview/1').then(function(response) {
        if (response.status === 200 || response.status === 201) {
            console.log('connected');
            response.text().then(function(text) {
                // var campArray = JSON.parse(text.data);
                //var container = document.getElementById('container');
                var userReview = JSON.parse(text);
                console.log(userReview);
                document.getElementById("num").innerHTML += '내가 쓴 리뷰 총 '+userReview['data'].length+'개';
                for (var i=0; i<(userReview['data'].length/2)+1; i++) {
                    document.getElementById("review").innerHTML += '<div class="container"><p class="contents"><span style="color: black">가평 물푸른 펜션</span>'
                +'<button type="button" class="btn btn-outline-dark">삭제</button>'
                +'<button type="button" class="btn btn-dark" >수정</button>'
                +'<br /><span>'
                +userReview['data'][i*2]['regDate']+'</span>'+
                '<img src="../image/picture.jpeg" /</p>'+userReview['data'][i*2]['body']
                +'<p class="contents"><span style="color: black">가평 물푸른 펜션</span>'
                +'<button type="button" class="btn btn-outline-dark">삭제</button>'
                +'<button type="button" class="btn btn-dark" >수정</button>'
                +'<br /><span>'
                +userReview['data'][i*2+1]['regDate']+'</span>'+
                '<img src="../image/picture.jpeg" /</p>'+userReview['data'][i*2+1]['body']+'</div>';
            }
            })
        } else { 
            alert(response.status);
            console.log(response);
            console.log('err');
        }
    }).catch(err => console.log('err'));
}
getReview();
