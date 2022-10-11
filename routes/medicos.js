/**
 * Medicos
 * ruta: /api/medico
 */

const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { getMedicos, crearMedico, actualizarMedico, eliminarMedico } = require('../controllers/medicos');
const { validarJWT } = require('../middlewares/validar-jwt');

const router = Router();
router.get('/', getMedicos);
router.post('/',
    [
        validarJWT,
        check('hospital', 'El hospital id debe ser valido').isMongoId(),
        check('nombre', 'El nombre del medico es requerido').notEmpty(),
        check('telefono', 'El telefono del medico es requerido').notEmpty(),
        validarCampos

    ],
    crearMedico);
router.put('/:id',
    [

    ],
    actualizarMedico);
router.delete('/:id', eliminarMedico);

module.exports = router;