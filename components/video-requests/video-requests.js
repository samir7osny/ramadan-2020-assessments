import video_request from "../video-request/video-request.js"
import component from "../component.js"

export default class app extends component {

    constructor() {
        super()
        this.video_requests_records = []
        this.video_requests = []
        this.filters = {
            'sort': 'new_first',
            'filter': 'all',
            'search': ''
        }

        this.get_records()
    }

    get_records() {
        fetch('http://localhost:7777/video-request').then(response => response.json()).then(records => {
            this.video_requests_records = records
            this.video_requests = []
            this.video_requests_records.forEach(record => {
                this.video_requests.push(
                    new video_request(record)
                )
            })
            this.update()
        })
    }

    update() {
        let filtered_records = this.video_requests_records
        let sort = this.filters.sort
        if (sort == 'new_first')
            filtered_records.sort((a,b) => (new Date(a.submit_date) > new Date(b.submit_date)) ? -1 : ((new Date(b.submit_date) > new Date(a.submit_date)) ? 1 : 0))
        else 
            filtered_records.sort((a,b) => (a.votes.ups - a.votes.downs > b.votes.ups - b.votes.downs) ? -1 : ((b.votes.ups - b.votes.downs > a.votes.ups - a.votes.downs) ? 1 : 0))
        
        let filter = this.filters.filter
        if (filter != 'all') filtered_records.filter(record => record.status == filter)
        
        let search = this.filters.search
        if (search != '') filtered_records = filtered_records.filter(record => record.topic_title && record.topic_title.toLowerCase().includes(search.toLowerCase()))

        this.video_requests = []
        filtered_records.forEach(record => {
            this.video_requests.push(
                new video_request(record)
            )
        })

        super.update()
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