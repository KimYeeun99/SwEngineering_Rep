let fetchUrl = 'http://localhost:3000/api/camp/detailCamp/1';
console.log('ok');
function getArticle(fetchUrl){
    fetch(fetchUrl).then(function(response) {
        if (response.status === 200 || response.status === 201) {
            console.log('connected');
            response.text().then(function(text) {
                // var campArray = JSON.parse(text.data);
                var container = document.getElementById('list');
                
                var campArray = JSON.parse(text);
                for (var i=0; i<campArray['data']['rooms'].length; i++) {
                    container.innerHTML += '<p class="camp-list"><span><img class="camp-image" src="../image/camproom.jpg"></span>'+
                    '<span style="font-size:18px;"><b>'+campArray['data']['rooms'][i].name+'</b></span><br /><br/>'+
                    '<span><b>랜덤 배정</b></span><br /><br/>'+
                    '<span style="color:gray;">'+campArray['data']['rooms'][i].price+'원</span><br/><br/>'+
                    '<span>'+'</span>'+
                    '<br />'+
                    '<br />'+
                    '<br />'+
                    '</p>'+
                    '</a></div>';
                }
            })
        } else { 
            console.log('err');
        }
    }).catch(err => console.log('err'));
}
getArticle(fetchUrl);