-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema donation
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema donation
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `donation` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `donation` ;

-- -----------------------------------------------------
-- Table `donation`.`blood`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `donation`.`blood` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `blood_type` VARCHAR(10) NOT NULL,
  `image_url` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 7
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `donation`.`campaigns`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `donation`.`campaigns` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `goal` DECIMAL(10,2) NOT NULL,
  `progress` DECIMAL(10,2) NOT NULL DEFAULT '0.00',
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `donation`.`clothes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `donation`.`clothes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `image_url` VARCHAR(255) NULL DEFAULT NULL,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `season` ENUM('Spring', 'Summer', 'Autumn', 'Winter') NULL DEFAULT NULL,
  `size` ENUM('XS', 'S', 'M', 'L', 'XL', 'XXL') NULL DEFAULT NULL,
  `gender` ENUM('Male', 'Female', 'Unisex') NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `donation`.`userss`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `donation`.`userss` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `full_name` VARCHAR(255) NULL DEFAULT NULL,
  `birthdate` DATE NULL DEFAULT NULL,
  `created_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `username` (`username` ASC) VISIBLE,
  UNIQUE INDEX `email` (`email` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `donation`.`donations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `donation`.`donations` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `userId` INT NOT NULL,
  `campaignId` INT NOT NULL,
  `amount` DECIMAL(10,2) NOT NULL,
  `createdAt` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `userId` (`userId` ASC) VISIBLE,
  INDEX `campaignId` (`campaignId` ASC) VISIBLE,
  CONSTRAINT `fk_campaign_id`
    FOREIGN KEY (`campaignId`)
    REFERENCES `donation`.`campaigns` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_user_id`
    FOREIGN KEY (`userId`)
    REFERENCES `donation`.`userss` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
AUTO_INCREMENT = 5
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `donation`.`hair`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `donation`.`hair` (
  `donation_id` INT NOT NULL AUTO_INCREMENT,
  `video_url` VARCHAR(255) NOT NULL,
  `video_description` TEXT NULL DEFAULT NULL,
  `picture1_title` VARCHAR(50) NULL DEFAULT NULL,
  `picture1_description` TEXT NULL DEFAULT NULL,
  `picture1_image_url` VARCHAR(255) NULL DEFAULT NULL,
  `picture2_title` VARCHAR(50) NULL DEFAULT NULL,
  `picture2_description` TEXT NULL DEFAULT NULL,
  `picture2_image_url` VARCHAR(255) NULL DEFAULT NULL,
  `picture3_title` VARCHAR(50) NULL DEFAULT NULL,
  `picture3_description` TEXT NULL DEFAULT NULL,
  `picture3_image_url` VARCHAR(255) NULL DEFAULT NULL,
  `picture4_title` VARCHAR(50) NULL DEFAULT NULL,
  `picture4_description` TEXT NULL DEFAULT NULL,
  `picture4_image_url` VARCHAR(255) NULL DEFAULT NULL,
  `picture5_title` VARCHAR(50) NULL DEFAULT NULL,
  `picture5_description` TEXT NULL DEFAULT NULL,
  `picture5_image_url` VARCHAR(255) NULL DEFAULT NULL,
  PRIMARY KEY (`donation_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `donation`.`medicaments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `donation`.`medicaments` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `image_url` VARCHAR(255) NULL DEFAULT NULL,
  `category` VARCHAR(255) NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 6
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `donation`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `donation`.`users` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`user_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 11
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
