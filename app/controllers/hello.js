class HelloController extends App.Controller {

    /**
     * HELLO
     */
    async fn_hello () {
        this.request
            .get()
            .end(function(err, res){
                if (res.ok) {
                    console.log('yay got ' + JSON.stringify(res.body));
                } else {
                    console.log('Oh no! error ' + res.text);
                }
            })
    }

}

module.exports = HelloController;
