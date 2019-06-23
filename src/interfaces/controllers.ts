import _ from '~/lib'

let controllers: any = {}

_.filesInsideFolder('controllers').forEach(controllerFile => {
    const controller = require(`./controllers/${controllerFile}`);
    controllers[controllerFile + 'Controller'] = new controller.default()
})

module.exports = controllers;


