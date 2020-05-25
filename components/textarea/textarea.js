import component from "../component.js"

export default class textarea extends component {

    constructor(input_name, placeholder='', label=null, required=false) {
        super()
        this.input_name = input_name
        this.label = label
        this.placeholder = placeholder
        this.required = required
    }


    ready() {
        
    }

    render() {

        return `
        <div class="col-md" _id="${this.id}">
            <div class="form-group">
            ${this.label ? `<label for="${this.input_name}">${this.label}</label>` : ''}
            <textarea
                ${this.required ? 'required': ''}
                class="form-control"
                name="${this.input_name}"
                placeholder="${this.placeholder}"
            ></textarea>
            </div>
        </div>
        `
    }
}