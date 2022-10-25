-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`users` (
  `id` VARCHAR(45) NOT NULL,
  `user_name` VARCHAR(45) NOT NULL,
  `email_id` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`address` (
  `address_id` INT NOT NULL AUTO_INCREMENT,
  `houseNumber` VARCHAR(45) NOT NULL,
  `area` VARCHAR(45) NOT NULL,-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `mydb` ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`users` (
  `id` VARCHAR(45) NOT NULL,
  `user_name` VARCHAR(45) NOT NULL,
  `email_id` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`address`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`address` (
  `address_id` INT NOT NULL AUTO_INCREMENT,
  `houseNumber` VARCHAR(45) NOT NULL,
  `area` VARCHAR(45) NOT NULL,
  `city` VARCHAR(45) NOT NULL,
  `zipcode` VARCHAR(45) NOT NULL,
  `users_id` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`address_id`),
  INDEX `fk_address_users_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_address_users`
    FOREIGN KEY (`users_id`)
    REFERENCES `mydb`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`patients`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`patients` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `relation` VARCHAR(45) NOT NULL,
  `age` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `gender` VARCHAR(7) NOT NULL,
  `users_id` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_patients_users1_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_patients_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `mydb`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`reports`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`reports` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `lab_name` VARCHAR(45) NOT NULL,
  `test_name` VARCHAR(45) NOT NULL,
  `users_id` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_reports_users1_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_reports_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `mydb`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`labs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`labs` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `lab_name` VARCHAR(45) NOT NULL,
  `lab_icon` VARCHAR(60) NOT NULL,
  `time` VARCHAR(45) NOT NULL,
  `cost` VARCHAR(45) NOT NULL,
  `rating` VARCHAR(45) NOT NULL,
  `slots` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`appointements`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`appointements` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `month` VARCHAR(45) NOT NULL,
  `date` INT NOT NULL,
  `time` VARCHAR(45) NOT NULL,
  `labs_id` INT NOT NULL,
  `patients_id` INT NOT NULL,
  `users_id` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_appointements_labs1_idx` (`labs_id` ASC) VISIBLE,
  INDEX `fk_appointements_patients1_idx` (`patients_id` ASC) VISIBLE,
  INDEX `fk_appointements_users1_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_appointements_labs1`
    FOREIGN KEY (`labs_id`)
    REFERENCES `mydb`.`labs` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_appointements_patients1`
    FOREIGN KEY (`patients_id`)
    REFERENCES `mydb`.`patients` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_appointements_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `mydb`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

  `city` VARCHAR(45) NOT NULL,
  `zipcode` VARCHAR(45) NOT NULL,
  `users_id` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`address_id`),
  INDEX `fk_address_users_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_address_users`
    FOREIGN KEY (`users_id`)
    REFERENCES `mydb`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`patients`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`patients` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `relation` VARCHAR(45) NOT NULL,
  `age` VARCHAR(45) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `gender` VARCHAR(7) NOT NULL,
  `users_id` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_patients_users1_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_patients_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `mydb`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`reports`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`reports` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `lab_name` VARCHAR(45) NOT NULL,
  `test_name` VARCHAR(45) NOT NULL,
  `users_id` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_reports_users1_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_reports_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `mydb`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`labs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`labs` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `lab_name` VARCHAR(45) NOT NULL,
  `lab_icon` VARCHAR(60) NOT NULL,
  `time` VARCHAR(45) NOT NULL,
  `cost` VARCHAR(45) NOT NULL,
  `rating` VARCHAR(45) NOT NULL,
  `slots` INT NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`appointements`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`appointements` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `month` VARCHAR(45) NOT NULL,
  `date` INT NOT NULL,
  `time` VARCHAR(45) NOT NULL,
  `labs_id` INT NOT NULL,
  `patients_id` INT NOT NULL,
  `users_id` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_appointements_labs1_idx` (`labs_id` ASC) VISIBLE,
  INDEX `fk_appointements_patients1_idx` (`patients_id` ASC) VISIBLE,
  INDEX `fk_appointements_users1_idx` (`users_id` ASC) VISIBLE,
  CONSTRAINT `fk_appointements_labs1`
    FOREIGN KEY (`labs_id`)
    REFERENCES `mydb`.`labs` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_appointements_patients1`
    FOREIGN KEY (`patients_id`)
    REFERENCES `mydb`.`patients` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_appointements_users1`
    FOREIGN KEY (`users_id`)
    REFERENCES `mydb`.`users` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

