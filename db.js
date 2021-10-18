// TODO: Clean up. Const + object shorthand.
var clients  = require('./data/mock-data/clients.json');
var sites  = require('./data/mock-data/sites.json');
var me  = require('./data/mock-data/me.json');
var version  = require('./data/mock-data/version.json');

module.exports = function() {
    return {
        clients : clients,
        sites : sites,
        me : me,
        version : version
    }
}