const { Router } = require('express');
const pool = require('../db');

const router = Router();

router.get('/:id?&:name?', (request, response, next) => {
    const id = request.params.id;
    const sourceName = request.params.name;
    
    if (id) {
        pool.query('SELECT customer, name, id, points FROM transactions JOIN actions ON transactions.action = actions.name WHERE actions.id = $1', [id], (err, res) => {
            if (err) return next(err);
    
            response.json(res.rows);
        });
    } else {
        pool.query('SELECT customer, name, id, points FROM transactions JOIN actions ON transactions.action = actions.name', (err, res) => {
            if (err) return next(err);
    
            response.json(res.rows);
        });
    }
    
    
});

module.exports = router;