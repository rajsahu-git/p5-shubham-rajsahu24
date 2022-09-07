'use strict'
const emp = {
    empFirstName: "John",
    empLastName: "Roy",
    empFullName: function(){
        let fullName = this.empFirstName + ' ' + this.empLastName
        return fullName
    }
}

function empName(){
    return console.log(this.empFullName())
}

let empolyee = empName.bind(emp)
empolyee()