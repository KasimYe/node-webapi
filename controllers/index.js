const entity = require('./../model');
let User = entity.User;

var fn_index = async (ctx, next) => {
    ctx.response.body = `<h1>Index</h1>
        <form action="/signin" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
};

var fn_signin = async (ctx, next) => {
    var
        name = ctx.request.body.name || '',
        password = ctx.request.body.password || '';
    console.log(`signin with name: ${name}, password: ${password}`);
    if (name === '' || password === '') {
        ctx.response.body = `<h1>Login failed!</h1>
        <p><a href="/">Try again</a></p>`;
    } else {        
        var user = await User.create({
            storeID: 1,
            userName: name,
            loginID: name + '-' + Date.now() + '@garfield.pet',
            password: password
        });
        console.log('created: ' + JSON.stringify(user));
        ctx.response.body = `<h1>Welcome, ${name}!</h1>`;
    }
};

module.exports = {
    'GET /': fn_index,
    'POST /signin': fn_signin
};