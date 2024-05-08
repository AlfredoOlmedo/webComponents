class myElement extends HTMLElement {
    constructor() {
        super()   
    }
    getTemplate() {
    const template = document.createElement("template")
    template.innerHTML = `
    <section>
    <h2>Este es un Template</h2>
    <div>
        <p>un Template con texto ... </p>
    </div>
    </section> 
    ${this.getStyles()}
    `;
    return template
}   
getStyles(){
    return `
    <style>
    h2 {
        color: red;
    }
    </style>
    `
}
    render() {
        this.appendChild(this.getTemplate().content.cloneNode(true))
    }
    connectedCallback() {
        this.render()
    }
}
customElements.define("my-element", myElement)