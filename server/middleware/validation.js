
// checks if firstName, lastName and email are present in request's body

const validateEmployee = (req, res, next) => {
    const {firstName, lastName, email} = req.body

    if (!firstName || !lastName || !email){
        return res.status(200).json({
            code: 100
        })
    }

    // move to controller function 
    next()
}

const validateEmail = (req, res, next) => {
    const {email} = req.body

    if (!email){
        return res.status(200).json({
            code: 101
        })
    }

    // move to controller function 
    next()
}



module.exports = {validateEmployee, validateEmail};

