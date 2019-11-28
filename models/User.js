const db = require('../db');

module.exports = db.defineModel('users', {
    userID: {
        type: db.INTEGER,
        unique: true,
        allowNull: true
    },
    storeID: { type: db.INTEGER, allowNull: true },
    userCode: { type: db.STRING(50), allowNull: true },
    userName: { type: db.STRING(50), allowNull: true },
    loginID: { type: db.STRING(50), allowNull: true },
    password: { type: db.STRING(50), allowNull: true },
    userGroupID: { type: db.INTEGER, allowNull: true },
    status: { type: db.INTEGER, allowNull: true },
    template: { type: db.BOOLEAN, allowNull: true },
    super: { type: db.BOOLEAN, allowNull: true },
    source: { type: db.STRING(50), allowNull: true },
    tMSID: { type: db.STRING(50), allowNull: true },
    wMSID: { type: db.STRING(50), allowNull: true },
    notes: { type: db.STRING(50), allowNull: true },
    allowMonth: { type: db.INTEGER, allowNull: true }
});
