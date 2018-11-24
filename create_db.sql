-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema intern-hub
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema intern-hub
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `intern-hub` DEFAULT CHARACTER SET utf8 ;
USE `intern-hub` ;

-- -----------------------------------------------------
-- Table `intern-hub`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `intern-hub`.`categories` (
  `category_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `category_name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`category_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `intern-hub`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `intern-hub`.`users` (
  `user_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `displayname` VARCHAR(50) NOT NULL,
  `username` VARCHAR(50) NOT NULL,
  `userpass` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `phone_number` VARCHAR(255) NULL DEFAULT NULL,
  `role` ENUM('admin', 'student', 'recruiter') NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `users_username_unique` (`username` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `intern-hub`.`recruiters`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `intern-hub`.`recruiters` (
  `recruiter_id` INT(10) UNSIGNED NOT NULL,
  `recruiter_address` VARCHAR(255) NOT NULL,
  `company` VARCHAR(255) NULL DEFAULT NULL,
  `recruiter_desc` TEXT NULL DEFAULT NULL,
  UNIQUE INDEX `recruiters_recruiter_id_unique` (`recruiter_id` ASC),
  CONSTRAINT `recruiters_recruiter_id_foreign`
    FOREIGN KEY (`recruiter_id`)
    REFERENCES `intern-hub`.`users` (`user_id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `intern-hub`.`jobs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `intern-hub`.`jobs` (
  `job_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `recruiter_id` INT(10) UNSIGNED NOT NULL,
  `job_title` VARCHAR(50) NOT NULL,
  `job_desc` LONGTEXT NOT NULL,
  `location` VARCHAR(255) NOT NULL,
  `is_validated` TINYINT(1) NULL DEFAULT '0',
  PRIMARY KEY (`job_id`),
  INDEX `jobs_recruiter_id_foreign` (`recruiter_id` ASC),
  CONSTRAINT `jobs_recruiter_id_foreign`
    FOREIGN KEY (`recruiter_id`)
    REFERENCES `intern-hub`.`recruiters` (`recruiter_id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `intern-hub`.`job_category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `intern-hub`.`job_category` (
  `job_id` INT(10) UNSIGNED NOT NULL,
  `category_id` INT(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`job_id`, `category_id`),
  INDEX `job_category_category_id_foreign` (`category_id` ASC),
  CONSTRAINT `job_category_category_id_foreign`
    FOREIGN KEY (`category_id`)
    REFERENCES `intern-hub`.`categories` (`category_id`)
    ON DELETE CASCADE,
  CONSTRAINT `job_category_job_id_foreign`
    FOREIGN KEY (`job_id`)
    REFERENCES `intern-hub`.`jobs` (`job_id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `intern-hub`.`skills`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `intern-hub`.`skills` (
  `skill_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `skill_name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`skill_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `intern-hub`.`job_skill`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `intern-hub`.`job_skill` (
  `job_id` INT(10) UNSIGNED NOT NULL,
  `skill_id` INT(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`job_id`, `skill_id`),
  INDEX `job_skill_skill_id_foreign` (`skill_id` ASC),
  CONSTRAINT `job_skill_job_id_foreign`
    FOREIGN KEY (`job_id`)
    REFERENCES `intern-hub`.`jobs` (`job_id`)
    ON DELETE CASCADE,
  CONSTRAINT `job_skill_skill_id_foreign`
    FOREIGN KEY (`skill_id`)
    REFERENCES `intern-hub`.`skills` (`skill_id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `intern-hub`.`students`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `intern-hub`.`students` (
  `student_id` INT(10) UNSIGNED NOT NULL,
  `student_dob` DATE NULL DEFAULT NULL,
  `student_major` VARCHAR(50) NULL DEFAULT NULL,
  `student_college` VARCHAR(255) NULL DEFAULT NULL,
  `student_desc` TEXT NULL DEFAULT NULL,
  UNIQUE INDEX `students_student_id_unique` (`student_id` ASC),
  CONSTRAINT `students_student_id_foreign`
    FOREIGN KEY (`student_id`)
    REFERENCES `intern-hub`.`users` (`user_id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `intern-hub`.`student_skill`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `intern-hub`.`student_skill` (
  `student_id` INT(10) UNSIGNED NOT NULL,
  `skill_id` INT(10) UNSIGNED NOT NULL,
  PRIMARY KEY (`student_id`, `skill_id`),
  INDEX `student_skill_skill_id_foreign` (`skill_id` ASC),
  CONSTRAINT `student_skill_skill_id_foreign`
    FOREIGN KEY (`skill_id`)
    REFERENCES `intern-hub`.`skills` (`skill_id`)
    ON DELETE CASCADE,
  CONSTRAINT `student_skill_student_id_foreign`
    FOREIGN KEY (`student_id`)
    REFERENCES `intern-hub`.`students` (`student_id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
