const entity = require('./../model');
let Menu = entity.Menu;
let MenuRFMenu=entity.MenuRFMenu;

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
                    bottom:1,
                    menuID:id
                }
            }).then(menus => {
                resolve(menus)
            }).catch(e => {
                resolve(null)
            });
        })
    },

    getUserMenus: (id) => {
        return new Promise((resolve, reject) => {
            MenuRFMenu.findAll({
                where:{
                    storeID:1,
                    userID:id
                }
            }).then(menus => {
                
                resolve(menus)
            }).catch(e => {
                resolve(null)
            });
        })
    },
};
