'use strict';

module.exports = app => {
    const { router, controller } = app;
    
    router.get('/', controller.home.index);

    router.resources('user', '/api/user', controller.user);     // sign up and maybe drop user later
    router.resources('login', '/api/login', controller.login);  // used for login
    router.resources('ticket', '/api/ticket', controller.ticket);   // used for ticket
};