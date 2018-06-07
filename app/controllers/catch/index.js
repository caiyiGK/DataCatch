class IndexController extends App.Controller {

    /**
     * fn_index
     */
    async fn_index () {
        this.ctx.response.body = `<h1>Index</h1>
            <form action="/sigin" method="post">
                <p>Name: <input name="name" value="koa"></p>
                <p>Password: <input name="password" type="password"></p>
                <p><input type="submit" value="Submit"></p>
            </form>`;
    }

    /**
     * fn_sigin
     */
    async fn_sigin () {
        this.ctx.response.body = `<h1>Index</h1>
            <form action="/sigin" method="post">
                <p>Name: <input name="name" value="koa"></p>
                <p>Password: <input name="password" type="password"></p>
                <p><input type="submit" value="Submit"></p>
            </form>`;
        console.log(123)
    }

}

module.exports = IndexController;
