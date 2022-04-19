const { Router } = require('express');
const pool = require('../db');

const router = Router();

router.get('/', (request, response, next) => {
    pool.query('SELECT * FROM actions ORDER BY id ASC', (err, res) => {
        if (err) return next(err);
    
        response.json(res.rows);
    });
});

router.post('/', (request, response, next) => {
    const { name, type, points } = request.body;

    pool.query(
        'INSERT INTO actions(name, type, points) VALUES($1, $2, $3)', 
        [name, type, points],
        (err, res) => {
            if (err) return next(err);

            response.redirect('/actions');
        });
});

module.exports = router;