const composer = require('module-composer');
const modules = require('./modules');

module.exports = ({ config }) => {

    const { configure } = composer(modules);
    const { compose } = configure(config);
    return compose.end();

};
