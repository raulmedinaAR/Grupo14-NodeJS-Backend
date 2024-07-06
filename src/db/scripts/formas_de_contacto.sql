CREATE  TABLE `grupo14`.formas_de_contacto (
   id INT NOT NULL,
   opcion VARCHAR(50) NOT NULL,
   PRIMARY KEY (`id`)
);


INSERT INTO `grupo14`.`formas_de_contacto` (`id`, `opcion`) VALUES
(1, 'Por email'),
(2, 'Telefono'),
(3, 'Whatsapp')
