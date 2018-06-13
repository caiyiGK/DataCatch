'use strict';
const MongoClient = require('mongodb').MongoClient;
const MongoConfg  = require('../../config');
const parseString = require('xml2js').parseString;

class CatchService extends App.BaseClass {

    /**
     * 获取电影列表
     */
    async getMoviesList (url) {
        console.log('service getMoviesList')
        try {
            let result = await this.request.get(url);
            return await this.XML(result.text);
        } catch (error) {
            console.log(error)
            console.log('---- getMoviesList Error ---- ')
        }
    }

    /**
     * XML 转换
     * @param {XML} [xml]
     */
    XML(xml) {
        return new Promise((resolve, reject) => {
            parseString(xml, {
                explicitArray: false,
                mergeAttrs: true
            }, (err, result) => {
                if (err) {
                    console.log(err)
                    reject(err);
                }
                resolve(result);
            })
        })
    }

}

module.exports = CatchService;
