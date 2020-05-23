
class state {
    constructor() {
        this.current_id = -1
    }

    get_new_id() {
        this.current_id += 1
        return this.current_id
    }
}

class singleton {

    constructor() {
        if (!singleton.instance) {
            singleton.instance = new state();
        }
    }
  
    getInstance() {
        return singleton.instance;
    }
}

export default new singleton().getInstance()