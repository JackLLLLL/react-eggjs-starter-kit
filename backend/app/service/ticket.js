'use strict';

const Service = require('egg').Service;

class TicketService extends Service {
    // get all tickets
    async index() {
        // select * from ticket
        const result = await this.app.mysql.select('ticket', {
            orders: [['id','desc']],
        });

        return result;
    }

    // get tickets with limit
    async show() {
        // select * from ticket
        const result = await this.app.mysql.select('ticket', {
            orders: [['id','desc']],
            limit: 6,
            offset: 0,
        });

        return result;
    }

    // create a new ticket
    async create(ctx) {
        // insert this new ticket into db
        const result = await this.app.mysql.insert('ticket', { 
            name: ctx.request.body.ticketName, 
            price: ctx.request.body.ticketPrice, 
        });
        // if successfully inserted
        if (!!result.affectedRows) {
            return result.insertId
        } else {
            throw Error("Failed to insert")
        }
    }
}

module.exports = TicketService;