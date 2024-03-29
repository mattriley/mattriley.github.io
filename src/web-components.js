const compose = require('./compose');

const { webComponents } = compose({});
customElements.define('dev-bar', webComponents.DevBar);
customElements.define('wip-bar', webComponents.WipBar);

const fonts = document.createElement('link');
fonts.href = 'https://fonts.googleapis.com/css?family=Roboto+Condensed|Shadows+Into+Light';
fonts.rel = 'stylesheet';
document.head.appendChild(fonts);
