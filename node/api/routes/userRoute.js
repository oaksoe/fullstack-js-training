var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

router.post('/create', userController.create);
router.get('/', userController.findAll);
router.get('/:username', userController.find);
router.delete('/:username', userController.remove);
router.put('/', userController.update);

module.exports = router;
