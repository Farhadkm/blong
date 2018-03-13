const routes = require('next-routes')();


routes
    .add('/belonging/new','/belonging/new')
    .add('/belonging/:id','/belonging/index') 
    .add('/mybelongings','/userPage')


module.exports = routes;
