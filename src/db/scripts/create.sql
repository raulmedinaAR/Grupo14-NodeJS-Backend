CREATE TABLE `grupo14`.`promotions` (
    `id` int NOT NULL AUTO_INCREMENT,
    `content` varchar(1000) NOT NULL,
    `dateFrom` date NOT NULL,
    `dateUntil` date NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `grupo14`.`gender` (
    `id` INT NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `grupo14`.`products` (
    `id` int NOT NULL,
    `name` varchar(255) NOT NULL,
    `price` int NOT NULL,
    `discountPrice` int NOT NULL,
    `isNew` boolean NOT NULL,
    `genderId` int NOT NULL,
    `mainImage` varchar(1000) NOT NULL,
    `secondaryImage` varchar(1000) NOT NULL,
    `stock` INT NOT NULL DEFAULT 0,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`genderId`) REFERENCES Gender(`id`)
);

CREATE TABLE `grupo14`.`colors` (
    `id` int NOT NULL,
    `color` varchar(100) NOT NULL UNIQUE,
    PRIMARY KEY (`id`)
);

CREATE TABLE `grupo14`.`productColors` (
    `productId` int,
    `colorId` int,
    PRIMARY KEY (`productId`, `colorId`),
    FOREIGN KEY (`productId`) REFERENCES `products`(id),
    FOREIGN KEY (`colorId`) REFERENCES `colors`(id)
);

CREATE TABLE `grupo14`.`subscriptions` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);
  