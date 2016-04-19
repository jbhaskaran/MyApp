(function () {
    'use strict';
    describe('practice spec', function () {
        it('should return correct values', function () {
            var employee = new Employee('Jinesh', 'Hello');
            employee.display();
            var manager = new Manager('Jinesh', 'Hello', 'Engg');
            manager.display();
            manager.displayName();
        });
    });
})();


function processData(input) {
    //Enter your code here
    var arr = input.split(' ');
    var totalStrings = parseInt(arr[0]);
    var strStartIndex = 1;
    var strEndIndex = totalStrings;
    var totalQueryStrings = parseInt(arr[totalStrings + 1]);
    var qStartIndex = totalQueryStrings + 1;
    var qEndIndex = qStartIndex + totalQueryStrings;
    var count;
    for (var i = qStartIndex; i < qEndIndex; i++) {
        var queryString = arr[i];
        count = 0;
        for (var j = strStartIndex; j < strEndIndex; j++) {
            if (arr[j] === queryString) {
                count++;
            }
        }
        console.log(count);
    }
}
processData('4 aba baba aba xzxb 3 aba xzxb ab');
