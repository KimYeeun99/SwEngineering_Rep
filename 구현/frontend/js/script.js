let fetchUrl = 'http://localhost:3000/api/camp/allCamp';
console.log('ok');
function getArticle(fetchUrl){
    fetch(fetchUrl).then(function(response) {
        if (response.status === 200 || response.status === 201) {
            console.log('connected');
            response.text().then(function(text) {
                // var campArray = JSON.parse(text.data);
                var container = document.getElementById('container');

                var campArray = JSON.parse(text);
                
                for (var i=0; i<3; i++) {
                    document.getElementById("container").innerHTML += "<div>"+campArray['data'][i].name+"</div>";
                    document.getElementById("container").innerHTML += "<img src=../image/campImg.jpg style='height:200px'>"
                    document.getElementById("container").innerHTML += campArray['data'][i].regDate;
                    document.getElementById("container").innerHTML += campArray['data'][i].contents;
                }
            })
        } else { 
            console.log('err');
        }
    }).catch(err => console.log('err'));
}
getArticle(fetchUrl);


// fetch('http://localhost:3000/api/camp/allCamp').then((response) => console.log(response));