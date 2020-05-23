export default class input {

    constructor(input_name, label='', placeholder='') {
        this.input_name = input_name
        this.label = label
        this.placeholder = placeholder
    }


    ready() {
        
    }

    render() {

        return `
        <div class="col-md">
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