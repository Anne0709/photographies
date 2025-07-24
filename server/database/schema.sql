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
(1,"test","nantes","/mouse.jpg",1),
(2,"Chauve-souris", "test", "/Chauve_souris.jpg",1),
(3, "Tigre", "tes", "/Tiger.jpg", 1);