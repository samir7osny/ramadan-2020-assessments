import component from "../component.js"

export default class input extends component {

    constructor(input_name, placeholder='', label=null, required=false, maxLength=-1, type='text') {
        super()
        this.input_name = input_name
        this.label = label
        this.placeholder = placeholder
        this.required = required
        this.maxLength = maxLength
        this.type = type
    }


    ready() {
        
    }

    render() {

        return `
        <div class="col-md" _id="${this.id}">
            <div class="form-group">
            ${this.label ? `<label for="${this.input_name}">${this.label}</label>` : ''}
            <input
                ${this.required ? 'required': ''}
                ${this.maxLength != -1 ? `maxLength="${this.maxLength}"` : ''}
                type="${this.type}"
                class="form-control"
                name="${this.input_name}"
                placeholder="${this.placeholder}"
            />
            </div>
        </div>
        `
    }
}