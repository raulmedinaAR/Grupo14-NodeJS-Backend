CREATE TABLE `grupo14`.`tipoConsulta` (
    `id` INT NOT NULL,
    `name` VARCHAR(50) NOT NULL,
    PRIMARY KEY (`id`)
);


INSERT INTO `grupo14`.`tipoConsulta` (`id`, `name`) VALUES
(1, 'Precio por mayor'),
(2, 'Metodos de envio'),
(3, 'Medios de pago electronico'),
(4, 'Otras consultas')