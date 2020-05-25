import component from "../component.js"

export default class navbar extends component {

    constructor(callback) {
        super()

        this.callback = callback
        this.user = null
    }


    ready() {
        this.routes = document.querySelectorAll(`.route`)
        this.routes.forEach(ele => {
            ele.addEventListener('click', (e) => {
                this.callback(e.target.id)
            })
        })
    }

    render() {

        return `
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand route" href="#" id="home">Video Requests</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    ${this.user ? `
                        <li class="nav-item">
                            <a class="nav-link">${this.user.author_name}</a>
                        </li>
                    `: `
                    <li class="nav-item ${this.active == 'signin' ? 'active' : ''}">
                        <a class="nav-link route" href="#" id="signin">Signin</a>
                    </li>
                    `}
                </ul>
            </div>
        </nav>
        `
    }
}