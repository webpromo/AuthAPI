const express = require('express');
const router = express.Router();
const userService = require('./user.service');

// routes
router.post('/authenticate', authenticate);  // works 11/27 @ 4:15
router.post('/register', register);  // works 11/27 @ 11:45
router.get('/current', getCurrent);
// router.get('/:id', getById);
router.get('/username/:username', getByUsername);
router.put('/:id', update);
router.delete('/:id', _delete);
router.get('/', getAll);  // works 11/27 @ 4:28 in postman

module.exports = router;

function getByUsername(req, res, next) {
    console.log("get by Username triggered",req.params)
    userService.getById(req.params.username)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}
function authenticate(req, res, next) {
    console.log("params",req.body);
    userService.authenticate(req.body) 
    .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
    .catch(err => next(err));
}

function register(req, res, next) {
    userService.create(req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    console.log("getAll triggered")
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getCurrent(req, res, next) {
    userService.getById(req.user.sub)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function getById(req, res, next) {
    console.log("get by ID triggered",req.params)
    userService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}


function update(req, res, next) {
    userService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    userService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}