CREATE TABLE `grupo14`.`contactos` (
    `id` INT AUTO_INCREMENT ,
    `nombre` VARCHAR(100) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `telefono` VARCHAR(20) NOT NULL,
    `fecha_nacimiento` DATE NOT NULL,
    `tipo_consulta` INT NOT NULL,
    `formas_de_contacto`INT NOT NULL,
    `comentarios` VARCHAR(1000)NOT NULL,
     PRIMARY KEY (`id`)

) ENGINE=InnoDB;


