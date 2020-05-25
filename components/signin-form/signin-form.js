import input from "../input/input.js";
import button from "../button/button.js";
import component from "../component.js";

export default class signin extends component {

    constructor(callback) {
        super()
        this.author_name_input = new input('author_name', 'Write your name here', 'Your name *', true)
        this.author_email_input = new input('author_email', 'Write your email here', 'Your email *', true, 100, 'email')
        this.submit_button = new button('submit', 'Sign up')

        this.callback = callback
    }

    ready() {
        this.form = document.getElementById('signin-form')
        if (this.form) {
            this.form.addEventListener('submit', (e) => {
                this.submit(e)
            })
        }
    }

    reset() {

    }

    submit(e) {
        e.preventDefault()
        let form_data = new FormData(e.target)
        let object = {}
        form_data.forEach((value, key) => {object[key] = value})
        let json = JSON.stringify(object)
        fetch('http://localhost:7777/users/login', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: json,
        }).then(response => response.json())
        .then(res => {
            e.target.reset()
            this.callback(res)
        })
    }
    
    render() {
        return `
        <div class="container my-5" style="padding: 2rem 20rem" _id="${this.id}">
            <form id="signin-form">
            <div class="row">
                ${this.author_name_input.render()}
            </div>
            <div class="row">
            ${this.author_email_input.render()}
            </div>

            ${this.submit_button.render()}
            </form>
        </div>
        `
    }
}