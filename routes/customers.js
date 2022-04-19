const { Router } = require('express');
const pool = require('../db');

const router = Router();

router.get('/', (request, response, next) => {
    pool.query('SELECT * FROM customers ORDER BY id ASC', (err, res) => {
        if (err) return next(err);
    
        response.json(res.rows);
    });
});

router.get('/:id', (request, response, next) => {
    const { id } = request.params;

    pool.query('SELECT * FROM customers WHERE id = $1', [id], (err, res) => {
        if (err) return next(err);

        response.json(res.rows);
    });
});

router.post('/', (request, response, next) => {
    const { name } = request.body;

    pool.query(
        'INSERT INTO customers(name, personality) VALUES($1)', 
        [name],
        (err, res) => {
            if (err) return next(err);

            response.redirect('/customers');
        });
});

// router.put('/:id', (request, response, next) => {
//     const { id } = request.params;
    
//     const keys = ['name'];

//     const fields = [];

//     keys.forEach(key => {
//         if (request.body[key]) fields.push(key);
//     })

//     fields.forEach(field => {
//         pool.query(
//             `UPDATE customers SET ${field}=($1)`, 
//             [request.body[field], id],
//             (err, res) => {
//                 if (err) return next(err);
                 
//                 response.redirect('/customers'); 
//         });
//     });
// });

router.delete('/:id', (request, response, next) => {
    const { id } = request.params;

    pool.query('DELETE FROM customers WHERE id=($1)', [id], (err, res) => { 
        if (err) return next(err);

        response.redirect('/customers');
    });
})

module.exports = router;