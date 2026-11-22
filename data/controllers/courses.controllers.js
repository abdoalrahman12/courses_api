
const { courses } = require('../courses');
const { validationResult } = require('express-validator');

const getAllCourses = (req, res) => {
    res.send(courses);
};

const getCourseById = (req, res) => {
    const coruseid = +req.params.courseId;
    const course = courses.find((coruse) => coruseid === coruse.id);

    if (!course) {
        return res.status(404).json({ message: "course not found" });
    }

    res.status(200).json(course);
};

const createCourse = (req, res) => {
    console.log(req.body);

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const course = { id: courses.length + 1, ...req.body };
    courses.push(course);

    res.status(201).json(course);
};

const updateCourseById = (req, res) => {
    const coruseid = +req.params.courseId;
    const course = courses.find((coruse) => coruseid === coruse.id);

    if (!course) {
        return res.status(404).json({ message: "course not found" });
    }

    Object.assign(course, req.body);

    res.json(course);
};

const deleteCourseById = (req, res) => {
    const coruseid = +req.params.courseId;

    const courseIndex = courses.findIndex((course) => course.id === coruseid);

    if (courseIndex === -1) {
        return res.status(404).json({ message: "course not found" });
    }

    courses.splice(courseIndex, 1);

    res.status(200).json({
        success: true,
        message: "course deleted successfully"
    });
};

module.exports = {
    getAllCourses,
    getCourseById,
    createCourse,
    updateCourseById,
    deleteCourseById
};
