function setList() {
    this.length = 0;
    this.setArray = [];
}
setList.prototype = {
    constructor : setList,
    add : function (obj) {
        if (!this.contains(obj)) {
            this.setArray.push(obj);
            this.length++;
        }
    },
    remove : function (obj) {
        var newArray = [];
        for (var i = 0; i < this.setArray.length; i++) {
            if (this.setArray[i] === obj) {
                this.length--;
            }
            else {
                newArray.push(this.setArray[i]);
            }
        }
        this.setArray = newArray;
    },
    empty: function () {
        return (this.setArray.length === 0);
    },
    contains : function (obj) {
        var index = this.setArray.indexOf(obj);
        return (index !== -1);
    },
    size : function () {
        return this.length;
    },
    print : function () {
        return this.setArray;
    }
};
