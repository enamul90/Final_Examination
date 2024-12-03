import express from 'express';
const router = express.Router();

// import * as MobileNumberController from '../app/controllers/MobileNumberControllers.js';
// import * as UsersController from '../app/controllers/userController.js';
// import middlewares from '../app/middlewares/middlewares.js';

import * as PublicController from '../app/controllers/PublicControllers.js';


// user 

// router.post('/Registration',UsersController.Registration)
// router.post('/Login',UsersController.Login)



// User Task Control
// router.post('/CreateNumber',middlewares, MobileNumberController.CreateNumber)
// router.get('/ReadNumber',middlewares, MobileNumberController.ReadNumber)
// router.post('/UpdateNumber',middlewares, MobileNumberController.UpdateNumber)
// router.post('/DeleteNumber',middlewares, MobileNumberController.DeleteNumber)

// public api
router.get('/blocList/:remark',PublicController.PublicBlogController)
router.get('/teamList',PublicController.PublicTeamController)
router.get('/service',PublicController.PublicServiceController)
router.post('/contactFrom',PublicController.PublicFormController)







export default router;