-- MySQL dump 10.13  Distrib 8.0.32, for Win64 (x86_64)
--
-- Host: localhost    Database: loja
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `jogos`
--

DROP TABLE IF EXISTS `jogos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jogos` (
  `JogosId` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(50) NOT NULL,
  `valor` decimal(5,2) DEFAULT NULL,
  `categoria` varchar(30) DEFAULT NULL,
  `lancamento` date DEFAULT NULL,
  `desenvolvedora` varchar(30) DEFAULT NULL,
  `descricao` varchar(250) DEFAULT NULL,
  `plataforma_lancada` int DEFAULT NULL,
  PRIMARY KEY (`JogosId`),
  KEY `plataforma_lancada` (`plataforma_lancada`),
  CONSTRAINT `jogos_ibfk_1` FOREIGN KEY (`plataforma_lancada`) REFERENCES `plataforma` (`PlatId`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jogos`
--

LOCK TABLES `jogos` WRITE;
/*!40000 ALTER TABLE `jogos` DISABLE KEYS */;
INSERT INTO `jogos` VALUES (1,'Pokémon FireRed e LeafGreen',40.90,'RPG','2004-01-24','Game Freak',NULL,1),(2,'Fire Emblem',50.90,'RPG','2014-08-21','Intelligent Systems',NULL,1),(3,'Final Fantasy Tactics',50.90,'RPG','2003-10-24','Square Enix',NULL,1),(4,'Sword of Mana',45.90,'RPG','2004-03-18','Square Enix',NULL,1),(5,'Tactics Ogre: The Knight of Lodis',43.90,'RPG','2002-05-11','Quest',NULL,1),(6,'Pokémon Ruby e Sapphire',55.90,'RPG','2002-11-21','Game Freak',NULL,1),(7,'Final Fantasy VI Advance',55.90,'RPG','2007-06-29','Square Enix',NULL,1),(8,'Fire Emblem: The Sacred Stones',35.50,'RPG','2015-01-01','Intelligent Systems\n\n',NULL,1),(9,'Final Fantasy I e II: Dawn of Souls',40.90,'RPG','2004-01-03','Square Enix',NULL,1),(10,'Mario & Luigi: Superstar Saga',20.90,'RPG','2003-11-17','AlphaDream',NULL,1),(11,'Golden Sun',37.90,'RPG','2001-11-12','Camelot Software Planning',NULL,1),(12,'Mother 3',15.90,'RPG','2006-04-20','HAL Laboratory, Brownie Brown',NULL,1),(13,'F-Zero GP Legend',20.90,'Corrida','2004-09-20','Suzak',NULL,1),(14,'Konami Krazy Racers',22.90,'Corrida','2001-07-11','KCEK',NULL,1),(15,'Colin McRae Rally 2.0',17.90,'Corrida','2002-10-08','Spellbound',NULL,1),(16,'Rock \'N Roll Racing',50.90,'Corrida','2003-06-23','Silicon & Synapse',NULL,1),(17,'GT Advance: Championship Racing ',47.90,'Corrida','2001-06-11','MTO',NULL,1),(18,'Moto Racer Advance',40.90,'Corrida','2002-12-04','Adeline Software International',NULL,1),(19,'Racing Gears Advance ',18.90,'Corrida','2005-02-08','Orbital Media',NULL,1),(20,'F-Zero Maximum Velocity',35.90,'Corrida','2001-06-11','NDcube',NULL,1),(21,'Mario Kart: Super Circuit',60.90,'Corrida','2001-08-27','Intelligent Systems',NULL,1),(22,'Pokémon Emerald',45.90,'RPG','2004-09-16','Game Freak',NULL,1),(23,'Super Mario World: Super Mario Advance 2',39.90,'Ação, Plataforma, Aventura','2002-04-12','Nintendo R&D2',NULL,1),(24,'Super Mario Advance',41.90,'Ação, Plataforma, Aventura','2001-03-21','Nintendo R&D2',NULL,1),(25,'Super Mario Advance 4: Super Mario Bros. 3',45.90,'Plataforma','2003-07-11','Nintendo R&D2',NULL,1),(26,'Namco Museum',50.90,'Variado','2001-06-11','Mass Media Games',NULL,1),(27,'Pac-Man Collection',47.90,'labirinto','2001-07-12','Mass Media Games',NULL,1),(28,'Yoshi\'s Island: Super Mario Advance 3',38.90,'Ação,Plataforma','2002-09-23','Nintendo R&D2',NULL,1),(29,'The Legend of Zelda: A Link to the Past',50.90,'Ação,RPG','2002-12-02','Nintendo EAD\nFlagship',NULL,1),(30,'Pokémon Mystery Dungeon: Red Rescue Team',38.90,'RPG','2005-11-17','Chunsoft',NULL,1),(31,'Wario Land 4',30.90,'Plataforma','2001-08-21','Nintendo R&D1',NULL,1),(32,'Kirby: Nightmare in Dream Land',45.90,'Ação,Plataforma','2002-10-25','HAL Laboratory',NULL,1),(33,'Donkey Kong Country',60.90,'Ação,Plataforma','2003-06-06','RARE',NULL,1),(34,'The Legend of Zelda: The Minish Cap',26.90,'Ação','2004-11-04','Flagship',NULL,1),(35,'Yu-Gi-Oh! The Eternal Duelist Soul',46.90,'Cartas','2001-07-05','Konami',NULL,1),(36,'Metroid Fusion',46.90,'Ação,Plataforma','2002-11-17','Nintendo R&D1',NULL,1),(37,'Kingdom Hearts: Chain of Memories',53.90,'Ação,RPG','2004-11-11','Jupiter Square Enix',NULL,1),(38,'Sonic Advance',64.90,'Plataforma','2001-12-20','Sonic Team Dimps',NULL,1),(39,'Kirby & the Amazing Mirror',43.90,'Plataforma','2004-04-15','HAL Laboratory Flagship Dimps',NULL,1),(40,'Dragon Ball Z: The Legacy of Goku',20.90,'Ação','2002-05-14','Webfoot Technologies',NULL,1),(41,'Pokémon Pinball: Ruby & Sapphire',20.90,'Ação','2003-08-01','Jupiter',NULL,1),(42,'Mario vs. Donkey Kong',36.90,'Plataforma','2004-05-24','Nintendo Software Technology',NULL,1),(43,'Spyro: Season of Ice',43.90,'Plataforma,RPG','2001-10-29','Digital Eclipse',NULL,1),(44,'Harry Potter and the Chamber of Secrets',23.90,'Ação,Aventura','2002-11-05','Eurocom Developments',NULL,1),(45,'WarioWare, Inc.: Mega Microgames!',14.90,'Ação','2003-03-21','Nintendo R&D1',NULL,1),(46,'Golden Sun: The Lost Age',34.90,'RPG','2002-06-28','Camelot Software Planning',NULL,1),(47,'WarioWare: Twisted!',23.90,'Ação,Puzzle','2004-10-14','Nintendo Intelligent Systems',NULL,1);
/*!40000 ALTER TABLE `jogos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `plataforma`
--

DROP TABLE IF EXISTS `plataforma`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `plataforma` (
  `PlatId` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(40) DEFAULT NULL,
  PRIMARY KEY (`PlatId`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `plataforma`
--

LOCK TABLES `plataforma` WRITE;
/*!40000 ALTER TABLE `plataforma` DISABLE KEYS */;
INSERT INTO `plataforma` VALUES (1,'GameBoy Advance'),(2,'--');
/*!40000 ALTER TABLE `plataforma` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'loja'
--

--
-- Dumping routines for database 'loja'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-28 16:04:46
