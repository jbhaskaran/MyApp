function linkedList() {
    this.length = 0;
    this.head = null;
}
linkedList.prototype = {
    constructor : linkedList,
    add : function (data){
        this.length++;
    },
    size : function () {
        return this.length;
    }
}