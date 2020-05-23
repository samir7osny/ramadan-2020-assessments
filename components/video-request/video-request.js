import component from "../component.js"

export default class video_request extends component {

    constructor(record) {
        super()

        this.record = record
    }


    ready() {
        
    }

    render() {

        return `
        <div class="card mb-3" _id="${this.id}">
            <div class="card-body d-flex justify-content-between flex-row">
            <div class="d-flex flex-column">
                <h3>${this.record.topic_title}</h3>
                <p class="text-muted mb-2">${this.record.topic_details}</p>
                <p class="mb-0 text-muted">
                <strong>Expected results:</strong> ${this.record.expected_result}
                </p>
            </div>
            <div class="d-flex flex-column text-center">
                <a class="btn btn-link">🔺</a>
                <h3>${this.record.votes.ups - this.record.votes.downs}</h3>
                <a class="btn btn-link">🔻</a>
            </div>
            </div>
            <div class="card-footer d-flex flex-row justify-content-between">
                <div>
                    <span class="text-info">${this.record.status.toUpperCase()}</span>
                    &bullet; added by <strong>${this.record.author_name}</strong> on
                    <strong>${new Date(this.record.submit_date).toDateString()}</strong>
                </div>
                <div
                    class="d-flex justify-content-center flex-column 408ml-auto mr-2"
                >
                    <div class="badge badge-success" style="text-transform: capitalize;">
                    ${this.record.target_level}
                    </div>
                </div>
            </div>
        </div>
        `
    }
}