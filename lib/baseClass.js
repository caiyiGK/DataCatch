const request = require('./request');
class BaseClass {
    constructor () {
        if (new.target === BaseClass) throw new Error('Not New');
        this.request    = request()
        this.C = this.csProxy('controller');
        this.S = this.csProxy('service');
    }

    /**
     * Controller/Service
     */
    csProxy (name) {
        let path = `${__dirname}/../app/${name}s/`;
        return new Proxy({}, {
            get({ }, property) {
                try {
                    let file = property.split('_');
                    let PATH_FILE = file.length > 1
                        ? path + file[0] + '/' + file[1] + '.' + name
                        : path + file[0] + '.' + name;

                    let clas = require(PATH_FILE);
                    return new clas();
                }
                catch (err) {
                    throw new ReferenceError("Property \"" + property + "\" does not exist in " + name + "s.");
                }
            }
        })
    }
}

module.exports = BaseClass;
