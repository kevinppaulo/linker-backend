import { Router } from 'express';
import CompanyController from './controllers/CompanyController';
import UserController from './controllers/UserController';

const router = Router();

// POST
router.post('/user', UserController.create);
router.post('/company', CompanyController.create);

// GET
router.get('/users', UserController.findAll);
router.get('/user/:userID', UserController.findOne);
router.get('/companies', CompanyController.findAll);
router.get('/company/:companyID', CompanyController.findOne);

// PUT
router.put('/user/:userID', UserController.update);
router.put('/company/:companyID', CompanyController.update);

// DELETE
router.delete('/user/:userID', UserController.delete);
router.delete('/company/:companyID', CompanyController.delete);

export { router };
