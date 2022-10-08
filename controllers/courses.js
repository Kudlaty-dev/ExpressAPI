const ErrorResponse = require("../utils/errorResponse");
const asyncHandler = require("../middleware/async");
const Course = require("../models/Course");
const Bootcamp = require("../models/Bootcamp");
const { rawListeners, remove } = require("../models/Course");
const colors = require("colors");

//@desc     Get courses
//@route    GET /api/v1/courses
//@route    GET /api/v1/bootcamps/:bootcampID/courses
//@access   Public

exports.getCourses = asyncHandler(async (req, res, next) => {
  let query;
  if (req.params.bootcampID) {
    query = Course.find({ bootcamp: req.params.bootcampID });
  } else {
    query = Course.find().populate({
      path: "bootcamp",
      select: "name description",
    });
  }

  const courses = await query;

  res.status(200).json({
    success: true,
    count: courses.length,
    data: courses,
  });
});

//@desc     Get  a single course
//@route    GET /api/v1/courses/:id
//@access   Public

exports.getCourse = asyncHandler(async (req, res, next) => {
  const course = await Course.findById(req.params.id).populate({
    path: "bootcamp",
    select: "name description",
  });

  if (!course) {
    return next(
      new ErrorResponse(`No course with the id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: course });
});

//@desc     Create a single course
//@route    POST /api/v1/bootcamps/:bootcampId/courses/
//@access   Private

exports.createCourse = asyncHandler(async (req, res, next) => {
  req.body.bootcamp = req.params.bootcampID;

  const bootcamp = await Bootcamp.findById(req.params.bootcampID);

  console.log(`Got a request for bootcamp id: ${req.params.bootcampID}`);
  if (!bootcamp) {
    return next(
      new ErrorResponse(
        `Bootcamp not found with id of ${req.params.bootcampID}`,
        404
      )
    );
  }

  const course = await Course.create(req.body);
  res.status(201).json({ success: true, data: course });
});

//@desc     Update a single course
//@route    PUT /api/v1/courses/:id
//@access   Private

exports.updateCourse = asyncHandler(async (req, res, next) => {
  const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!course) {
    return next(
      new ErrorResponse(`No course with the id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: course });
});

//@desc     Delete a single course
//@route    DELETE /api/v1/courses/:id
//@access   Private

exports.deleteCourse = asyncHandler(async (req, res, next) => {
  const course = await Course.findById(req.params.id);

  if (!course) {
    return next(
      new ErrorResponse(`No course with the id of ${req.params.id}`.blue, 404)
    );
  }
  await course.remove();
  res.status(200).json({ success: true, data: course });
});
