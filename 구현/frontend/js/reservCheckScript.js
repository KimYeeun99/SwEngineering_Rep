let fetchUrl = 'http://localhost:3000/api/camp/detailCamp/1/1';
console.log('ok');
function getArticle(fetchUrl){
    fetch(fetchUrl).then(function(response) {
        if (response.status === 200 || response.status === 201) {
            console.log('connected');
            response.text().then(function(text) {
                // var campArray = JSON.parse(text.data);
                var info = document.getElementById('campRoomInfo');
                var campArray = JSON.parse(text);
                info.innerHTML += '<div style="font-size: 20px; font-weight:bolder; margin: 10px 0;">단체동 캠핑</div>'
                info.innerHTML +='<div style="font-size: 16px; margin-bottom: 5px;">랜덤배정</div>'
                info.innerHTML +='<div style="font-size: 16px; margin-bottom: 10px;">'+campArray['data'].info+'</div>'
                info.innerHTML +='<div style="font-size: 16px; color:gray; font-weight:bolder">'+campArray['data'].name+'</div>'
                
                var roomInfo = document.getElementById('detailRoomInfo');
                roomInfo.innerHTML += campArray['data'].info;
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