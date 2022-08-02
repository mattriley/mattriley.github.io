const composer = require('module-composer');
const modules = require('./modules');

module.exports = ({ configs = [] } = {}) => {

    const { compose, config } = composer(modules, { configs });
    // compose('webComponents', { config });
    return compose.end();

};
