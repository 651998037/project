-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: project
-- ------------------------------------------------------
-- Server version	8.0.33

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
-- Table structure for table `location_rs`
--

DROP TABLE IF EXISTS `location_rs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `location_rs` (
  `id` int NOT NULL AUTO_INCREMENT,
  `typeid` int DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `location` varchar(45) DEFAULT NULL,
  `img_lo` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location_rs`
--

LOCK TABLES `location_rs` WRITE;
/*!40000 ALTER TABLE `location_rs` DISABLE KEYS */;
INSERT INTO `location_rs` VALUES (58,2,'ห้องประชุม CC','ห้อง 101','8c850547-4baf-45f8-8b70-916a3fcb6054.jpg'),(59,1,'ห้องประชุม DD','พื้นที่กิจกรม 200','60ee6d8f-8129-44da-aa72-0c1aa0ae59bb.jpg'),(60,8,'โรงเรียน YY','ห้อง111','9fc891cc-2f74-4912-b30b-6f02d558693b.jpg'),(61,9,'ห้องประชุม LL','ห้อง 101','94da7fad-2fff-42d9-b3ef-8ed170c6b4e6.jpg'),(62,9,'ห้องประชุม LL','ห้อง 101','00f87a0f-1e68-4ec7-9f71-decc560b37d1.jpg'),(64,10,'ห้องประชุม NN','พื้นที่กิจกรม 110','cf5c6cdf-ee17-4a76-8f1e-dffd9b36fa3f.png');
/*!40000 ALTER TABLE `location_rs` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-12-11 19:15:03
