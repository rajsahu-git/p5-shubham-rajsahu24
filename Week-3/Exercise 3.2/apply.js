'use strict'
const emp = {
    empFirstName: "John",
    empLastName: "Roy",
    empFullName: function(){
        let fullName = this.empFirstName + ' ' + this.empLastName
        return fullName
    }
}

function empName(age,nationlity){
    return console.log("Employee Name = " + this.empFullName()+", Employee Age = " + age + ", Employee Nationlity = " + nationlity)
}

empName.apply(emp,[24,"Indian"])
