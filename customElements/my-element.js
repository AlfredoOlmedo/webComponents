const template = document.createElement('div')
template.innerHTML = `
<style>
.texto {
    color: red;
}
p {
    color: blue;
}
    </style>
<p class="texto">Hola Mundo 2</p>
<p>Texto de ejemplo</p>
`

class myElement extends HTMLElement {
    constructor() {
        super()
       this.p = document.createElement('p')
    }
    connectedCallback() {
        this.p.textContent = "Hola Mundo"
        this.appendChild(this.p)
        this.appendChild(template)
    }
}
customElements.define("my-element", myElement)