CREATE TABLE user_account (
  id INT PRIMARY KEY AUTO_INCREMENT,  
  firstname VARCHAR (100) NOT NULL,
  lastname VARCHAR (100) NOT NULL,
  email VARCHAR (100) NOT NULL,
  password VARCHAR (100) NOT NULL);
INSERT INTO user_account (id, firstname, lastname, email, password)
VALUES
(1,"Charles","Grosbras","charles@example.com","$argon2i$v=19$m=16,t=2,p=1$WlExTEVQNFpnSDFnbWFDSQ");



CREATE TABLE photo (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR (200) NOT NULL,
  place VARCHAR (200) NOT NULL,
  image VARCHAR (800) NOT NULL,
  user_account_id INT NOT NULL,
FOREIGN KEY (user_account_id) REFERENCES user_account(id)
);
INSERT INTO photo (id, title, place, image, user_account_id)
VALUES
(1,"Bateau abandonné", "à Etel","server/public/paysage/20150704_170046Bretagne Etel.jpg",1),
(2,"Avancée dans la mer", "Pleubian", "server/public/paysage/BretagneIMG_0539.JPG",1),
(3,"Bateaux à l'abandon", "à Etel","server/public/paysage/Etel_7Bretagne Etel.jpg",1),
(4,"Côte sauvage","à Quimiac","server/public/paysage/Pointe du RazIMG_4929.jpg",1),
(5,"Pointe du Raz", "en Bretagne","server/public/paysage/Pointe du RazIMG_5167 (2).JPG",1),
(6,"Mouillage de Lanséria","à Quimiac","server/public/paysage/Quimiac2021-06-06 11.20.36.jpg",1),
(7,"Maison du pêcheur","à Quimiac", "server/public/paysage/Quimiac20171024_191656.jpeg",1),
(8,"Marais salant","à Quimiac","server/public/paysage/QuimiacGourmandises (3).jpg",1),
(9,"Coucher de soleil","à Lanséria","server/public/paysage/Quimiacimage000000-2.jpg",1),
(10,"Côte","à Piriac","server/public/paysage/QuimiacIMG_3286.JPG",1),
(11,"Côte fleurie","à Quimiac","server/public/paysage/QuimiacIMG_7018.JPEG",1),
(12,"Mouillage","Piriac", "server/public/paysage/QuimiacIMG_8201.JPG",1),
(13,"Tempête","à Kerquabellec","server/public/paysage/QuimiacMER (4).jpg",1),
(14,"Entre terre et mer","marais salant","server/public/paysage/QuimiacMER (4).jpg",1),
(15,"Plage","Lanséria","server/public/paysage/Quimiacw end en bretagne_12.jpg",1),
(16,"Vieux bâteaux","Etel","server/public/paysage/W end famille Etel_6Bretagne Etel.jpg",1),
(17,"Manège","Nantes","server/public/Street/Nantes160F623A-95EB-43B4-9ABD-FF44C68E2A4E.jpg",1),
(18,"Place Royale","Nantes","server/public/Street/Nantes2016-02-12 14.30.56.jpg",1),
(19,"Passage Pommeray","Nantes","server/public/Street/Nantes17694154-8E2D-41C4-AE90-F49A55838514.jpg",1),
(20,"Les anneaux de Buren","Nantes","server/public/Street/NantesIMG_1483.JPEG",1),
(21,"Jeux des yeux","Nantes","server/public/Street/NantesIMG_6500.jpg",1),
(22,"Chateau des Ducs de Bretagne","Nantes","server/public/Street/NantesMiroir d'eau Nantes  (6).jpg",1),
(23,"Chateau de Nantes","Nantes","server/public/Street/NantesMiroir d'eau Nantes (13).jpg",1),
(24,"Tour Lu","Nantes","server/public/Street/NantesTour LU (2).jpg",1),
(25,"Reflets","Nantes", "server/public/Street/NantesTour LU.jpg",1),
(26,"scooters","Trentemoult","server/public/Street/Nantestrentmoult_4.jpg",1),
(27,"Coloré","Nantes","server/public/Street/Nantestrentmoult_6.jpg",1),
(28,"Opposition","Trentemoult","server/public/Street/Nantestrentmoult_13.jpg",1),
(29,"Dragon","Nantes","server/public/Street/Royal DeluxeIMG_20150820_092721.jpg",1),
(30,"Sagrada","Barcelone","server/public/Street/Sagrada de Familia2ème jour- Sagrada Familia (15).jpg",1),
(31,"Vers la mer","Biscarosse","server/public/tout-petit/Dune et Landes_9.jpg",1),
(32,"Naissance","Nantes","server/public/tout-petit/IMG_6450.jpg",1),
(33,"Grossesse","Nantes","server/public/tout-petit/Louka (2).jpg",1),
(34,"Petite main","Nantes","server/public/tout-petit/Louka 2 fév_1.jpg",1),
(35,"Bientôt","Nantes","server/public/tout-petit/Louka_1 (2).jpg",1),
(36,"Petit bonheur","Quimiac","server/public/tout-petit/P1040268.JPG",1),
(37,"La joie de la plage","Quimiac","server/public/tout-petit/Quimiac (30).JPG",1),
(38,"A croquer","Nantes","server/public/tout-petit/Simon 3 jours (9).JPG",1);




-- CREATE TABLE category (
--   id INT PRIMARY KEY AUTO_INCREMENT,
--   name VARCHAR (100) NOT NULL

-- );
-- INSERT INTO category (name)
-- VALUES
-- ("Paysage"),
-- ("Portrait"),
-- ("Tout petit");



-- CREATE TABLE category_photo (
--   photo_id INT NOT NULL,
--   category_id INT NOT NULL,
--   PRIMARY KEY (photo_id, category_id)
-- );
-- INSERT INTO category_photo (photo_id, category_id)
-- VALUES 
-- (1,1),
-- (2,1),
-- (3,2),
-- (4,2);