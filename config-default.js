var config = {
    dialect: 'mysql',       //mysql'|'mariadb'|'sqlite'|'postgres'|'mssql'
    database: 'healthpublic',
    username: 'www',
    password: 'www',
    host: 'localhost',
    port: 3306
};

module.exports = config;

//grant all privileges on healthpublic.* to 'www'@'%' identified by 'www';