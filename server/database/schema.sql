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
  image VARCHAR (800) NOT NULL
);

INSERT INTO photo (id, title, place, image)
VALUES
(1,"Côte sauvage","Guérande","https://upload.wikimedia.org/wikipedia/commons/0/04/Le_croisic_la_cote_sauvage.jpg"),
(2,"Côte sauvage", "Belle Ile", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Cote-sauvage-belle-ile.JPG/960px-Cote-sauvage-belle-ile.JPG"),
(3, "Côte", "Le Croisic", "https://upload.wikimedia.org/wikipedia/commons/c/ce/Le_Croisic_cote_sauvage.jpg"),
(4,"Pointe de Sorlock","à Quimiac","https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Pointe_de_Sorlok_a_Quimiac.jpg/960px-Pointe_de_Sorlok_a_Quimiac.jpg"),
(5,"Port", "Piriac", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Port_Piriac.jpg/960px-Port_Piriac.jpg"),
(6,"Chemin des Douaniers","Quimiac","https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/C%C3%B4te_sauvage_%28Piriac%29_01.jpg/960px-C%C3%B4te_sauvage_%28Piriac%29_01.jpg"),
(7,"Marais de la Brière", "Mesquer", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Bri%C3%A8re_9.jpg/1280px-Bri%C3%A8re_9.jpg"),
(8,"Maison à toit de chaume","Saint-Lyphard", "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Kerhinet_%28Saint-Lyphard%29_01.jpg/1920px-Kerhinet_%28Saint-Lyphard%29_01.jpg"),
(9,"Port de la Turballe", "La Turballe", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Turballe_port.JPG/1280px-Turballe_port.JPG"),
(10,"Pointe du Castelli", "Piriac", "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/S%C3%A9maphore_Piriac_1.jpg/1280px-S%C3%A9maphore_Piriac_1.jpg"),
(11,"La grotte à Madame", "Piriac", "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Piriac_Madame_IMG_20220422_111616_mod.jpg/1280px-Piriac_Madame_IMG_20220422_111616_mod.jpg"),
(12,"Pointe du Raz", "Finistère","https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/0_La_Pointe_du_Raz_%C3%A0_Plogoff_%281%29.JPG/1280px-0_La_Pointe_du_Raz_%C3%A0_Plogoff_%281%29.JPG"),
(13,"Côte","Finistere","https://upload.wikimedia.org/wikipedia/commons/c/c5/C%C3%B4te_nord_Cap_Sizun.jpg"),
(14,"Cap Sizun","Bretagne","https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/965_Cl%C3%A9den-Cap-Sizun_Vorlen.jpg/1280px-965_Cl%C3%A9den-Cap-Sizun_Vorlen.jpg"),
(15,"Port","Le Pouliguen","https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Quai_Jules_Sandeau.jpg/1280px-Quai_Jules_Sandeau.jpg");