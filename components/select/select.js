import component from "../component.js"

export default class select extends component{

    constructor(input_name, options, placeholder='', label=null) {
        super()
        this.input_name = input_name
        this.label = label
        this.placeholder = placeholder
        this.options = options.map(option => {
            return `<option value="${option.value}">${option.text}</option>`
        })

        this.options.join('\n')
    }


    ready() {
        
    }

    render() {

        return `
        <div class="col-md" _id="${this.id}">
            <div class="form-group">
            ${this.label ? `<label for="${this.input_name}">${this.label}</label>` : ''}
            <select
                class="form-control"
                name="${this.input_name}"
                placeholder="${this.placeholder}"
            >
                ${this.options}
            </select>
            </div>
        </div>
        `
    }
}