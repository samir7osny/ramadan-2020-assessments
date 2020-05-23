import component from "../component.js"

export default class button extends component {

    constructor(type, button_text) {
        super()
        this.type = type
        this.button_text = button_text
    }


    ready() {
        
    }

    render() {

        return `
        <button type="${this.type}" class="btn btn-success mt-3" _id="${this.id}">
            ${this.button_text}
        </button>
        `
    }
}