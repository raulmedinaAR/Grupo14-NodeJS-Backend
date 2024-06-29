# Trabajo práctico Codo a Codo
# Node.JS - Curso 24122 - Grupo 14 - Backend

## Integrantes
- Gladys Vilaro (vilarogladys1989@gmail.com)
- José Luís Claros (claros.vilca@gmail.com)
- Raúl Medina (raul@medina.net.ar)

## Módulos utilizados
```sh
npm install express
npm install mysql2
npm install node-mailjet
npm install jsonwebtoken
```

## Criterios de evaluación:

### 1) La base de datos debe desarrollarse com MySQL, tener al menos 4 tablas, con al menos 4 diferentes tipos de datos.

![DER](./img/der.png)

Los scripts de generación de la base de datos se encuntran dentro del repositorio en la carpeta `/src/db/scripts`.

### 2) Entre las tablas al menos deberá haber una relación "uno a muchos".

- Ver imagen anterior

### 3) A través del servidor levantado con Node y Express se debe poder realizar al menos un tipo de alta. (POST)
| Metodo | Descripción | Ruta |
| ------ | ------ | ------ |
| **POST** | Agregar suscripción | `/subscription/add` |

### 4) De la misma forma se debe poder realizar modificaciones de los registros. (PUT)
| Metodo | Descripción | Ruta |
| ------ | ------ | ------ |
| **PUT** | Modificar suscripción | `/subscription/upd` |

### 5) Se debe poder acceder a los registros de la tabla (GET)
| Metodo | Descripción | Ruta |
| ------ | ------ | ------ |
| **GET** | Obtener indumentaria femenina | `/products/woman` |
| **GET** | Obtener indumentaria masculina | `/products/men` |
| **GET** | Obtener promociones | `/promotions` |

### 6) Se debe poder realizar borrado físico de los datos. (DELETE)
| Metodo | Descripción | Ruta |
| ------ | ------ | ------ |
| **DELETE** | Eliminar suscripción | `/subscription/del` |

### 7) El trabajo práctico deberá subirse a un servidor online y compartirse mediante un repositorio de Git.
- [Repositorio en GitHub](https://github.com/raulmedinaAR/Grupo14-NodeJS-Backend-Old.git)

### 8) La página deberá subirse a un servidor on-line para poder ser navegada por el Docente.
- [Visita nuestra versión navegable del backend](PENDIENTE!!!)

### 9) Se valorará la aplicación de un token o método de autenticación.
Implementamos JSON Web Tokens (JWT) con el módulo `jsonwebtoken`

### 10) El backend debe estar integrado con un frontend
- [Visita nuestra versión navegable del frontend integrado con el backend](https://grupo14.netlify.app/)
