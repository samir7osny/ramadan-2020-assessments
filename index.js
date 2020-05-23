import app from "./components/app/app.js"

let update = () => {
    let _app = new app(update)
    document.getElementsByTagName('body')[0].innerHTML = _app.render()
    _app.ready()
}

document.addEventListener('DOMContentLoaded', () => {
    update()
})