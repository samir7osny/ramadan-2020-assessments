export default class video_request {

    constructor(title, details, expected_results, votes, status, author_name, date, target_level) {
        this.title = title
        this.details = details
        this.expected_results = expected_results
        this.votes = votes
        this.status = status
        this.author_name = author_name
        this.date = date
        this.target_level = target_level
    }


    ready() {
        
    }

    render() {

        return `
        <div class="card mb-3">
            <div class="card-body d-flex justify-content-between flex-row">
            <div class="d-flex flex-column">
                <h3>${this.title}</h3>
                <p class="text-muted mb-2">${this.details}</p>
                <p class="mb-0 text-muted">
                <strong>Expected results:</strong> ${this.expected_results}
                </p>
            </div>
            <div class="d-flex flex-column text-center">
                <a class="btn btn-link">🔺</a>
                <h3>${this.votes}</h3>
                <a class="btn btn-link">🔻</a>
            </div>
            </div>
            <div class="card-footer d-flex flex-row justify-content-between">
                <div>
                    <span class="text-info">${this.status}</span>
                    &bullet; added by <strong>${this.author_name}</strong> on
                    <strong>${this.date}</strong>
                </div>
                <div
                    class="d-flex justify-content-center flex-column 408ml-auto mr-2"
                >
                    <div class="badge badge-success">
                    ${this.target_level}
                    </div>
                </div>
            </div>
        </div>
        `
    }
}