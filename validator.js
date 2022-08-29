const validateMovie = (req, res, next) => {
    const { title, director, year, color, duration } = req.body;
    const errors = [];

    if (title == null) {
        errors.push({ field: "title", message: "This field is required" });
      } else if (title.length >= 255) {
        errors.push({ field: "title", message: "Should contain less than 255 characters" });
      }
      if (director == null) {
        errors.push({ field: "director", message: "This field is required" });
      }
      if (year == null) {
        errors.push({ field: "year", message: "This field is required" });
      }
      if (color == null) {
        errors.push({ field: "color", message: "This field is required" });
      }
      if (duration == null) {
        errors.push({ field: "duration", message: "This field is required" });
      }
     
      if (errors.length) {
        res.status(422).json({ validationErrors: errors });
      } else {
        next();
      }

};

const validateUser = (req, res, next) => {
    const { firstname, lastname, email, city, language } = req.body;
    const errors = [];

    if (firstname == null) {
        errors.push({ field: "firstname", message: "This field is required" });
      } else if (title.length >= 255) {
        errors.push({ field: "firstname", message: "Should contain less than 255 characters" });
      }
      if (lastname == null) {
        errors.push({ field: "lastname", message: "This field is required" });
      } else if (lastname.length >= 255) {
        errors.push({ field: "lasstname", message: "Should contain less than 255 characters"});
      }
      if (email == null) {
        errors.push({ field: "email", message: "This field is required" });
      } else if (email.length >= 255) {
        errors.push({ field: "email", message: "Should contain less than 255 characters"});
      }
      if (city == null) {
        errors.push({ field: "city", message: "This field is required" });
      } else if (city.length >= 255) {
        errors.push({ field: "city", message: "Should contain less than 255 characters"});
      } 
      if (language == null) {
        errors.push({ field: "language", message: "This field is required" });
      }
       else if (duration.length >= 255) {
        errors.push({ field: "language", message: "Should contain less than 255 characters"});
       }
      if (errors.length) {
        res.status(422).json({ validationErrors: errors });
      } else {
        next();
      }
};

// const { body, validationResult } = require('express-validator');
// const dataB = require('./database')

// const validateMovie = [
//     body("title").isLenght({ max: 255}).notEmpty().isString(),
//     body("director").isLenght({ max: 255}).notEmpty().isString(),
//     body("year").isLenght({ max: 255}).notEmpty().isString(),
//     body("color").isLenght({ max: 255}).notEmpty().isString(),
//     body("duration").isLenght({ max: 255}).notEmpty().isInt(),
//     (req, res, next) => {
//         const error = validationResult(req);

//         if (!errors.isEmpty()) {
//             res.status(422).json({ validationErrors: errors.array() });
//         } else {
//             next();
//         }
//     },
// ];

// const validateUser = [
//     body("firstname").isLenght({ max: 255}).notEmpty().isString(),
//     body("lastname").isLenght({ max: 255}).notEmpty().isString(),
//     body("city").isLenght({ max: 255}).notEmpty().isString(),
//     body("language").isLenght({ max: 255}).notEmpty().isString(),
//     body("email").isLenght({ max: 255}).notEmpty().isInt(),
//     (req, res, next) => {
//         const error = validationResult(req);

//         if (!errors.isEmpty()) {
//             res.status(422).json({ validationErrors: errors.array() });
//         } else {
//             next();
//         }
//     },
// ];


module.exports = {
    validateMovie,
    validateUser,
};