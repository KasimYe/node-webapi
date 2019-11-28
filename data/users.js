const entity = require('./../model');
let User = entity.User;

module.exports = {
    getUsers: () => {       
        return new Promise((resolve, reject) => {
            User.findAll().then(users => {
                resolve(users)
            }).catch(e => {
                resolve(null)
            });
        })
    },

    getUser: (id) => {
        return new Promise((resolve, reject) => {
            User.findOne({
                where:{
                    loginID:id
                }
            }).then(users => {
                resolve(users)
            }).catch(e => {
                resolve(null)
            });
        })
    },

    createUser: (name, manufacturer, price) => {
        return null;
    },

    deleteUser: (id) => {
        return null;
    }
};
