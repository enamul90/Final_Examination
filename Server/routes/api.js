import express from 'express';
const router = express.Router();

// import * as MobileNumberController from '../app/controllers/MobileNumberControllers.js';
import * as UsersController from '../app/controllers/userController.js';
import middlewares from '../app/middlewares/middlewares.js';

import * as PublicController from '../app/controllers/PublicControllers.js';
import * as BlogController from "../app/controllers/BlogController.js";


// user 
router.post('/Registration',UsersController.Registration)
router.post('/Login',UsersController.Login)


// blog manage api 
 
router.post('/createBlog',middlewares, BlogController.createBlockController)
router.post('/createBlogDetail/:id',middlewares, BlogController.createBlockDetailController)
router.get('/allBlogList',middlewares, BlogController.blocklistController)   




// public api
router.get('/blogList/:remark',PublicController.PublicBlogController)
// router.get('/blocList/:id',PublicController.PublicBlogDetailController)
router.get('/teamList',PublicController.PublicTeamController)
router.get('/service',PublicController.PublicServiceController)
router.post('/contactFrom',PublicController.PublicFormController)







export default router;