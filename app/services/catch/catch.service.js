'use strict';
const openDB  = require('../../../lib/db');
const test = require('assert');
const parseString = require('xml2js').parseString;

class CatchService extends App.BaseClass {

    /**
     * 获取电影列表
     */
    async getMoviesList (url) {
        console.log('service getMoviesList')
        try {
            let result = await this.request.get(url);
            let resultText = await this.XML(result.text);
            let resultArray = resultText.MediaContainer.Video;

            let client = await openDB(); // 打开数据库
            let db = client.db('movies')
            let col = await db.collection('hd_movies_list'); // 选择文档
            let doc = await col.insertMany(resultArray); // 写入数据
            client.close();

            let bool = test.equal(resultArray.length, doc.insertedCount);
            return resultArray.length == doc.insertedCount ? 'insertMany:ok' : 'insertMany:err';
        } catch (error) {
            console.log(error)
            console.log('---- catch.service getMoviesList Error ---- ')
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
