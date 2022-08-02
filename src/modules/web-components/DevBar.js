module.exports = () => {

    class DevBar extends HTMLElement {

        constructor() {
            super();
        }

        connectedCallback() {
            const shadow = this.attachShadow({ mode: 'open' });
            const styles = document.createElement('style');
            shadow.appendChild(styles);

            styles.innerHTML = `
.dev-bar {
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
    padding: 0.2rem 1.5rem;
    white-space: nowrap;
    border-top: solid 2px white;
    color: white;
    background-color: black;
    font-family: 'Roboto Condensed', sans-serif;
}

.dev-bar a, ::slotted(a) {
    padding-left: 1.5rem;
    text-decoration: none;
    color: white;
}

.dev-bar a:hover, ::slotted(a:hover) {
    text-decoration: underline;
}

.dev-bar .left {
    text-align: left;
}

.dev-bar .right {
    text-align: right;
}

.dev-bar .app-name {
    text-transform: uppercase;
    letter-spacing: .1rem;
    font-weight: bold;
}

.dev-bar .author {
    font-weight: bold;
    font-family: 'Shadows Into Light';
}`;

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

            shadow.appendChild(devBar);
        }
    }

    return DevBar;

};
