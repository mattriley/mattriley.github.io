class DevBar extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {

        const shadow = this.attachShadow({ mode: 'open' });

        const devBar = document.createElement('div');
        devBar.setAttribute('class', 'dev-bar');

        const left = document.createElement('div');
        left.setAttribute('class', 'left');
        devBar.appendChild(left);

        const appName = document.createElement('span');
        appName.setAttribute('class', 'app-name');
        appName.textContent = this.getAttribute('app-name');
        left.appendChild(appName);

        const author = document.createElement('a');
        author.setAttribute('class', 'author');
        author.setAttribute('_target', 'blank');
        author.setAttribute('href', 'https://www.linkedin.com/in/mattrileyau/');
        author.textContent = 'by Matt Riley';
        left.appendChild(author);

        const right = document.createElement('div');
        right.setAttribute('class', 'right');
        const slot = document.createElement('slot');
        right.appendChild(slot);
        devBar.append(right);

        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'https://mattriley.github.io/mattriley.css');

        shadow.appendChild(linkElem);
        shadow.appendChild(devBar);

    }
}

customElements.define('dev-bar', DevBar);

class WipBar extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {

        const shadow = this.attachShadow({ mode: 'open' });

        const wipBar = document.createElement('div');
        wipBar.setAttribute('class', 'wip-bar');

        const wipText = document.createElement('span');
        wipText.setAttribute('class', 'wip-text');
        wipText.innerHTML = this.getAttribute('wip-text') || 'WORK IN PROGRESS';
        wipBar.appendChild(wipText);

        const linkElem = document.createElement('link');
        linkElem.setAttribute('rel', 'stylesheet');
        linkElem.setAttribute('href', 'https://mattriley.github.io/mattriley.css');

        shadow.appendChild(linkElem);
        shadow.appendChild(wipBar);

    }
}

customElements.define('wip-bar', WipBar);
