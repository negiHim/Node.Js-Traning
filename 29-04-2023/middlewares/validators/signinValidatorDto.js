
function signinValidatorDto(ajvValidate) {
    return (req, res, next) => {
        console.log(req.body);
        const valid = ajvValidate(req.body);
        if (!valid) {
            const errors = ajvValidate.errors;
            res.status(400).json(errors);
        } else {
            next();
        }
    };
}
module.exports = signinValidatorDto;