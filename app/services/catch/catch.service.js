class CatchService extends App.BaseClass {

    /**
     * 获取电影列表
     */
    async getMoviesList (url) {
        console.log('service getMoviesList')
        return await this.request.get(url)

    }

}

module.exports = CatchService;
