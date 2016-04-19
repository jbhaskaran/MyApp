function Employee(name, title) {
    this.name = name;
    this.title = title;
}
Employee.prototype.display = function () {
    console.log("My emp name is: ", this.name);
    console.log("My emp title is: ", this.title);
}

Employee.prototype.displayName = function (){
    console.log("My emp display name is: ", this.name);
}


function Manager(name, title, dept) {
    Employee.call(this, name, title);
    this.dept = dept;
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.display = function () {
    console.log("My name is: ", this.name);
    console.log("My title is: ", this.title);
    console.log("My dept is: ", this.dept);
}


