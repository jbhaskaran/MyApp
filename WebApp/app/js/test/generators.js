var makeAjaxCall = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = function () {
        var response = xhr.responseText;
        if (xhr.readyState != 4) return;
        if (xhr.status === 200) {
            callback(response);
        }
    };
    xhr.send();
};


var request = function (url) {
    makeAjaxCall(url, function (response) {
        it.next(response);
    });
};

var main = function*() {
    var result1 = yield request('https://api.myjson.com/bins/2qjdn');
    var data = JSON.parse(result1);
    console.log(data);
    
    var result2 = yield request('https://api.myjson.com/bins/3zjqz');
    var data2 = JSON.parse(result2);
    console.log(data2);
};

var it = main();
it.next();




//function* foo() {
//    var y = yield "bar";
//    var x = 1 + (yield "foo");
//    console.log(x);
//}

//var f = foo();
//var result = f.next();
//result = f.next("bar");
//result = f.next("foo");
//result = f.next();