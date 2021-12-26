'use strict';

const HandlerUserBase = require(`./base-user-handler`);

const FIFTY_YEARS_AGO = ((Date.now() - 1576800000000) / 1000).toFixed();
const REQ_HEADER = {
    Cookie: `wants_mature_content="1"; birthtime=${FIFTY_YEARS_AGO}; path=/; max-age=315360000;`
};

class HandlerStore extends HandlerUserBase {
    constructor() { super(); }

    _Init() {
        super._Init();

        let fiftyyearsAgo = ((Date.now() - 1576800000000) / 1000).toFixed(),
            headers = {
                Cookie: `wants_mature_content="1"; birthtime=${fiftyyearsAgo}; path=/; max-age=315360000;`
            };

        this._requestOptions = {
            headers: headers,
            withCredentials: true
        };
    }

    Handle() {
        this.Fetch(`https://store.steampowered.com/app/${this._id}/`);
    }

}

module.exports = HandlerStore;