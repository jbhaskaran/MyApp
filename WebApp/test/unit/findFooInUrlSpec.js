(function () {
    'use strict';
    describe('find foo in url spec', function () {
        it('find foo in url', function (){
            //debugger;
            var finalUrl = findFooInUrl('http://www.opentable.com/index.php?a=b&foo=bar&c=d');
            expect(finalUrl).toBe('http://www.opentable.com/index.php?a=b&c=d'); 
        });

        it('no foo in url', function (){
            //debugger;
            var finalUrl = findFooInUrl('http://www.opentable.com/index.php?a=b&c=d');
            expect(finalUrl).toBe('http://www.opentable.com/index.php?a=b&c=d');
        });
    });

})();