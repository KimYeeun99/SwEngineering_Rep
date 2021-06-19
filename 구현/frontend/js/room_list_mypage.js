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
                for (var i=0; i<(campArray['data']['rooms'].length/2)+2; i++) {
                    {
                    container.innerHTML += '<div class="container"><p class="contents"><img src="../image/camp(7).jpg" /><b>'
                +campArray['data']['rooms'][i*2].name
                +'</b><br /><b style="size:0.8em;">랜덤 배정</b><br />기준 4명/최대 8명<br /><br /><br />'
            +'<button type="button" class="btn btn-dark">삭제</button>'
            +'<button type="button" class="btn btn-outline-dark" onclick="updateGo()">수정</button></p><p class="contents"><img src="../image/camp(7).jpg" /><b>'
                +campArray['data']['rooms'][i*2+1].name
                +'</b><br /><b style="size:0.8em;">랜덤 배정</b><br />기준 4명/최대 8명<br /><br /><br />'
            +'<button type="button" class="btn btn-dark">삭제</button>'
            +'<button type="button" class="btn btn-outline-dark" onclick="updateGo()">수정</button></p></div>';}
                }
            })
        } else { 
            console.log('err');
        }
    }).catch(err => console.log('err'));
}
getArticle(fetchUrl);
function new_room(){
    location.href = 'http://localhost:8085/create_room';
}
function updateGo(){
    location.href = "http://localhost:8085/update_room"
}