import form from "../form/form.js"
import video_request from "../video-request/video-request.js"

export default class app {

    constructor() {
        this.video_form = new form()
        this.video_requests = [
            new video_request('Dummy Topic title', 'dummy topic details', 'Dummy expected result text', 0, 'NEW', 'Fake Name', 'Sat Apr 11 2020', 'Beginners')
        ]
    }


    ready() {
        this.video_form.ready()
        this.video_requests.forEach(video_request => {
            video_request.ready()
        })
    }

    render() {

        return `
        <div class="container my-5">
            <div class="formContainer my-5">
                ${this.video_form.render()}
            </div>
            <hr />
            <h1 class="mb-4">List of requested videos</h1>
            <div id="listOfRequests">
                ${this.video_requests.map(video_request => {
                    return video_request.render()
                }).join('\n')}
            </div>
        </div>
        `
    }
}