import form from "../form/form.js"
import video_requests from "../video-requests/video-requests.js"
import component from "../component.js"
import filter from "../filter/filter.js"

export default class app extends component {

    constructor() {
        super()
        this.video_requests = new video_requests()
        this.video_form = new form(this.form_callback.bind(this))
        this.filter = new filter(this.filter_callback.bind(this))
    }

    form_callback() {
        this.video_requests.get_records()
    }

    filter_callback(filters) {
        this.video_requests.filters = filters
        this.video_requests.update()
    }

    ready() {
        this.video_form.ready()
        this.filter.ready()
    }

    render() {
        return `
        <div class="container my-5" _id="${this.id}">
            <div class="formContainer my-5">
                ${this.video_form.render()}
            </div>
            <hr />
            <h1 class="mb-4">List of requested videos</h1>
            ${this.filter.render()}
            ${this.video_requests.render()}
        </div>
        `
    }
}