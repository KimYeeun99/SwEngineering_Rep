/*user, host*/
insert user values("yeeunn99","1234","ee",false);
insert host values("yeeunn","1234",true,"eun","secret");

/*campInfo*/
insert into campInfo(name, writer, contents) values("가평 펜션","yeeunn","good camp");
insert into campInfo(name, writer, contents) values("강원도 펜션","yeeunn","bad camp");

/*room*/
insert into room(camp_id, name, price, info) values("1","가평 펜션","30000","good camp");
insert into room(camp_id, name, price, info) values("1","가평 펜션2","30000","good camp2");
insert into room(camp_id, name, price, info) values("2","강원도 펜션","30000","good camp");
insert into room(camp_id, name, price, info) values("2","강원도 펜션2","30000","good camp2");

/*reservation*/
insert into reservation(room_id, user_id, people, name, phone, price, startDate, endDate) values("1","yeeunn99","3","eun","010-2577","120000","2021-05-20","2021-05-21");
insert into reservation(room_id, user_id, people, name, phone, price, startDate, endDate) values("3","yeeunn99","2","kim","010-4244","120000","2021-05-24","2021-05-27");

/**/
insert into review(camp_id, user_id, rating, title, body) values("1","yeeunn99","3","good","good camping");
insert into review(camp_id, user_id, rating, title, body) values("1","yeeunn99","4","nice","nice camping");
insert into review(camp_id, user_id, rating, title, body) values("2","yeeunn99","5","bad","bad camping");