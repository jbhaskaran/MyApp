let p = new Promise((resolve, reject) => {
doAsyncThing((err, value) => {
        if (err) {
            reject(err);
        }
        else {
            resolve(value);
        }
    });
});

function doAsyncThing() {
    var xhr = new XMLHttpRequest();
}