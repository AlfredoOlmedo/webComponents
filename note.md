# Web Components

- Para crear un web component es importante crearlo en Javascript 
- importarlo como modulo en el html
- usar el siguiente codigo el cual es un Boilerplate

Codigo JS Boilerplate
```
class myElement extends HTMLElement {
    constructor() {
        super()
      ...
    }
    connectedCallback() {
        ...
        ...
    }
}
customElements.define("my-element", myElement)
```


## Custom Elements / Ejemplo 2 con estilos

```
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
```

## Templates

Nota:
El template no se va a renderizar, tenemos que iniciarlo nosotros




## Shadow DOM

Nota
PAra evitar  conflictos de interoperavilidad con estilos, tenemos que usar el Shadow DOm el cual, funciona como si fuera un encapsulamiento interno "SCOPE" y no afecta al DOM externo o prinicipal