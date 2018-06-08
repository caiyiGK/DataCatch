'use strict';

module.exports = {

    "domain": {
        "website": "http://localhost:3003/",
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
