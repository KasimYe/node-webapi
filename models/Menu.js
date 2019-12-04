const db = require('../db');

module.exports = db.defineModel('rfmenu', {
    menuID: {
        type: db.INTEGER,
        unique: true,
        primaryKey: true
    },
    menuSort: { type: db.INTEGER, allowNull: true },
    menuText: { type: db.STRING(20), allowNull: true },    
    visible: { type: db.BOOLEAN, allowNull: true },    
    url: { type: db.STRING(50), allowNull: true },
    bottom: { type: db.BOOLEAN, allowNull: true }
});
