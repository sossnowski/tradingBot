const { check } = require('express-validator');

export const timestampValidation = [
  check('timestamp').isString().notEmpty().withMessage('Invalid timestamp'),
];

export const limitvalidation = [
    check('limit').isNumeric().notEmpty().withMessage('Invalid limit'),
  ];
