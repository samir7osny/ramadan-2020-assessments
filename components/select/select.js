export default class select {

    constructor(input_name, options, label='', placeholder='') {
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
        <div class="col-md">
            <div class="form-group">
            <label for="${this.input_name}">${this.label}</label>
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