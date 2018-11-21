module.exports = () => {
    return async function errorHandler(ctx, next) {
        try {
            await next();
        } catch (err) {
            // create err log
            ctx.app.emit('error', err, ctx);

            const status = err.status || 500;
            // err msg of 500 will not return
            const error = status === 500 && ctx.app.config.env === 'prod'
            ? 'Internal Server Error'
            : err.message;

            // return err msg
            ctx.body = { error };
            if (status === 422) {
                ctx.body.detail = err.errors;
            }
            ctx.status = status;
        }
    };
};