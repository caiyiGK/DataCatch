class HelloController extends App.BaseClass {

    /**
     * HELLO
     */
    async fn_hello (ctx, next) {
        console.log(3434)
        /**this.request
            .get()
            .end(function(err, res){
                if (res.ok) {
                    console.log('yay got ' + JSON.stringify(res.body));
                } else {
                    console.log('Oh no! error ' + res.text);
                }
            })**/
    }

}

module.exports = HelloController;
