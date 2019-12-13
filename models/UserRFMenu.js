const db = require('../db');

module.exports = db.defineModel('userrfmenu', {    
    storeID: { type: db.INTEGER, allowNull: false },
    userID: { type: db.INTEGER, allowNull: false },
    menuID: { type: db.INTEGER, allowNull: false }
});
