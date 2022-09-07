const emp = {
    empFirstName:'John',
    empLastName:'Roy',
    empFullName: function(){
        return this.empFirstName +" "+ this.empLastName
    } 
}

function empName(age,nationlity){
    return console.log("Employe Name = " + this.empFullName() + ", Employe Age = " + age +", Employe Nationlity = "+ nationlity)
}

empName.call(emp,25,"Indian")