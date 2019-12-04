const entity = require('./../model');
let Menu = entity.Menu;

module.exports = {
    getMenus: () => {       
        return new Promise((resolve, reject) => {
            Menu.findAll({
                where :{
                    bottom:1
                }
            }).then(menus => {
                resolve(menus)
            }).catch(e => {
                resolve(null)
            });
        })
    },

    getMenu: (id) => {
        return new Promise((resolve, reject) => {
            Menu.findOne({
                where:{
                    menuID:id
                }
            }).then(menus => {
                resolve(menus)
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
