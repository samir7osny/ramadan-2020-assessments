import component from "../component.js"
import input from "../input/input.js"
import button from "../button/button.js"

export default class filter extends component {

    constructor(callback) {
        super()
        this.callback = callback

        this.filters = {
            'sort': 'new_first',
            'filter': 'all',
            'search': ''
        }

        this.new_first_button = new button('button', 'New First', 'primary')
        this.top_voted_first_button = new button('button', 'Top Votes First', 'light')
        
        this.all_button = new button('button', 'All', 'primary')
        this.new_button = new button('button', 'New', 'light')
        this.planned_button = new button('button', 'Planned', 'light')
        this.done_button = new button('button', 'Done', 'light')

        this.search_input = new input('search', 'search here')
    }

    sort() {

    }

    ready() {
        this.sort_ = document.querySelectorAll(`[_id="${this.id}"] [type="sort"]`)
        this.sort_.forEach(ele => {
            ele.addEventListener('click', (e) => {
                this.filters.sort = e.path[1].getAttribute("value")
                this.new_first_button.class = 'light'
                this.top_voted_first_button.class = 'light'
                if (this.filters.sort == 'new_first') this.new_first_button.class = 'primary'
                else this.top_voted_first_button.class = 'primary'

                this.new_first_button.update()
                this.top_voted_first_button.update()

                this.callback(this.filters)
            })
        })
        
        this.filter_ = document.querySelectorAll(`[_id="${this.id}"] [type="filter"]`)
        this.filter_.forEach(ele => {
            ele.addEventListener('click', (e) => {
                this.filters.filter = e.path[1].getAttribute("value")
                
                this.all_button.class = 'light'
                this.new_button.class = 'light'
                this.planned_button.class = 'light'
                this.done_button.class = 'light'
                
                if (this.filters.filter == 'all') this.all_button.class = 'primary'
                else if (this.filters.filter == 'new') this.new_button.class = 'primary'
                else if (this.filters.filter == 'planned') this.planned_button.class = 'primary'
                else this.done_button.class = 'primary'

                this.all_button.update()
                this.new_button.update()
                this.planned_button.update()
                this.done_button.update()
                
                this.callback(this.filters)
            })
        })
        
        this.search = document.querySelector(`[_id="${this.id}"] [type="search"]`)
        this.search.addEventListener('keyup', (e) => {
            this.filters.search = e.target.value
            
            this.callback(this.filters)
        })

    }

    render() {

        return `
            <div class='row' _id="${this.id}">
                <div class='col'>
                    <span type="sort" value="new_first">${this.new_first_button.render()}</span>
                    <span type="sort" value="top_voted_first">${this.top_voted_first_button.render()}</span>
                </div>
                <div class='col'>
                    <span type="filter" value="all">${this.all_button.render()}</span>
                    <span type="filter" value="new">${this.new_button.render()}</span>
                    <span type="filter" value="planned">${this.planned_button.render()}</span>
                    <span type="filter" value="done">${this.done_button.render()}</span>
                </div>
                <div class='col'>
                    <span type="search">${this.search_input.render()}</span>
                </div>
            </div>
        `
    }
}