(function () {
    'use strict';
    describe('test suite for linked list', function () {
        debugger;
        var list;
        beforeEach(function () {
            list = new linkedList();
        });
        afterEach(function () {
            list = null;
        });
        it('test adding a single item to the list', function () {
            list.add(1);
            expect(list.length).toBe(1);
            expect(list.size()).toBe(1);
        });
        it('test adding multiple elements to the list', function () {
            list.add(2);
            list.add(3);
            expect(list.size()).toBe(2);
        });
    });
})();