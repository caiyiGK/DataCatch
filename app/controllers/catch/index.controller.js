class IndexController extends App.BaseClass {

    /**
     * 获取电影列表
     */
    async list (ctx, next) {
        console.log('list')
        let start = 0,
            size = 1;
        let url = `https://58-37-22-39.ad50049582c44213a3184a03b51faa0e.plex.direct:32400/library/sections/2/all?type=1&sort=addedAt%3Adesc&includeCollections=1&X-Plex-Container-Start=${start}&X-Plex-Container-Size=${size}&X-Plex-Product=Plex%20Web&X-Plex-Version=3.44.1&X-Plex-Client-Identifier=3kf68icjeg6ops43bptvcgqf&X-Plex-Platform=Chrome&X-Plex-Platform-Version=66.0&X-Plex-Sync-Version=2&X-Plex-Device=OSX&X-Plex-Device-Name=Chrome&X-Plex-Device-Screen-Resolution=1280x248%2C1280x800&X-Plex-Token=efEBggdErRy4NP9YWUUC&X-Plex-Provider-Version=1.2`;
        let result = await this.S.CATCH_CATCH.getMoviesList(url);
        ctx.body = {name: result}
    }


}

module.exports = IndexController;
