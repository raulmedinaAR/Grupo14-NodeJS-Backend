const dbConnection = require('../db/db');

const getActivePromotions = (request, response) => {
    const query = 
    `SELECT content
    FROM grupo14.promotions
    WHERE dateFrom <= CURDATE() AND DATE_ADD(dateUntil, INTERVAL 1 DAY) >= CURDATE()
    ORDER BY id;`;

    dbConnection.query(query, (error, results, fields) => {
        if (error) {
          console.error('Error obteniendo las promociones activas', error);
          return;
        }

        const promotionsJSON = results.map(row => row.content);
        response.send(JSON.stringify(promotionsJSON, null, 2));
    });
};

module.exports = { getActivePromotions };
