const composer = require('module-composer');
const modules = require('./modules');

module.exports = ({ compositionName, configs }) => {

    const { compose } = composer(modules, { compositionName, configs });
    return compose.end();

};
