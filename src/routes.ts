import { Router } from 'express';
import CompanyController from './controllers/CompanyController';
import UserController from './controllers/UserController';

const router = Router();

// User routes
router.post('/user', UserController.create);
router.get('/user', UserController.findAll);
router.get('/user/:userID', UserController.findOne);
router.put('/user/:userID', UserController.update);
router.delete('/user/:userID', UserController.delete);

// Company routes
router.post('/company', CompanyController.create);
router.get('/company', CompanyController.findAll);
router.get('/company/:companyID', CompanyController.findOne);
router.put('/company/:companyID', CompanyController.update);
router.delete('/company/:companyID', CompanyController.delete);

export { router };
