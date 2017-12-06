const db = require('../models/database');
const User = require('../models/userModel');

const charityController = {
    getCharityInfo(req, res, next) {
        console.log(req.body)
        const query = 'SELECT * FROM "charity"';
        db.conn.many(query)
                .then(data => {
                    res.send(data)
            })
            .catch(err => {
                console.log('The error is', err);
                res.status(404).send(err)
            });
    }
}
module.exports = charityController;