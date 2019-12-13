const users = require('../data/users');
const menus = require('../data/menus');
const APIError = require('../rest').APIError;

module.exports = {
    'GET /api/users': async (ctx, next) => {
        ctx.rest({
            users: await users.getUsers()
        });
    },

    'POST /api/users': async (ctx, next) => {
        ctx.rest({
            users: await users.getUser(ctx.request.body.loginid)
        });
    },

    'POST /api/menus': async (ctx, next) => {
        ctx.rest({
            menus: await menus.getMenus(ctx.request.body.userid)
        });
    },

    'POST /api/products': async (ctx, next) => {
        var p = products.createProduct(ctx.request.body.name, ctx.request.body.manufacturer, parseFloat(ctx.request.body.price));
        ctx.rest(p);
    },

    'DELETE /api/products/:id': async (ctx, next) => {
        console.log(`delete product ${ctx.params.id}...`);
        var p = products.deleteProduct(ctx.params.id);
        if (p) {
            ctx.rest(p);
        } else {
            throw new APIError('product:not_found', 'product not found by id.');
        }
    }
};
