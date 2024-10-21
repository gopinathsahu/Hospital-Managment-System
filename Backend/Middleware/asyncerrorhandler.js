export const asynccatcherror = (theFunction) => {
  return (req, res, next) => {
    Promise.resolve(theFunction(req, res, next)).catch(next);
  };
};
// explanation
/*
This is a middleware function in JavaScript that can be used to catch any errors that occur in an asynchronous function and
 pass them to the Express error handling middleware. It wraps the asynchronous function with a Promise.resolve() and a .catch() block
  to handle any errors that may occur during the execution of the function.
*/
