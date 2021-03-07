'use strict'
// function validateForm() {
//     var x = document.forms["myForm"]["fname"].value;
//     if (x == null || x == "") {
//         alert("Please Enter text!");
//         return false;
//     }
// }
// function myFunction() {
//     var x, text;
//     //获取input 的值
//     x = document.getElementById("numb").value;
//     //判断
//     if (isNaN(x) || x < 1 || x > 11) {
//         text = "输入错误"
//     }
//     else {
//         text = "输入正确"
//     }
//     document.getElementById("fuck").innerHTML = text;
// }

// function foo(x) {
//     var num = 5;
//     bar = function foo(y) {
//         return (x + y + (++num));
//     }
// }
// document.writeln(foo(2));
// document.writeln(bar(10));
// document.writeln(bar(10));

/**
 * author:?
 * 
 * date:2020/3/6
 * 
 */

 class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getName() {
        var name = this.firstName + this.lastName;
    }
    sayHi() {
        var name = this.getName();
        var text = name + ":" + this.age;
        return text;
    }

}
var person = new Person("三", "张", 18);
var fuck = person.sayHi();
console.log(fuck);