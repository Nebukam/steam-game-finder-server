'use strict';

const server = require(`@nkmjs/core/server`).core;

class HandlerUserBase extends server.handlers.Fetch{
    constructor(){super();}

    _SanitizeRequest(p_request){
        if(!p_request.query.url){ return false; }
        if(p_request.query.url == ``){ return false; }
        this._id = p_request.query.url;
        return true;
    }

    _OnFetchSuccess(p_response){
        this._res.send(p_response.data);
        super._OnFetchSuccess(p_response);
    }

}

module.exports = HandlerUserBase;