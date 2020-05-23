import component from "../component.js"

export default class input extends component {

    constructor(input_name, label='', placeholder='') {
        super()
        this.input_name = input_name
        this.label = label
        this.placeholder = placeholder
    }


    ready() {
        
    }

    render() {

        return `
        <div class="col-md" _id="${this.id}">
            <div class="form-group">
            <label for="${this.input_name}">${this.label}</label>
            <input
                class="form-control"
                name="${this.input_name}"
                placeholder="${this.placeholder}"
            />
            </div>
        </div>
        `
    }
}