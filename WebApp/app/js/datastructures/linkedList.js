function linkedList() {
    this.length = 0;
    this.head = null;
}
linkedList.prototype = {
    constructor : linkedList,
    add : function (data){
        var node = { data: data, next: null };
        if (this.head === null) {
            node.data = data;
            this.head = node;
        }
        else {
            var current = this.head;
            var prev = null;
            while (current !== null) {
                prev = current;
                current = current.next;
            }
            prev.next = node;
        }
        this.length++;
    },
    print: function (){
        var current = this.head;
        while (current !== null) {
            console.log(current.data);
            current = current.next;
        }
    },
    size : function () {
        return this.length;
    },
    merge : function (list1) {
        var current = this.head;
        var current1 = list1.head;
        var prev = null, prev1 = null;
        while (current !== null) {
            prev = current;
            var value = current.data;
            var value1 = current1.data;
            if (value < value1) {
                
            } else if (value > value1) {
                if (current1 !== null) {
                    prev1 = current1;
                    prev.next = current1;
                    current1.next = current;
                    current1 = prev1.next;
                }
            }
            current = current.next;
        }
    }
}

var list = new linkedList();
list.add(1);
list.add(10);
list.add(30);
list.add(40);
list.print();
var list1 = new linkedList();
list1.add(5);
list1.add(15);
list.add(20);

//var result = list.merge(list1);
