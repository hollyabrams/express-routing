const express = require('express');
const ExpressError = require('./expressError');
const { findMean, findMedian, findMode } = require('./calcs')

const app = express();


// Route for mean of numbers
app.get('/mean', (req, res, next) => {
    if(!req.query.numbers) {
        throw new ExpressError('Query should a be comma-separated list of numbers.', 400);
    };
    let numbers = req.params.numbers.split(',');
    if (numbers instanceof Error) {
        throw new ExpressError(numbers.message);
    }
    let result = {
        operation: 'mean',
        result: findMean(numbers)
    }
    return res.send(result);
});


// Route for median of numbers
app.get('/median/:numbers', (req, res) => {
    if(!req.query.numbers) {
        throw new ExpressError('Query should a be comma-separated list of numbers.', 400);
    };
    let numbers = req.params.numbers.split(',');
    if (numbers instanceof Error) {
        throw new ExpressError(numbers.message);
    }
    let result = {
        operation: 'median',
        result: findMedian(numbers)
    }
    return res.send(result);
});


// Route for mode of numbers
app.get('/mode/:numbers', (req, res, next) => {
    if(!req.query.numbers) {
        throw new ExpressError('Query should a be comma-separated list of numbers.', 400);
    };
    let numbers = req.params.numbers.split(',');
    if (numbers instanceof Error) {
        throw new ExpressError(numbers.message);
    }
    let result = {
        operation: 'mode',
        result: findMode(numbers)
    }
    return res.send(result);
});


// If no other route matches, respond with a 404
app.use((req, res, next) => {
    const e = new ExpressError("Page Not Found", 404)
    next(e)
  })


// Error handler - Callback function with four parameters
app.use((err, req, res, next) => { //Note the 4 parameters!
    // the default status is 500 Internal Server Error
    let status = err.status || 500;
    let message = err.msg;
  
    // set the status and alert the user
    return res.status(status).json({
      error: { message, status }
    });
  });


app.listen(3000, () => {
    console.log('Server running on port 3000');
});