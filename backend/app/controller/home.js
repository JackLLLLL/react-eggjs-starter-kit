'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'This is backend server of React-Eggjs-Starter-Kit';
  }
}

module.exports = HomeController;
