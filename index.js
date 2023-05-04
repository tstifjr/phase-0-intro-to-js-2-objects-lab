// Write your solution in this file!
const employee = {
    name: "Bill",
    streetAddress: "123 N Lane",
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    const updatedEmployee = {...employee};
    console.log(updatedEmployee);
    updatedEmployee[key] = value;
    return updatedEmployee;

};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key, value){
    const copyEmployee = {...employee};
    delete copyEmployee[key];
    return copyEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value){
    delete employee[key];
    return employee;
}
;
