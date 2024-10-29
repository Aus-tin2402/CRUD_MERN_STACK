const router = require(`express`).Router();
const crudController = require(`../controller/crudController`);

router.post(`/createAccount`, crudController.createModel);
router.get(`/getAll`, crudController.fetchAllModel);
router.get(`/getById/:id`, crudController.fetchId);
router.delete(`/removeAccount/:id`, crudController.DeleteById);
router.patch(`/updateall/:id`, crudController.updateAll);

module.exports = router;
