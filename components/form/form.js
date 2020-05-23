import input from "../input/input.js";
import select from "../select/select.js";
import textarea from "../textarea/textarea.js";
import button from "../button/button.js";

export default class form {

    constructor() {
        this.author_name_input = new input('author_name', 'Your name *', 'Write your name here')
        this.author_email_input = new input('author_email', 'Your email *', 'Write your email here')
        this.topic_title_input = new input('topic_title', 'Topic *', 'Write your suggested topic here')
        this.target_level_select = new select('target_level', [
            {value: 'beginner', text: 'Beginner'},
            {value: 'medium', text: 'Medium'},
            {value: 'advanced', text: 'Advanced'},
        ], 'Target level', 'Write your name here')
        this.topic_details_select = new textarea('topic_details', 'More details *', 'Write your topic in more details here')
        this.expected_result_select = new textarea('expected_result', 'Expected results', 'Write what do you expect after watching this video')

        
        this.submit_button = new button('submit', 'Send video request')
    }

    ready() {
        this.form = document.getElementById('video-form')
        this.form.addEventListener('submit', (e) => {
            this.submit(e)
        })
    }

    submit(e) {
        e.preventDefault()
        let form_data = new FormData(e.target)
        fetch('http://localhost:7777/video-request', {
            method: 'post',
            body: form_data,
        })
        .then(res => {
            
        })
    }
    
    render() {
        return `
        <form id="video-form">
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
            ${this.topic_details_select.render()}
            ${this.expected_result_select.render()}
          </div>

          ${this.submit_button.render()}
        </form>
        `
    }
}