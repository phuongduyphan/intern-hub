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
CREATE SCHEMA IF NOT EXISTS `intern-hub` DEFAULT CHARACTER SET latin1 ;
USE `intern-hub` ;

-- -----------------------------------------------------
-- Table `intern-hub`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `intern-hub`.`categories` (
  `category_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `category_name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`category_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `intern-hub`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `intern-hub`.`users` (
  `user_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_display_name` VARCHAR(50) NOT NULL,
  `user_name` VARCHAR(50) NOT NULL,
  `user_pass` VARCHAR(255) NOT NULL,
  `role` ENUM('admin', 'student', 'recruiter') NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE INDEX `users_user_name_unique` (`user_name` ASC))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `intern-hub`.`recruiters`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `intern-hub`.`recruiters` (
  `recruiter_id` INT(10) UNSIGNED NOT NULL,
  `address` VARCHAR(255) NOT NULL,
  UNIQUE INDEX `recruiters_recruiter_id_unique` (`recruiter_id` ASC),
  CONSTRAINT `recruiters_recruiter_id_foreign`
    FOREIGN KEY (`recruiter_id`)
    REFERENCES `intern-hub`.`users` (`user_id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


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
DEFAULT CHARACTER SET = latin1;


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
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `intern-hub`.`skills`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `intern-hub`.`skills` (
  `skill_id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `skill_name` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`skill_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


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
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `intern-hub`.`knex_migrations`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `intern-hub`.`knex_migrations` (
  `id` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `batch` INT(11) NULL DEFAULT NULL,
  `migration_time` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 10
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `intern-hub`.`knex_migrations_lock`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `intern-hub`.`knex_migrations_lock` (
  `index` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `is_locked` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`index`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = latin1;


-- -----------------------------------------------------
-- Table `intern-hub`.`students`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `intern-hub`.`students` (
  `student_id` INT(10) UNSIGNED NOT NULL,
  `student_dob` DATE NULL DEFAULT NULL,
  `student_major` VARCHAR(50) NULL DEFAULT NULL,
  `student_college` VARCHAR(255) NULL DEFAULT NULL,
  UNIQUE INDEX `students_student_id_unique` (`student_id` ASC),
  CONSTRAINT `students_student_id_foreign`
    FOREIGN KEY (`student_id`)
    REFERENCES `intern-hub`.`users` (`user_id`)
    ON DELETE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = latin1;


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
DEFAULT CHARACTER SET = latin1;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
