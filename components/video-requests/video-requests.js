import video_request from "../video-request/video-request.js"
import component from "../component.js"

export default class app extends component {

    constructor() {
        super()
        this.video_requests_records = []
        this.video_requests = []

        this.update()
    }

    update() {
        fetch('http://localhost:7777/video-request').then(response => response.json()).then(records => {
            this.video_requests_records = records
            this.video_requests = []
            this.video_requests_records.forEach(record => {
                this.video_requests.push(
                    new video_request(record)
                )
            })
            super.update()
            this.ready()
        })
    }

    ready() {
        this.video_requests.forEach(video_request => {
            video_request.ready()
        })
    }

    render() {
        return `
        <div id="listOfRequests" _id="${this.id}">
            ${this.video_requests.length > 0 ?this.video_requests.map(video_request => {
                return video_request.render()
            }).join('\n') : '<h5 class="text-center">No requests exist !</h5>'}
        </div>
        `
    }
}