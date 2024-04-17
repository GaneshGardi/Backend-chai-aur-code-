const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};




export {asyncHandler}



//-----------------this is the same as above but using try catch----------------------------

// const asyncHandler = (func) => async(req,res,next) => {                       //this is a higher order function
//     try {
//         await func(req,res,next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }    