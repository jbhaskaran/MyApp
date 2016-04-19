function Person(firstName){
    this.firstName = firstName;
}

Person.prototype.sayHello = function (){
    return "Hello " + this.firstName;
}

function Student(firstName, subject){
    Person.call(this, firstName);
    this.subject = subject;
}

Student.prototype = Object.create(Person.prototype);
//Student.prototype = new Person;
Student.prototype.constructor = Student;

Student.prototype.sayGoodBye = function (){
    var name = this.firstName;
    var subject = this.subject;
    return name + " Good Bye";
}



var person1 = new Person("Jinesh");
//console.log(person1.sayHello());

//var helloFunction = person1.sayHello;
//console.log(helloFunction());

//console.log(helloFunction.call(person1));

var stud = new Student("Jinesh", "English");
var data = stud.sayGoodBye();
var hello = stud.sayHello();



function duplicates(arr){
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        var a = Math.abs(arr[i]);
        if (arr[Math.abs(arr[i])] >= 0)
            arr[Math.abs(arr[i])] = -arr[Math.abs(arr[i])];
        else
            result.push(arr[i]);
    }
    return result;
}

//var a = duplicates([1, 8, 9, 5, 8, 9]);

function sumDigits(num) {
    if (num > 0) {
        var sum = 0;
        var digit = num % 10;
        num = parseInt(num / 10);
        sum = sum + sumDigits(num);
        return sum;
    }
}

//console.log(sumDigits(125));