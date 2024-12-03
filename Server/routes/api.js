import express from 'express';
const router = express.Router();


import * as UsersController from '../app/controllers/userController.js';
import middlewares from '../app/middlewares/middlewares.js';

import * as PublicController from '../app/controllers/PublicControllers.js';
import * as BlogController from "../app/controllers/BlogController.js";
import * as Team from "../app/controllers/TeamController.js"
import * as ContractFrom from "../app/controllers/ContractFromControllers.js"
import * as ServiceController from "../app/controllers/ServiceControllers.js"


// user 
router.post('/Registration',UsersController.Registration)
router.post('/Login',UsersController.Login)


// blog  api 
router.post('/createBlog',middlewares, BlogController.createBlockController)
router.get('/allBlogList',middlewares, BlogController.blocklistController)   
router.post('/updateBlog/:id',middlewares, BlogController.updateBlogController)   
router.delete('/deleteBlog/:id',middlewares, BlogController.deleteBlogController)   

router.post('/createBlogDetail/:id',middlewares, BlogController.createBlockDetailController)
router.get('/readBlogDetail/:id',middlewares, BlogController.readBlogDetailController)


// team api 
router.post('/createTeam',middlewares, Team.createTeamController)
router.get('/allTeamList',middlewares, Team.TeamListController)   
router.post('/updateTeam/:id',middlewares, Team.updateTeamController)   
router.delete('/deleteTeam/:id',middlewares, Team.deleteTeamController)   

// Contact From api 
router.get('/allContractFromList',middlewares, ContractFrom.FormListController)   
router.delete('/deleteContractFrom/:id',middlewares, ContractFrom.deleteFormController)  

// Service api 
router.post('/createService',middlewares, ServiceController.createServiceController)
router.get('/allServiceList',middlewares, ServiceController.ServiceListController)   
router.post('/updateService/:id',middlewares, ServiceController.updateServiceController)   
router.delete('/deleteService/:id',middlewares, ServiceController.deleteServiceController)   




// public api
router.get('/blogList/:remark',PublicController.PublicBlogController)
router.get('/blogDetail/:id',PublicController.PublicBlogDetailController)
router.get('/teamList',PublicController.PublicTeamController)
router.get('/service',PublicController.PublicServiceController)
router.post('/contactFrom',PublicController.PublicFormController)







export default router;