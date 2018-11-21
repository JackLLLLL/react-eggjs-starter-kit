'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    // get id given user name
    async index (ctx) {

        const result = await this.app.mysql.select('user', { 
            where: { name: ctx.query.username },
            // columns: [id],
        });

        return result.length;
    }

    // create a new user (register)
    async create (ctx) {
        // 
        try {
            const result = await this.app.mysql.insert('user', {
                name: ctx.request.body.name,
                password: ctx.request.body.password,
                keystore: ctx.request.body.keystore || null,
            });
            // return id
            return result.insertId;
        } catch (err) {
            // console.log(err)
            // err
            throw err;
        }
    }
}

module.exports = UserService;