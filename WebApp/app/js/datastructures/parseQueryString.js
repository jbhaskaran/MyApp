function findFooInUrl(url) {
    var baseUrl = url.substring(0, url.indexOf('?') + 1);
    var queryStrings = url.substring(url.indexOf('?') + 1);
    var params = queryStrings.split('&');
    var finalUrl = '';
    for (var i = 0; i < params.length; i++) {
        var str = params[i].slice(0, 3);
        if (str !== 'foo') {
            finalUrl = finalUrl + params[i] + '&';
        }
    }
    finalUrl = finalUrl.substring(0, finalUrl.length - 1);
    return baseUrl + finalUrl;
}