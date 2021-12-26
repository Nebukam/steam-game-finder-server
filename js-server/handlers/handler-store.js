'use strict';

const HandlerUserBase = require(`./base-user-handler`);

class HandlerStore extends HandlerUserBase{
    constructor(){super();}

    Handle(){
        this.Fetch(`https://store.steampowered.com/app/${this._id}/`);
    }

}

module.exports = HandlerStore;