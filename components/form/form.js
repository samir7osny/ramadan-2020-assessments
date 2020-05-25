import input from "../input/input.js";
import select from "../select/select.js";
import textarea from "../textarea/textarea.js";
import button from "../button/button.js";
import component from "../component.js";

export default class form extends component {

    constructor(callback) {
        super()
        this.author_name_input = new input('author_name', 'Write your name here', 'Your name *', true)
        this.author_email_input = new input('author_email', 'Write your email here', 'Your email *', true, 100)
        this.topic_title_input = new input('topic_title', 'Write your suggested topic here', 'Topic *', true, 100)
        this.target_level_select = new select('target_level', [
            {value: 'beginner', text: 'Beginner'},
            {value: 'medium', text: 'Medium'},
            {value: 'advanced', text: 'Advanced'},
        ], 'Write your name here', 'Target level')
        this.topic_details_textarea = new textarea('topic_details', 'Write your topic in more details here', 'More details *', true)
        this.expected_result_textarea = new textarea('expected_result', 'Write what do you expect after watching this video', 'Expected results')

        
        this.submit_button = new button('submit', 'Send video request')

        this.callback = callback
    }

    ready() {
        this.form = document.getElementById('video-form')
        this.form.addEventListener('submit', (e) => {
            this.submit(e)
        })
    }

    reset() {

    }

    submit(e) {
        e.preventDefault()
        let form_data = new FormData(e.target)
        fetch('http://localhost:7777/video-request', {
            method: 'post',
            body: form_data,
        })
        .then(res => {
            e.target.reset()
            this.callback()
        })
    }
    
    render() {
        return `
        <form id="video-form" _id="${this.id}">
          <div class="row">
            ${this.author_name_input.render()}
            ${this.author_email_input.render()}
          </div>
          <hr />
          <div class="row">
            ${this.topic_title_input.render()}
            ${this.target_level_select.render()}
          </div>
          <div class="row">
            ${this.topic_details_textarea.render()}
            ${this.expected_result_textarea.render()}
          </div>

          ${this.submit_button.render()}
        </form>
        `
    }
}