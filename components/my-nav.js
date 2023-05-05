let pathName = new URL(import.meta.url).pathname;
let name = pathName.split('/').pop().replace('.js', '');

        export default class myNav extends HTMLElement {
            static utl = import.meta.url;
            static async components() {
                return await (await fetch(pathName.replace('.js', '.html'))).text();
            }
            constructor(){
                super();
                this.attachShadow({mode: 'open'});
            }
            handleEvent(e) {
                (e.type === 'click') ? this.worker(e) : undefined;
            }
            worker() {
                let wk = new Worker('../config/worker.js', {type: 'module'});
                wk.postMessage({message: "Hola bebe "});
                wk.addEventListener('message', (e)=> {
                });
            }
            connectedCallback() {
                Promise.resolve(myNav.components()).then(html=> {
                    this.shadowRoot.innerHTML = html;
                    this.btn = this.shadowRoot.querySelector('button');
                    this.btn.addEventListener('click', this.handleEvent.bind(this));
                })
            }
        }
customElements.define(name, myNav);
    