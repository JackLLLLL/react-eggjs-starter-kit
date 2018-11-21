'use strict';

const Controller = require('egg').Controller;

class TicketController extends Controller {

    // GET method to get all ticket data
    async index() {
        const { ctx } = this;

        try {
            // fetch data from sql database
            const data = await ctx.service.ticket.index();
            // response with success
            ctx.helper.success(ctx, data, 'success', 200)
        } catch (err) {
            // response with error
            ctx.helper.error(ctx, err.message, 401)
        }

    }

    // POST method to create a new ticket
    async create() {
        const { ctx } = this;

        // try to create new ticket
        try {
            // service
            const id = await ctx.service.ticket.create(ctx);
            // response
            ctx.helper.success(ctx, id, 'success', 201);
        } catch (err) {
            // response with error
            ctx.helper.error(ctx, err.message, 401)
        }
    }

}

module.exports = TicketController;