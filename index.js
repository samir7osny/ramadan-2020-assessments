import app from "./components/app/app.js"

document.addEventListener('DOMContentLoaded', () => {
    let _app = new app()
    document.getElementsByTagName('body')[0].innerHTML = _app.render()
    _app.ready()
})