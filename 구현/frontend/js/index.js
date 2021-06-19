let fetchUrl = 'http://localhost:3000/api/camp/allCamp';
console.log('ok');
function getArticle(fetchUrl){
    fetch(fetchUrl).then(function(response) {
        if (response.status === 200 || response.status === 201) {
            console.log('connected');
            response.text().then(function(text) {
                // var campArray = JSON.parse(text.data);
                var list = document.getElementById('list');

                var campArray = JSON.parse(text);
                
                for (var i=0; i<(campArray['data'].length/2)+1; i++) {
                    list.innerHTML+='<div class="container"><p class="contents"><a href="/campsite" style="text-decoration: None;"><img src="../image/campImg.jpg" /><b>'
                        +campArray['data'][i*2]['name']
                    +'</b><br /><b style="size:0.8em;">★★★☆☆</b><br /><br /><br /><br /><b style="float:right">'
                    +'30000원</b></a></p><p class="contents"><a href="/campsite" style="text-decoration: None;"><img src="../image/campImg.jpg" /><b>'
                        +campArray['data'][i*2+1]['name']
                    +'</b><br /><b style="size:0.8em;">★★★☆☆</b><br /><br /><br /><br /><b style="float:right">'
                    +'30000원</b></a></p></div>';
                    list.appendChild(campinfo);
                }
            })
        } else { 
            console.log('err');
        }
    }).catch(err => console.log('err'));
}
getArticle(fetchUrl);
function go_register()
{
    location.href ='http://localhost:8085/register'
}
function go_login()
{
    location.href ='http://localhost:8085/login'
}

// fetch('http://localhost:3000/api/camp/allCamp').then((response) => console.log(response));