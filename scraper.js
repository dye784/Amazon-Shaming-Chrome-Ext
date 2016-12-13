const Nightmare = require('nightmare');

const cartScraper = new Nightmare()
    .viewport(1024, 768)
    .useragent("Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/38.0.2125.111 Safari/537.36")
    .goto('http://supermarketstore.herokuapp.com/checkout/review')
    .wait()
    .evaluate(function() {
        const total = document.getElementsByClassName('ng-binding');
        console.log("hey", total);
    })
    .run(function(err, nightmare) {
        if (err) return console.log(err);
        console.log('Done!');
    });


