(function () {
    'use strict';
    describe('test suite for set - unordered collection of values with no repeated elements', function () {
        var mySet;
        beforeEach(function () {
            mySet = new setList();
        });
        it('should display the initial size of the set', function () {
            expect(mySet.size()).toBe(0);
        });
        it('should contain no elements', function () {
            expect(mySet.empty()).toBe(true);
        });
        it('should contain no element with some name', function () {
            expect(mySet.contains('jinesh')).toBe(false);
        });
        it('should add one element to the set', function () {
            expect(mySet.size()).toBe(0);
            expect(mySet.contains('jinesh')).toBe(false);
            mySet.add('jinesh');
            expect(mySet.size()).toBe(1);
            expect(mySet.contains('jinesh')).toBe(true);
        });
        it('should add two elements to the list', function () {
            expect(mySet.size()).toBe(0);
            expect(mySet.contains('jinesh')).toBe(false);
            mySet.add('jinesh');
            expect(mySet.size()).toBe(1);
            expect(mySet.contains('jinesh')).toBe(true);
            expect(mySet.contains('anoop')).toBe(false);
            mySet.add('anoop');
            expect(mySet.size()).toBe(2);
            expect(mySet.contains('anoop')).toBe(true);
        });
        it('should not add duplicate elements', function () {
            expect(mySet.size()).toBe(0);
            expect(mySet.contains('jinesh')).toBe(false);
            mySet.add('jinesh');
            expect(mySet.size()).toBe(1);
            expect(mySet.contains('jinesh')).toBe(true);
            mySet.add('jinesh');
            expect(mySet.size()).toBe(1);
            expect(mySet.contains('jinesh')).toBe(true);
        });
        it('should remove one element from the list', function () {
            expect(mySet.size()).toBe(0);
            expect(mySet.contains('jinesh')).toBe(false);
            mySet.add('jinesh');
            expect(mySet.size()).toBe(1);
            expect(mySet.contains('jinesh')).toBe(true);
            mySet.remove('jinesh');
            expect(mySet.empty()).toBe(true);
            expect(mySet.size()).toBe(0); 
            expect(mySet.contains('jinesh')).toBe(false);
        });
        it('should display values from the list', function () {
            expect(mySet.size()).toBe(0);
            expect(mySet.contains('jinesh')).toBe(false);
            mySet.add('jinesh');
            expect(mySet.size()).toBe(1);
            expect(mySet.contains('jinesh')).toBe(true);
            expect(mySet.contains('anoop')).toBe(false);
            mySet.add('anoop');
            expect(mySet.size()).toBe(2);
            expect(mySet.contains('anoop')).toBe(true);
            var setList = mySet.print();
            expect(setList[0]).toEqual('jinesh');
            expect(setList[1]).toEqual('anoop');
        });
    });
})();