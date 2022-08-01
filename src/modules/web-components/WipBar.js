module.exports = () => {

    return class WipBar extends HTMLElement {

        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
        }

        connectedCallback() {
            const styles = document.createElement('style');
            this.shadowRoot.appendChild(styles);

            styles.innerHTML = `
.wip-bar {
    background: repeating-linear-gradient(
        135deg,
        yellow,
        yellow 10px,
        black 10px,
        black 20px
    );
    
    padding: 0.2rem 1.5rem;
    text-align: center;
    font-weight: bold;
    font-family: 'Roboto Condensed', sans-serif;
}

.wip-bar .wip-text {
    padding: 0 1.5rem;
    color: black;
    background-color: yellow;
    letter-spacing: .1rem;
}`;

            const wipBar = document.createElement('div');
            wipBar.setAttribute('class', 'wip-bar');

            const wipText = document.createElement('span');
            wipText.setAttribute('class', 'wip-text');
            wipText.innerHTML = this.getAttribute('wip-text') || 'WORK IN PROGRESS';
            wipBar.appendChild(wipText);

            this.shadowRoot.appendChild(wipBar);
        }
    };
};
