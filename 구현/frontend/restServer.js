const http = require('http');
const fs = require('fs');
 
const users = {};
 
http.createServer((req,res)=>{
    if(req.method === 'GET'){
    // GET    
        if(req.url === '/'){
            return fs.readFile('./template/index.html', (err,data) => {
                if(err){
                    throw err;
                }
                res.end(data);
            });
        }if(req.url === '/home'){
            return fs.readFile('./template/index_non.html', (err,data) => {
                if(err){
                    throw err;
                }
                res.end(data);
            });
        }
        else if(req.url === '/register'){
            return fs.readFile('./template/signUp.html', (err,data) => {
                if(err){
                    throw err;
                }
                res.end(data);
            });
        }
        else if(req.url === '/login'){
            return fs.readFile('./template/login.html', (err,data) => {
                if(err){
                    throw err;
                }
                res.end(data);
            });
        }
        else if(req.url === '/mypage'){
            return fs.readFile('./template/customer_mypage.html', (err,data) => {
                if(err){
                    throw err;
                }
                res.end(data);
            });
        }else if(req.url === '/mypage/reservation'){
            return fs.readFile('./template/customer_reservation_list.html', (err,data) => {
                if(err){
                    throw err;
                }
                res.end(data);
            });
        }else if(req.url === '/mypage/review'){
            return fs.readFile('./template/my_review.html', (err,data) => {
                if(err){
                    throw err;
                }
                res.end(data);
            });
        }
        else if(req.url === '/mypage/review_write'){
            return fs.readFile('./template/review_create.html', (err,data) => {
                if(err){
                    throw err;
                }
                res.end(data);
            });
        }
        else if(req.url === '/host_mypage'){
            return fs.readFile('./template/host_mypage.html', (err,data) => {
                if(err){
                    throw err;
                }
                res.end(data);
            });
        }
        else if(req.url === '/manage_room'){
            return fs.readFile('./template/room_list_mypage.html', (err,data) => {
                if(err){
                    throw err;
                }
                res.end(data);
            });
        }
        else if(req.url === '/manage_camp'){
            return fs.readFile('./template/host_mypage.html', (err,data) => {
                if(err){
                    throw err;
                }
                res.end(data);
            });
        }
        else if(req.url === '/create_room'){
            return fs.readFile('./template/room_info_create.html', (err,data) => {
                if(err){
                    throw err;
                }
                res.end(data);
            });
        }
        else if(req.url === '/update_room'){
            return fs.readFile('./template/room_info_update.html', (err,data) => {
                if(err){
                    throw err;
                }
                res.end(data);
            });
        }
        else if(req.url === '/campsite'){
            return fs.readFile('./template/campsite.html', (err,data) => {
                if(err){
                    throw err;
                }
                res.end(data);
            });
        }
        else if(req.url === '/camp/review'){
            return fs.readFile('./template/camp_review_list.html', (err,data) => {
                if(err){
                    throw err;
                }
                res.end(data);
            });
        }
        else if(req.url === '/camp/room'){
            return fs.readFile('./template/room.html', (err,data) => {
                if(err){
                    throw err;
                }
                res.end(data);
            });
        }
        else if(req.url === '/room/reservation'){
            return fs.readFile('./template/reservationPay.html', (err,data) => {
                if(err){
                    throw err;
                }
                res.end(data);
            });
        }
        return fs.readFile(`.${req.url}`,(err,data) => {
            if(err){
                res.writeHead(404, 'NOT FOUND');
                return res.end('NOT FOUND');
            }
            return res.end(data);
        });
    }else if(req.method === 'POST'){
    //POST
        if(req.url === '/register'){
            let body = '';
            req.on('data',(data) => {
                body += data;
            });
 
            return req.on('end', ()=>{
                console.log('POST 본문(Body): ',body);
                const { name } = JSON.parse(body);
                const id = +new Date();
                users[id] = name;
                res.writeHead(201);
                res.end('등록 성공');
            });
        }
    }else if(req.method === 'PUT'){
    //PUT
        if(req.url.startsWith('/users/')){
            const key = req.url.split('/')[2];
            let body = '';
            req.on('data',(data)=>{
                body += data;
            });
            return req.on('end',()=>{
                console.log('PUT 본문(Body): ',body);
                users[key] = JSON.parse(body).name;
                return res.end(JSON.stringify(users));
            });
        }
    }else if(req.method === 'DELETE'){
    //DELETE
        if(req.url.startsWith('/users/')){
            const key = req.url.split('/')[2];
            delete users[key];
            return res.end(JSON.stringify(users));
        }    
    }
    res.writeHead(404, 'NOT FOUND');
    return res.end('NOT FOUND');
})
.listen(8085,()=>{
    console.log('8085번 포트에서 서버 대기 중입니다');
});
