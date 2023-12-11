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
-- Table structure for table `reserve`
--

DROP TABLE IF EXISTS `reserve`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reserve` (
  `id` int NOT NULL AUTO_INCREMENT,
  `roomname` int DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `phone` varchar(225) DEFAULT NULL,
  `usedfor` int DEFAULT NULL,
  `startdatetime` datetime DEFAULT NULL,
  `enddatetime` datetime DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `equipment` varchar(45) DEFAULT NULL,
  `approve` varchar(45) DEFAULT NULL,
  `affiliation` varchar(45) DEFAULT NULL,
  `group_name` varchar(45) DEFAULT NULL,
  `position` varchar(45) DEFAULT NULL,
  `to_name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `name_idx` (`roomname`)
) ENGINE=InnoDB AUTO_INCREMENT=259 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reserve`
--

LOCK TABLES `reserve` WRITE;
/*!40000 ALTER TABLE `reserve` DISABLE KEYS */;
INSERT INTO `reserve` VALUES (236,60,'AA BB','251487652',20,'2023-11-05 13:47:00','2023-11-05 15:47:00','2023-11-05 13:47:44','1.เก้าอี้ 2.แก้ว 3.เครื่องฉาย','1','PP','1','HR','PP'),(237,57,'AA BB','0000000000',20,'2023-11-13 17:53:00','2023-11-13 20:53:00','2023-11-05 13:53:58','1.เก้าอี้ 2.แก้ว 3.เครื่องฉาย','0','PP','1','HR','PP'),(238,61,'AA BB','0000000000',20,'2023-11-09 16:50:00','2023-11-09 16:55:00','2023-11-05 16:50:28','1.เก้าอี้ 2.แก้ว 3.เครื่องฉาย','1','PP','0','HR','PP'),(239,60,'AA BB','0000000000',20,'2023-11-08 14:26:00','2023-11-08 15:26:00','2023-11-08 14:26:26','1.เก้าอี้ 2.แก้ว 3.เครื่องฉาย','0','PP','1','HR','PP'),(240,60,'AA BB','0000000000',20,'2023-11-08 14:26:00','2023-11-08 14:27:00','2023-11-08 14:27:45','1.เก้าอี้ 2.แก้ว 3.เครื่องฉาย','0','PP','1','HR','PP'),(241,60,'AA BB','0000000000',20,'2023-11-08 14:26:00','2023-11-08 14:28:00','2023-11-08 14:34:08','1.เก้าอี้ 2.แก้ว 3.เครื่องฉาย','1','PP','1','HR','PP'),(242,60,'AA BB','0000000000',20,'2023-11-08 14:27:00','2023-11-08 14:26:00','2023-11-08 14:34:32','1.เก้าอี้ 2.แก้ว 3.เครื่องฉาย','1','PP','1','HR','PP'),(243,60,'AA BB','251487652',15,'2023-11-08 16:26:00','2023-11-08 16:30:00','2023-11-08 16:26:18','','1','0','1','HR','PP'),(244,60,'AA BB','0000000000',15,'2023-11-08 16:26:00','2023-11-08 16:27:00','2023-11-08 16:26:39','กล้อง',NULL,'0','1','HR','PP'),(245,60,'AA BB','0000000000',15,'2023-11-08 16:27:00','2023-11-08 16:28:00','2023-11-08 16:27:14','กล้อง',NULL,'0','1','HR','PP'),(246,59,'AA BB','251487652',15,'2023-11-12 23:25:00','2023-11-12 23:30:00','2023-11-12 23:26:10','','1','PP','1','II','ปะชุม'),(247,59,'FF OO','0000000000',20,'2023-11-12 23:25:00','2023-11-12 23:27:00','2023-11-12 23:26:56','','1','PP','1','HR','ปะชุม'),(248,59,'FF OO','0000000000',20,'2023-11-12 23:25:00','2023-11-12 23:32:00','2023-11-12 23:31:18','','1','PP','1','HR','ปะชุม'),(249,59,'FF OO','0000000000',20,'2023-11-12 23:25:00','2023-11-12 23:35:00','2023-11-12 23:35:31','','1','PP','1','HR','ปะชุม'),(250,59,'FF OO','0000000000',20,'2023-11-12 23:25:00','2023-11-12 23:37:00','2023-11-12 23:37:51','',NULL,'PP','1','HR','ปะชุม'),(251,59,'FF OO','0000000000',20,'2023-11-12 23:25:00','2023-11-12 23:40:00','2023-11-12 23:40:16','','1','PP','1','HR','ปะชุม'),(252,59,'FF OO','0000000000',20,'2023-11-12 23:25:00','2023-11-12 23:42:00','2023-11-12 23:42:18','','0','PP','1','HR','ปะชุม'),(253,59,'FF OO','0000000000',20,'2023-11-12 23:25:00','2023-11-12 23:43:00','2023-11-12 23:43:59','','0','PP','1','HR','ปะชุม'),(254,58,'AA BB','251487652',20,'2023-11-14 10:49:00','2023-11-16 10:49:00','2023-11-13 10:49:25','',NULL,'PP','1','HR','ปะชุม'),(255,58,'ห้องประชุม NN','3333333333',15,'2023-11-16 20:42:00','2023-11-17 20:42:00','2023-11-16 20:42:58','กล้อง',NULL,'UU','1','HR','PP'),(256,58,'ห้องประชุม NN','3333333333',15,'2023-11-16 20:48:00','2023-11-17 20:48:00','2023-11-16 20:48:41','กล้อง','1','UU','1','HR','PP'),(257,58,'ห้องประชุม NN','3333333333',15,'2023-11-16 21:44:00','2023-11-17 21:44:00','2023-11-16 21:44:53','กล้อง',NULL,'0','1','II','PP'),(258,58,'ห้องประชุม NN','3333333333',20,'2023-11-16 21:58:00','2023-11-17 21:58:00','2023-11-16 21:58:16','เก้าอี้',NULL,'3','1','HR','PP');
/*!40000 ALTER TABLE `reserve` ENABLE KEYS */;
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
