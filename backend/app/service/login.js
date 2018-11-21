'use strict';

const Service = require('egg').Service;

class LoginService extends Service {
    // login
    async create(body) {
        const { ctx } = this;

        // get username and password from request
        const username = body.username;
        const password = body.password;

        // query in mysql
        const result = await this.app.mysql.get('user', { name:username, password:password });  // TODO: encrypt password with salt
        if (result === null) {
            throw Error("No match")
        }

        // return username, wallet address and userID
        const token = await ctx.helper.createJWToken(this.app, { id:result.id });
        
        // return data
        return {
            token: token,
            username: result.name,
            keystore: result.keystore,
        }
    }

    // validate JWToken
    async validate(ctx) {

        // get JWToken from Header
        const token = await ctx.helper.getJWToken(ctx);
        // verify the JWT signature and get decode message if verified
        const decoded = await ctx.helper.verifyJWToken(this.app, token);
        // if jwt verified, return username and wallet address
        const result = await this.app.mysql.get('user', { id: decoded.id });

        // return data
        return {
            username: result.name,
        }
    }
}

module.exports = LoginService;