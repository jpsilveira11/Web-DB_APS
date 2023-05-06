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
-- Table structure for table `jogos_categorias`
--

DROP TABLE IF EXISTS `jogos_categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jogos_categorias` (
  `jogos_id` int DEFAULT NULL,
  `categorias_id` int DEFAULT NULL,
  KEY `jogos_id` (`jogos_id`),
  KEY `categorias_id` (`categorias_id`),
  CONSTRAINT `jogos_categorias_ibfk_1` FOREIGN KEY (`jogos_id`) REFERENCES `jogos` (`JogosId`),
  CONSTRAINT `jogos_categorias_ibfk_2` FOREIGN KEY (`categorias_id`) REFERENCES `categorias` (`categorias_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jogos_categorias`
--

LOCK TABLES `jogos_categorias` WRITE;
/*!40000 ALTER TABLE `jogos_categorias` DISABLE KEYS */;
INSERT INTO `jogos_categorias` VALUES (1,5),(1,12),(1,1),(2,1),(3,1),(4,1),(5,1),(6,1),(6,5),(6,12),(7,1),(8,1),(9,1),(10,1),(11,1),(12,1),(13,10),(14,10),(15,10),(16,10),(17,10),(18,10),(19,10),(20,10),(21,10),(22,1),(23,2),(23,3),(23,5),(24,2),(24,3),(24,5),(25,3),(26,11),(27,9),(28,2),(28,3),(29,1),(29,2),(30,1),(31,3),(32,2),(32,3),(33,2),(33,3),(34,2),(35,7),(36,2),(36,3),(37,1),(37,2),(38,3),(39,3),(40,2),(41,2),(42,3),(43,1),(43,3),(44,2),(44,5),(45,2),(46,1),(47,2),(47,4),(48,3),(48,6),(49,8),(50,3);
/*!40000 ALTER TABLE `jogos_categorias` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-06 17:42:41
