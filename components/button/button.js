import component from "../component.js"

export default class button extends component {

    constructor(type, button_text, cls='success') {
        super()
        this.type = type
        this.button_text = button_text
        this.class = cls
    }


    ready() {
        
    }

    render() {

        return `
        <button type="${this.type}" class="btn btn-${this.class}" _id="${this.id}">
            ${this.button_text}
        </button>
        `
    }
}