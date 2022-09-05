import { Router } from 'express';
import CompanyController from './controllers/CompanyController';
import UserController from './controllers/UserController';
const upload = require('./middlewares/multer.js');

const router = Router();

// User routes
router.post('/user', UserController.create);
router.get('/user', UserController.findAll);
router.get('/user/:userID', UserController.findOne);
router.put('/user/:userID', UserController.update);
router.delete('/user/:userID', UserController.delete);

//Save Certificates
router.post('/certificate/:userID', upload.single('image'), async (req, res) => {
  if (req.file) {
    return res.json({ erro: false, message: 'Upload feito com sucesso' });
  } else {
    return res.status(400).json({ erro: true, message: 'Erro no upload' });
  }
});

// Company routes
router.post('/company', CompanyController.create);
router.get('/company', CompanyController.findAll);
router.get('/company/:companyID', CompanyController.findOne);
router.put('/company/:companyID', CompanyController.update);
router.delete('/company/:companyID', CompanyController.delete);

export { router };
