import form from "../form/form.js"
import video_requests from "../video-requests/video-requests.js"
import component from "../component.js"
import filter from "../filter/filter.js"
import navbar from "../navbar/navbar.js"
import signin_form from "../signin-form/signin-form.js"

export default class app extends component {

    constructor() {
        super()
        this.navbar = new navbar(this.navbar_callback.bind(this))
        this.video_requests = new video_requests()
        this.video_form = new form(this.user, this.form_callback.bind(this))
        this.signin_form = new signin_form(this.signin_form_callback.bind(this))
        this.filter = new filter(this.filter_callback.bind(this))

        this.active = 'home'

        this.user = null
    }

    navbar_callback(active) {
        if (this.active == active) return
        this.active = active
        this.update()
    }

    form_callback() {
        this.video_requests.get_records()
    }

    signin_form_callback(user) {
        this.user = user
        this.active = 'home'
        this.navbar.user = user
        this.video_form.user = user
        this.update()
    }

    filter_callback(filters) {
        this.video_requests.filters = filters
        this.video_requests.update()
    }

    ready() {
        this.navbar.ready()
        this.video_form.ready()
        this.filter.ready()
        this.signin_form.ready()
    }

    render() {
        return `
        <div  _id="${this.id}">
            ${this.navbar.render()}

            ${this.active == 'home' ? `
            <div class="container my-5">
                <div class="formContainer my-5">
                    ${this.video_form.render()}
                </div>
                <hr />
                <h1 class="mb-4">List of requested videos</h1>
                ${this.filter.render()}
                ${this.video_requests.render()}
            </div>
            ` : 
            this.active == 'signin' ? 
                `${this.signin_form.render()}` 
                : ''
            }
        </div>
        `
    }
}