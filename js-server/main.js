const server = require(`@nkmjs/core/server`);
const handlers = require(`./handlers`);
class ServerProcess extends server.core.ServerBase{
    constructor(p_config){super(p_config);}

    _Init(){
        
        super._Init();

        this._RegisterAPIs({
            getUserProfile:{
                route:`/user/profile/:id`,
                handler:handlers.UserProfile
            },
            getUserProfile64:{
                route:`/user/profile64/:id`,
                handler:handlers.UserProfile64
            },
            getFriendlist:{
                route:`/user/friendlist/:id`,
                handler:handlers.UserFriendlist
            },
            getLibrary:{
                route:`/user/library/:id`,
                handler:handlers.UserLibrary
            }
        });
        
    }

}

module.exports = ServerProcess;