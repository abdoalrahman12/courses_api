const express = require('express');
const router = express.Router();
const courseController = require('../data/controllers/courses.controllers');
const { body } = require('express-validator');


router.get('/abi/courses', courseController.getAllCourses);
router.get('/abi/courses/:courseId', courseController.getCourseById);

router.post('/abi/courses',
    [
        body('title')
            .notEmpty()
            .withMessage('title is required'),

        body('price')
            .notEmpty()
            .withMessage('price is required')
    ],
    courseController.createCourse

);
router.patch('/abi/courses/:courseId', courseController.updateCourseById);

router.delete('/abi/courses/:courseId', courseController.deleteCourseById);


module.exports = router;
