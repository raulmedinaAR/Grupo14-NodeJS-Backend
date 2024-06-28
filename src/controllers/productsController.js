const dbConnection = require('../db/db');

const GENDER_MEN   = 1;
const GENDER_WOMEN = 2;

const getProductsMen   = (request, response)=> getProducts(GENDER_MEN, response);
const getProductsWoman = (request, response) => getProducts(GENDER_WOMEN, response);

const getProducts =  (genderId, response) => {
    const query = `
    SELECT p.id, p.name, p.price, p.discountPrice, p.isNew, p.genderId, p.mainImage, p.secondaryImage, 
        GROUP_CONCAT(c.color) AS colors 
    FROM           grupo14.products      AS p
        INNER JOIN grupo14.productColors AS pc ON p.id = pc.productId 
        INNER JOIN grupo14.colors        AS c  ON c.id = pc.colorId 
    WHERE p.genderId IN (${genderId},3)
    GROUP BY p.id, p.name, p.price, p.discountPrice, p.isNew, p.genderId, p.mainImage, p.secondaryImage;
    `;

    dbConnection.query(query, (error, results, fields) => {
        if (error) {
          console.error('ejecutando al consulta:', error);
          return;
        }

        const productsJSON = results.map(product => {
            return {
              id: product.id,
              nombre: product.name,
              precio: Number(product.price),
              precioOferta: Number(product.discountPrice),
              imagenPrincipal: product.mainImage,
              imagenSecundaria: product.secondaryImage,
              colores: product.colors.split(','),
              novedad: product.isNew
            };
        });
        response.send(JSON.stringify(productsJSON, null, 2));
    });
};

module.exports = {getProductsMen, getProductsWoman};
