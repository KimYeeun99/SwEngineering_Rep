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
                document.getElementById("num").innerHTML += '후기 총 '+userReview['data'].length+'개';
                for (var i=0; i<userReview['data'].length; i++) {
                    document.getElementById("review").innerHTML += 
                    '<div class="container"><p class="contents"><span><img class="user-image" src="../image/user.PNG"></span><span>★★★☆☆</span><div style="float: right;">'
            +userReview['data'][i]['regDate']+
            '</div><div class="user-name">'+userReview['data'][i]['user_id']+'</div></br><div>'
            +userReview['data'][i]['body']
            +'</div></p></div>';}
            })
        } else { 
            alert(response.status);
            console.log(response);
            console.log('err');
        }
    }).catch(err => console.log('err'));
}
getReview();
