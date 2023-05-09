CREATE DATABASE  IF NOT EXISTS `loja` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `loja`;
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
  `lancamento` date DEFAULT NULL,
  `desenvolvedora` varchar(30) DEFAULT NULL,
  `descricao` varchar(250) DEFAULT NULL,
  `plataforma_lancada` int DEFAULT NULL,
  `link` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`JogosId`),
  KEY `plataforma_lancada` (`plataforma_lancada`),
  CONSTRAINT `jogos_ibfk_1` FOREIGN KEY (`plataforma_lancada`) REFERENCES `plataforma` (`PlatId`)
) ENGINE=InnoDB AUTO_INCREMENT=104 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jogos`
--

LOCK TABLES `jogos` WRITE;
/*!40000 ALTER TABLE `jogos` DISABLE KEYS */;
INSERT INTO `jogos` VALUES (1,'Pokémon FireRed e LeafGreen','2004-01-24','Game Freak',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co1zip.png  -  https://images.igdb.com/igdb/image/upload/t_cover_big/co1ziq.png   '),(2,'Fire Emblem','2014-08-21','Intelligent Systems',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co287r.png'),(3,'Final Fantasy Tactics','2003-10-24','Square Enix',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyp.png'),(4,'Sword of Mana','2004-03-18','Square Enix',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co4pw9.png'),(5,'Tactics Ogre: The Knight of Lodis','2002-05-11','Quest',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co3bsk.png'),(6,'Pokémon Ruby e Sapphire','2002-11-21','Game Freak',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co1zhp.png  -  \"https://images.igdb.com/igdb/image/upload/t_cover_big/co1zhq.png'),(7,'Final Fantasy VI Advance','2007-06-29','Square Enix',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co2yh2.png'),(8,'Fire Emblem: The Sacred Stones','2015-01-01','Intelligent Systems\n\n',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co25q4.png'),(9,'Final Fantasy I e II: Dawn of Souls','2004-01-03','Square Enix',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co2xzm.png'),(10,'Mario & Luigi: Superstar Saga','2003-11-17','AlphaDream',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co21rg.png'),(11,'Golden Sun','2001-11-12','Camelot Software Planning',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co1uca.png'),(12,'Mother 3','2006-04-20','HAL Laboratory, Brownie Brown',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co668v.png'),(13,'F-Zero GP Legend','2004-09-20','Suzak',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co1tjx.png'),(14,'Konami Krazy Racers','2001-07-11','KCEK',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co4qw5.png'),(15,'Colin McRae Rally 2.0','2002-10-08','Spellbound',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co63hx.png'),(16,'Rock \'N Roll Racing','2003-06-23','Silicon & Synapse',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co3o1q.png'),(17,'GT Advance: Championship Racing ','2001-06-11','MTO',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co3rqq.png'),(18,'Moto Racer Advance','2002-12-04','Adeline Software International',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co3ho4.png'),(19,'Racing Gears Advance ','2005-02-08','Orbital Media',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co5y26.png'),(20,'F-Zero Maximum Velocity','2001-06-11','NDcube',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co1tjw.png'),(21,'Mario Kart: Super Circuit','2001-08-27','Intelligent Systems',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co214v.png'),(22,'Pokémon Emerald','2004-09-16','Game Freak',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co1zhr.png'),(23,'Super Mario World: Super Mario Advance 2','2002-04-12','Nintendo R&D2',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co229m.png'),(24,'Super Mario Advance','2001-03-21','Nintendo R&D2',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co21r7.png'),(25,'Super Mario Advance 4: Super Mario Bros. 3','2003-07-11','Nintendo R&D2',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co3tpt.png'),(26,'Namco Museum','2001-06-11','Mass Media Games',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co2czc.png'),(27,'Pac-Man Collection','2001-07-12','Mass Media Games',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co3dng.png'),(28,'Yoshi\'s Island: Super Mario Advance 3','2002-09-23','Nintendo R&D2',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co4ac4.png'),(29,'The Legend of Zelda: A Link to the Past','2002-12-02','Nintendo EAD\nFlagship',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co5x34.png'),(30,'Pokémon Mystery Dungeon: Red Rescue Team','2005-11-17','Chunsoft',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co21em.png'),(31,'Wario Land 4','2001-08-21','Nintendo R&D1',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co1wpx.png'),(32,'Kirby: Nightmare in Dream Land','2002-10-25','HAL Laboratory',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co1wcd.png'),(33,'Donkey Kong Country','2003-06-06','RARE',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co56kz.png'),(34,'The Legend of Zelda: The Minish Cap','2004-11-04','Flagship',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co3nsk.png'),(35,'Yu-Gi-Oh! The Eternal Duelist Soul','2001-07-05','Konami',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co5xdx.png'),(36,'Metroid Fusion','2002-11-17','Nintendo R&D1',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co3w49.png'),(37,'Kingdom Hearts: Chain of Memories','2004-11-11','Jupiter Square Enix',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co2wrx.png'),(38,'Sonic Advance','2001-12-20','Sonic Team Dimps',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co1upk.png'),(39,'Kirby & the Amazing Mirror','2004-04-15','HAL Laboratory Flagship Dimps',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co1w9u.png'),(40,'Dragon Ball Z: The Legacy of Goku','2002-05-14','Webfoot Technologies',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co1u9g.png'),(41,'Pokémon Pinball: Ruby & Sapphire','2003-08-01','Jupiter',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co1yya.png'),(42,'Mario vs. Donkey Kong','2004-05-24','Nintendo Software Technology',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co4prx.png'),(43,'Spyro: Season of Ice','2001-10-29','Digital Eclipse',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co1yqk.png'),(44,'Harry Potter and the Chamber of Secrets','2002-11-05','Eurocom Developments',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co3rbi.png'),(45,'WarioWare, Inc.: Mega Microgames!','2003-03-21','Nintendo R&D1',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co1wpz.png'),(46,'Golden Sun: The Lost Age','2002-06-28','Camelot Software Planning',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co25rt.png'),(47,'WarioWare: Twisted!','2004-10-14','Nintendo Intelligent Systems',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co1wqe.png'),(48,'Metal Slug Advance','2004-12-12','Noise Factory',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co2w75.png'),(49,'Tekken Advance','2001-12-21','Namco',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co45q0.png'),(50,'Spyro 2: Season of Flame','2002-09-25','Digital Eclipse',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co1yrx.png'),(51,'Spyro: Attack of the Rhynocs','2003-10-27','Digital Eclipse',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co48fc.png'),(52,'Spyro Orange: The Cortex Conspiracy	','2004-06-03','Vicarious Visions',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co1yqt.png'),(53,'Mega Man Battle Network 4.5: Real Operation	','2004-08-06','Capcom Production Studio 2',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co204k.png'),(54,'Crazy Taxi: Catch a Ride	','2003-04-09','Graphic State Games',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co5zcv.png'),(55,'Rugrats: I Gotta Go Party	','2002-11-08','Eurocom Entertainment Software',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co50ml.png'),(56,'Rugrats: Castle Capers	','2001-09-24','Software Creations',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/bpsok0i1m2uilwnpvzmm.png'),(57,'Cartoon Network: Block Party	','2004-08-05','Majesco Entertainment',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/det6ssocozvlscpzxzce.png'),(58,'Cartoon Network Speedway	','2003-12-17','DC Studios',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co5zdp.png'),(59,'Army Men: Operation Green	','2001-12-10','Pocket Studios',NULL,1,'https://images.igdb.com/igdb/image/upload/t_cover_big/zrugeg207ab3kcxjobnt.png'),(60,'Army Men Advance	','2001-06-11','DC Studios','',1,'https://images.igdb.com/igdb/image/upload/t_cover_big/co50mn.png'),(61,'The Lost Vikings 2	','1997-02-27','Blizzard Entertainment ',NULL,2,'https://images.igdb.com/igdb/image/upload/t_cover_big/co1u32.png'),(62,'Lufia II: Rise of the Sinistrals	','1995-02-24','Neverland',NULL,2,'https://images.igdb.com/igdb/image/upload/t_cover_big/co26fl.png'),(63,'Sparkster','1994-09-15','Konami',NULL,2,'https://images.igdb.com/igdb/image/upload/t_cover_big/co25xf.png'),(64,'Secret of Evermore	','1995-10-01','Square',NULL,2,'https://images.igdb.com/igdb/image/upload/t_cover_big/co2u7z.png'),(65,'Pocky & Rocky 2	','1994-06-17','Natsume',NULL,2,'https://images.igdb.com/igdb/image/upload/t_cover_big/co25vc.png'),(66,'Tetris Attack	','1996-08-26','NintendoR&D1 ',NULL,2,'https://images.igdb.com/igdb/image/upload/t_cover_big/co2w6k.png'),(67,'ACME Animation Factory	','1994-11-13','Sun Corporation of America',NULL,2,'https://images.igdb.com/igdb/image/upload/t_cover_big/co3zbq.png'),(68,'Bugs Bunny Rabbit Rampage	','1994-02-04','Viacom New Media',NULL,2,'https://images.igdb.com/igdb/image/upload/t_cover_big/co3b6q.png'),(69,'Mighty Morphin Power Rangers: The Fighting Edition','1995-09-21','Natsume',NULL,2,'https://images.igdb.com/igdb/image/upload/t_cover_big/co63ob.png'),(70,'Power Rangers Zeo: Battle Racers	','1996-09-17','Natsume',NULL,2,'https://images.igdb.com/igdb/image/upload/t_cover_big/co3az1.png'),(71,'Mighty Morphin Power Rangers	','1994-11-23','Natsume',NULL,2,'https://images.igdb.com/igdb/image/upload/t_cover_big/co63o4.png'),(72,'HAL\'s Hole in One Golf	','1991-02-23','HAL Laboratory',NULL,2,'https://images.igdb.com/igdb/image/upload/t_cover_big/co3gcc.png'),(73,'Inspector Gadget	','1993-12-02','Hudson Soft',NULL,2,'https://images.igdb.com/igdb/image/upload/t_cover_big/co5osj.png'),(74,'Super R.B.I. Baseball	','1995-06-12','Gray Matter',NULL,2,'https://images.igdb.com/igdb/image/upload/t_cover_big/co3c0f.png'),(75,'The Adventures of Batman & Robin	','1994-12-08','Konami',NULL,2,'https://images.igdb.com/igdb/image/upload/t_cover_big/co69sz.png'),(76,'The Magical Quest Starring Mickey Mouse	','1992-11-20','Capcom',NULL,2,'https://images.igdb.com/igdb/image/upload/t_cover_big/co63oy.png'),(77,'Rocko\'s Modern Life: Spunky\'s Dangerous Day	','1994-04-01','Nintendo',NULL,2,'https://images.igdb.com/igdb/image/upload/t_cover_big/co5vtr.png'),(78,'Choplifter III	','1994-01-17','Beam Software ',NULL,2,'https://images.igdb.com/igdb/image/upload/t_cover_big/co2din.png'),(79,'The Ren & Stimpy Show: Fire Dogs	','1994-07-12','Argonaut Games',NULL,2,'https://images.igdb.com/igdb/image/upload/t_cover_big/co5z9a.png'),(80,'SWAT Kats: The Radical Squadron	','1995-09-21','AIM Products',NULL,2,'https://www.igdb.com/games/swat-kats-the-radical-squadron'),(81,'Speedy Gonzales: Los Gatos Bandidos	','1995-08-11','Sunsoft, WB Games',NULL,2,'https://images.igdb.com/igdb/image/upload/t_cover_big/co3dfj.png'),(82,'Road Runner\'s Death Valley Rally	','1992-11-09','ICOM Simulations',NULL,2,'https://images.igdb.com/igdb/image/upload/t_cover_big/co2equ.png'),(83,'The Ren & Stimpy Show: Time Warp	','1994-11-06','Sculptured Software',NULL,2,'https://images.igdb.com/igdb/image/upload/t_cover_big/co5z9d.png'),(84,'Daffy Duck: The Marvin Missions	','1993-10-10','ICOM Simulations',NULL,2,'https://images.igdb.com/igdb/image/upload/t_cover_big/co3w88.png'),(85,'King Arthur & the Knights of Justice	','1995-05-25','Manley and Associates Inc',NULL,2,'https://images.igdb.com/igdb/image/upload/t_cover_big/co2xwd.png'),(86,'The Flintstones: The Treasure of Sierra Madrock	','1994-03-15','Taito',NULL,2,'https://images.igdb.com/igdb/image/upload/t_cover_big/co2wbg.png'),(87,'Ken Griffey Jr. Presents Major League Baseball	','1994-03-09','Software Creations',NULL,2,'https://images.igdb.com/igdb/image/upload/t_cover_big/co5yt0.png'),(88,'Jurassic Park Part 2: The Chaos Continues	','1995-01-01','Ocean Software',NULL,2,'https://images.igdb.com/igdb/image/upload/t_cover_big/co2zv4.png'),(89,'BioMetal	','1993-07-23','Athena',NULL,2,'https://images.igdb.com/igdb/image/upload/t_cover_big/co2w1u.png'),(90,'Jurassic Park	','1993-10-01','Ocean Software',NULL,2,'https://images.igdb.com/igdb/image/upload/t_cover_big/co2znx.png'),(91,'Metal Warriors	','1995-04-30','LucasArts',NULL,2,'https://images.igdb.com/igdb/image/upload/t_cover_big/co2crs.png'),(92,'Uniracers	','1994-08-18','DMA Design',NULL,2,'https://images.igdb.com/igdb/image/upload/t_cover_big/co2csj.png'),(93,'The Ninja Warriors	','1994-01-28','Natsume',NULL,2,'https://images.igdb.com/igdb/image/upload/t_cover_big/co2uu9.png'),(94,'Battle Cars	','1993-10-01','Malibu Interactive',NULL,2,'https://images.igdb.com/igdb/image/upload/t_cover_big/co5yv0.png'),(95,'Mortal Kombat Mythologies: Gold 2000	','1999-01-01','DVS Eletronic Co',NULL,2,'https://images.igdb.com/igdb/image/upload/t_cover_big/co5yt6.png'),(96,'Street Combat	','1993-04-09','Irem, NCS','',2,'https://images.igdb.com/igdb/image/upload/t_cover_big/co3so9.png'),(97,'Metroid Super Zero Mission','2011-10-22','SBniconico',NULL,2,'https://images.igdb.com/igdb/image/upload/t_cover_big/co4ojl.png'),(98,'Super Metroid ERIS','2012-07-05','Digital_Mantra',NULL,2,'https://images.igdb.com/igdb/image/upload/t_cover_big/co4og3.png'),(99,'Chrono Trigger: Flames of Eternity	','2010-09-07','RubyDragoons',NULL,2,'https://images.igdb.com/igdb/image/upload/t_cover_big/co4tgn.png'),(100,'Super Metroid: Redesign	','2006-06-01','Drewseph',NULL,2,'https://images.igdb.com/igdb/image/upload/t_cover_big/co4obd.png'),(101,'Wolverine: Adamantium Rage	','1994-09-25','Bits Studios',NULL,2,'https://images.igdb.com/igdb/image/upload/t_cover_big/co4p1h.png'),(102,'Batman Returns	','1993-02-26','Konami',NULL,2,'https://images.igdb.com/igdb/image/upload/t_cover_big/co3bsp.png'),(103,'Chrono Trigger','1995-08-11','Square',NULL,2,'https://upload.wikimedia.org/wikipedia/en/thumb/a/a7/Chrono_Trigger.jpg/220px-Chrono_Trigger.jpg');
/*!40000 ALTER TABLE `jogos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-08 20:18:19
