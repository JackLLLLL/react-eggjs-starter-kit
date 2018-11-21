'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {

    async index() {
        const { ctx } = this;

        // get all data for test use
        try {
            const result = await ctx.service.user.index(ctx);
            result === 0 ? ctx.helper.success(ctx, result, 'success', 204) : ctx.helper.success(ctx, result, 'success', 200);
        } catch (err) {
            ctx.helper.error(ctx, err.message, 500);
        }    
    }

    async create() {
        const { ctx } = this;

        // try to create new request
        try {
            // service
            const id = await ctx.service.user.create(ctx);
            // response
            ctx.helper.success(ctx, id, 'success', 201);
        } catch (err) {
            // response with error
            ctx.helper.error(ctx, err.message, 500)
        }
    }

    // async update() {
    //     const { ctx } = this;
    //     // get id
    //     const id = ctx.params.id;

    //     // call service
    //     await ctx.service.user.update(Object.assign({ id }, ctx.request.body));
    //     // 
    //     ctx.status = 204;
    // }
}

module.exports = UserController;