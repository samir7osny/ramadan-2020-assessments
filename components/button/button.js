export default class button {

    constructor(type, button_text) {
        this.type = type
        this.button_text = button_text
    }


    ready() {
        
    }

    render() {

        return `
        <button type="${this.type}" class="btn btn-success mt-3">
            ${this.button_text}
        </button>
        `
    }
}