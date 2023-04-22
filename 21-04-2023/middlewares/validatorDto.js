// validatorDto -: middleware checking req.body according addCustomerSchema
function validatorDto(ajvValidate){
    return (req,res,next)=>{
        // console.log(req.url);
        // console.log(req.body);
        const valid = ajvValidate(req.body);
        // console.log(valid);
        if(!valid){
            const errors = ajvValidate.errors;
            res.status(400).json(errors);
        }else{
            next();
        }
    };   
}

//exports
module.exports = validatorDto;