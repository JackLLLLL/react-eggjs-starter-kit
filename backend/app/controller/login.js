'use strict';

const Controller = require('egg').Controller;

class LoginController extends Controller {

    // GET method to verify JWT
    async index() {
        const { ctx } = this;

        // try to validate header
        try {
            const data = await ctx.service.login.validate(ctx);
            // response with success
            ctx.helper.success(ctx, data, 'success', 200)
        } catch (err) {
            // response with error
            ctx.helper.error(ctx, err.message, 401)
        }
    }

    // login and get a JWT
    async create() {
        const { ctx } = this;

        // try to login
        try {
            // validate username and password, if exist then return JWT
            const data = await ctx.service.login.create(ctx.request.body);

            // // set cookie        // for now, not using cookie
            // ctx.cookies.set(
            //     'jwt', 
            //     data.token,
            //     {
            //         domain: this.app.config.domain,
            //         path: '/',
            //         maxAge: 3600 * 1000, 
            //         httpOnly: false, // change this later for security
            //         overwrite: true
            //     }
            // )

            // response
            ctx.helper.success(ctx, data, 'success', 200);
        } catch (err) {
            // response with error
            ctx.helper.error(ctx, err.message, 401)
        }
    }
}

module.exports = LoginController;