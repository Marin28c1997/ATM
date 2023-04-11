// Description: This file contains all the routes for the account
// Author: Sebastián Gámez Ariza

// Importing the express router
import { Router } from 'express';

// Importing the account controller
import * as accountController from '../controllers/account.controller.js';

// Importing the verifyToken middleware
import verifyTokenMiddleware from '../middlewares/verifyToken.middleware.js';

// Create the router
const accountRouter = Router();

/**
 * @swagger
 * tags:
 *  name: Account
 *  description: Account management
 */

/**
 * @swagger
 * /api/v1/account/login:
 *  post:
 *   summary: Login an account
 *   description: Login an account
 *   tags: 
 *    - Account
 */
accountRouter.post('/login', accountController.loginByIdentification);

// Get all accounts
accountRouter.get('/', verifyTokenMiddleware, accountController.getAllAccounts);

// Create an account
accountRouter.post('/', verifyTokenMiddleware, accountController.createAccount);

// Update an account
accountRouter.put('/:id', verifyTokenMiddleware, accountController.updateAccount);

// Delete an account
accountRouter.delete('/:id', verifyTokenMiddleware, accountController.deleteAccount);


// Export the router
export default accountRouter;