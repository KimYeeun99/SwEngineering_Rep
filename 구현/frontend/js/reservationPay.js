let fetchUrl = 'http://localhost:3000/api/camp/detailCamp/1/1';
console.log('ok');
function getArticle(fetchUrl){
    fetch(fetchUrl).then(function(response) {
        if (response.status === 200 || response.status === 201) {
            console.log('connected');
            response.text().then(function(text) {
                // var campArray = JSON.parse(text.data);
                var campName = document.getElementById('campRoomInfo');
                var price = document.getElementById('priceBtn');
                
                var campArray = JSON.parse(text);

                campName.innerHTML += '<div style="font-size: 20px; font-weight:bolder; margin: 10px 0;">단체동 캠핑</div>'
                campName.innerHTML +='<div style="font-size: 16px; margin-bottom: 5px;">랜덤배정</div>'
                campName.innerHTML +='<div style="font-size: 16px; margin-bottom: 10px;">'+'</div>'
                campName.innerHTML +='<div style="font-size: 16px; color:gray; font-weight:bolder">'+campArray['data'].name+'</div>'

                price.innerHTML = campArray['data'].price + "원 결제하기";
                
                /*for (var i=0; i<2; i+=1) {
                    var campinfo = document.createElement("span");
                    container.innerHTML += "<div style='width:300px, flex-grow:1'><a href='/campsite/"+i+"' style='text-decoration: None:'>"
                    + "<img src='../image/campImg.jpg'/ style='height:200px'>"

                    campinfo.innerHTML += "<span class='campName'>"+campArray['data'][i].name+"</span>"
                    + "<span style='size:0.8em;'>★★★★☆</span>"
                    + "<span style='float:right'>130000원</span></a></span>"

                    container.appendChild(campinfo);
                }*/
            })
        } else { 
            console.log('err');
        }
    }).catch(err => console.log('err'));
}
getArticle(fetchUrl);
function Pay(){
    reservation = {room_id: 1,
                people: 1,
                name: document.getElementById("name").value,
                phone: document.getElementById("phone").value,
                price: 30000,
                startDate:"2021-06-11 00:00:00" ,
                endDate:"2021-06-12 00:00:00" };
    fetch("http://localhost:3000/api/reservation/insertReservation", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reservation),
        })
        .then(res => res.json())
        .then((res) => {
            console.log(res);
            if (res.success == true) {
                alert('등록 성공');
                go_url();
            }
            if (res.success  == false) {
                alert('등록 실패');}
        })
        .catch((err) => console.log(err));
}
function go_url(){
    location.href = 'http://localhost:8085/mypage';
}