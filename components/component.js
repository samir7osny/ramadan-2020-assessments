import state from "../state.js"

export default class component{

    constructor() {
        this.id = state.get_new_id()
    }

    getElementByAttribute(attr, value, root=document.body) {
        if(root.hasAttribute(attr) && root.getAttribute(attr) == value) {
            return root
        }
        let children = root.children, 
            element;
        for(let i = children.length; i--; ) {
            element = this.getElementByAttribute(attr, value, children[i]);
            if(element) {
                return element;
            }
        }
        return null;
    }

    update() {
        this.getElementByAttribute('_id', this.id).outerHTML = this.render()
    }
}