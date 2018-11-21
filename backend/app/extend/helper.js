// helper functions
exports.getJWToken = ctx => {
    // get json web token 
    let bearerToken = ctx.request.header.authorization;
    return bearerToken && bearerToken.replace('Bearer ', '');  // this method is for jwt stored in headers

    // // get cookie from cookies
    // const jwt = ctx.cookies.get('jwt')
    // console.log(jwt)                                 // method to read jwt in cookie not implemented yet
}

// create token
exports.createJWToken = async (app, data) => {
    return app.jwt.sign(data, app.config.jwt.secret, { issuer: 'JackLLLLL@Coincc', expiresIn: 6000 });
}

// decode token
exports.verifyJWToken = async (app, token) => {
    return app.jwt.verify(token, app.config.jwt.serect);
}

// success
exports.success = (ctx, result, message, status) => {
    ctx.body = {
        message: message,
        data: result
    };
    ctx.status = status;
};
  
// fail
exports.error = (ctx, message, status) => {
    ctx.body = {
        message: message
    };
    ctx.status = status;
};
