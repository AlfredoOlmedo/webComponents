class MyCustomeElement extends HTMLElement {
    constructor() {
        super()
        console.log("Desde el contructor")
    }
    connectedCallback(){
        console.log("Desde el DOM")
    }
    disconnectedCallback(){
        console.log("Adios")
    }
}
customElements.define("my-custom-element", MyCustomeElement)

document.querySelector("my-custom-element").remove()