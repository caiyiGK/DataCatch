'use strict';
// https://58-37-22-39.ad50049582c44213a3184a03b51faa0e.plex.direct:32400/library/sections/2/all?type=1&sort=addedAt%3Adesc&includeCollections=1&X-Plex-Container-Start=0&X-Plex-Container-Size=50&X-Plex-Product=Plex%20Web&X-Plex-Version=3.44.1&X-Plex-Client-Identifier=3kf68icjeg6ops43bptvcgqf&X-Plex-Platform=Chrome&X-Plex-Platform-Version=66.0&X-Plex-Sync-Version=2&X-Plex-Device=OSX&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1280x248%2C1280x800&X-Plex-Token=efEBggdErRy4NP9YWUUC&X-Plex-Provider-Version=1.2
module.exports = {

    "domain": {
        "website": "http://localhost:3000/",
        "plex": {
            "domain": "https://61-173-24-12.ec085bcfcad44a5294db9a686dd3f552.plex.direct:32400",
            'token': 'dytE8en3SmMXp4Z7fBi6'
        }
    },

    "mongodb": {
        "sessionStore": {
            "url": 'mongodb://localhost:27017/myhd',
            "ttl": 15 * 24 * 60 * 60,
            "autoRemove": "disabled"
        },
        "cookieSecret": 'myhd',
        "myhd": 'mongodb://localhost:27017/myhd',
        "plex": 'mongodb://localhost:27017/plex'
    }

}
