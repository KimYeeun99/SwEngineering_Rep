CREATE TABLE `User` (
	`id`	VARCHAR(20) 	NOT NULL,
	`password`	VARCHAR(255) 	NOT NULL,
	`nickname`	VARCHAR(10) 	NOT NULL,
    `isHost`	BOOLEAN NOT NULL DEFAULT FALSE,
	PRIMARY KEY(`id`)
);

CREATE TABLE `Host` (
	`id`	VARCHAR(20) 	NOT NULL,
	`password`	VARCHAR(255) 	NOT NULL,
    `isHost`	BOOLEAN NOT NULL DEFAULT TRUE,
    `name`	VARCHAR(10) 	NOT NULL,
    `businessNum`	VARCHAR(50) 	NOT NULL,
	PRIMARY KEY(`id`)
);

CREATE TABLE `CampInfo` (
	`id`	INTEGER AUTO_INCREMENT 	NOT NULL,
	`name`	VARCHAR(20) 	NOT NULL,
    `writer` VARCHAR(20)	NOT NULL,
    `regDate` TIMESTAMP 	DEFAULT NOW() ON UPDATE NOW(),
    `contents`	Text 	NOT NULL,
	PRIMARY KEY(`id`),
    FOREIGN KEY(`writer`) REFERENCES host(`id`) ON DELETE CASCADE
);

CREATE TABLE `Room` (
	`room_id`	INTEGER AUTO_INCREMENT 	NOT NULL,
    `camp_id` INTEGER,
	`name`	VARCHAR(20) 	NOT NULL,
    `price` INTEGER NOT NULL,
    `info`	Text 	NOT NULL,
	PRIMARY KEY(`room_id`),
    FOREIGN KEY(`camp_id`) REFERENCES CampInfo(`id`) ON DELETE CASCADE
);

CREATE TABLE `Reservation` (
	`reserve_id`	INTEGER AUTO_INCREMENT 	NOT NULL,
	`room_id`	INTEGER 	NOT NULL,
    `user_id` VARCHAR(20)	NOT NULL,
    `people` INTEGER NOT NULL DEFAULT 1,
    `name` VARCHAR(20) NOT NULL,
    `phone` VARCHAR(30) NOT NULL,
    `price` INTEGER NOT NULL,
    `startDate` TIMESTAMP,
    `endDate` TIMESTAMP,
	PRIMARY KEY(`reserve_id`),
    FOREIGN KEY(`room_id`) REFERENCES room(`room_id`) ON DELETE CASCADE,
    FOREIGN KEY(`user_id`) REFERENCES user(`id`) ON DELETE CASCADE
);

CREATE TABLE `Review` (
	`review_id` INTEGER AUTO_INCREMENT 	NOT NULL,
	`camp_id`	INTEGER NOT NULL,
	`user_id`	VARCHAR(20) 	NOT NULL,
    `rating` INTEGER,
    `title` VARCHAR(20) 	NOT NULL,
	`body`	Text 	NOT NULL,
	`regdate`	TIMESTAMP 	DEFAULT NOW() ON UPDATE NOW(),
	PRIMARY KEY(`review_id`),
    FOREIGN KEY(`camp_id`) REFERENCES campInfo(`id`) ON DELETE CASCADE,
	FOREIGN KEY(`user_id`) REFERENCES user(`id`) ON DELETE CASCADE
);
    