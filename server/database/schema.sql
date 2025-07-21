CREATE TABLE user_account (
  id INT PRIMARY KEY AUTO_INCREMENT,  
  firstname VARCHAR (100) NOT NULL,
  lastname VARCHAR (100) NOT NULL,
  email VARCHAR (100) NOT NULL,
  password VARCHAR (100) NOT NULL,
  image VARCHAR (800) NOT NULL,
);


CREATE TABLE photo (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR (200) NOT NULL,
  place VARCHAR (200) NOT NULL,
  image VARCHAR (800) NOT NULL,
user_account_id INT NOT NULL,
);
INSERT INTO photo (title, image)
VALUES
("Bateau abandonné" "à Etel","server/public/paysage/20150704_170046Bretagne Etel.jpg" ),
("Avancée dans la mer" "à Pleubian", "server/public/paysage/BretagneIMG_0539.JPG"),
("Bateaux à l'abandon" "à Etel","server/public/paysage/Etel_7Bretagne Etel.jpg"),
("Côte sauvage","à Quimiac","server/public/paysage/Pointe du RazIMG_4929.jpg"),
("server/public/Pointe du RazIMG_5167 (2).JPG", "en Bretagne","server/public/paysage/Pointe du RazIMG_5167 (2).JPG"),
("Mouillage de Lanséria","à Quimiac""server/public/paysage/Quimiac2021-06-06 11.20.36.jpg"),
("Maison du pêcheur","à Quimiac", "server/public/paysage/Quimiac20171024_191656.jpeg"),
("Marais salant","à Quimiac","server/public/paysage/QuimiacGourmandises (3).jpg"),
("Coucher de soleil","à Lanséria","server/public/paysage/Quimiacimage000000-2.jpg"),
("Côte","à Piriac","server/public/paysage/QuimiacIMG_3286.JPG"),
("Côte fleurie","à Quimiac","server/public/paysage/QuimiacIMG_7018.JPEG"),
("Mouillage","", "server/public/paysage/QuimiacIMG_8201.JPG"),
("Tempête","à Kerquabellec","server/public/paysage/QuimiacMER (4).jpg"),
("Entre terre et mer","marais salant","server/public/paysage/QuimiacMER (4).jpg"),
("Plage","Lanséria","server/public/paysage/Quimiacw end en bretagne_12.jpg"),
("Vieux bâteaux","Etel","server/public/paysage/W end famille Etel_6Bretagne Etel.jpg"),

("Manège","Nantes","server/public/Street/Nantes160F623A-95EB-43B4-9ABD-FF44C68E2A4E.jpg"),
("Place Royale","Nantes","server/public/Street/Nantes2016-02-12 14.30.56.jpg"),
("Passage Pommeray""Nantes""server/public/Street/Nantes17694154-8E2D-41C4-AE90-F49A55838514.jpg"),
("Les anneaux de Buren","Nantes","server/public/Street/NantesIMG_1483.JPEG"),
("Jeux des yeux","Nantes","server/public/Street/NantesIMG_6500.jpg"),
("Chateau des Ducs de Bretagne","Nantes","server/public/Street/NantesMiroir d'eau Nantes  (6).jpg"),
("Chateau de Nantes","Nantes","server/public/Street/NantesMiroir d'eau Nantes (13).jpg"),
("Tour Lu","Nantes","server/public/Street/NantesTour LU (2).jpg"),
("Reflets","Nantes", "server/public/Street/NantesTour LU.jpg"),
("scooters","Trentemoult""server/public/Street/Nantestrentmoult_4.jpg"),
("Coloré","Nantes","server/public/Street/Nantestrentmoult_6.jpg"),
("Opposition","Trentemoult","server/public/Street/Nantestrentmoult_13.jpg"),
("Dragon","Nantes","server/public/Street/Royal DeluxeIMG_20150820_092721.jpg"),
("Sagrada","Barcelone""server/public/Street/Sagrada de Familia2ème jour- Sagrada Familia (15).jpg"),



("Vers la mer","Biscarosse","server/public/tout-petit/Dune et Landes_9.jpg"),
("Naissance","Nantes","server/public/tout-petit/IMG_6450.jpg"),
("Grossesse","Nantes","server/public/tout-petit/Louka (2).jpg"),
("Petite main","Nantes","server/public/tout-petit/Louka 2 fév_1.jpg"),
("Bientôt","Nantes","server/public/tout-petit/Louka_1 (2).jpg"),
("Petit bonheur","Quimiac","server/public/tout-petit/P1040268.JPG"),
("La joie de la plage","Quimiac","server/public/tout-petit/Quimiac (30).JPG"),
("A croquer","Nantes""server/public/tout-petit/Simon 3 jours (9).JPG");




CREATE TABLE category (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR (100) NOT NULL,
);
INSERT INTO category (name)
VALUES
("Paysage", FALSE),
("Portrait", TRUE),
("Tout petit", FALSE);



CREATE TABLE category_photo (
  photo_id INT NOT NULL,
  category_id INT NOT NULL,
  PRIMARY KEY (photo_id, category_id),
);
INSERT INTO category_photo (photo_id, category_id)
VALUES 