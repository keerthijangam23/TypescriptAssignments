// statement 3 : Create an employee lead relationship with example
// statement 4: Write a function to iterate through employees and print {Employee.name} is Lead , if they are they are lead otherwise {Employee.name} is not lead
function innerIsLead(innerEmployee) {
    var _a;
    if (innerEmployee.team) {
        console.log("".concat(innerEmployee.name, " is lead"));
        (_a = innerEmployee.team) === null || _a === void 0 ? void 0 : _a.map(function (innerEmployee) {
            innerIsLead(innerEmployee);
        });
    }
    else {
        console.log("".concat(innerEmployee.name, " is not a lead"));
    }
}
function isLead(employeeList) {
    employeeList.map(function (employee) {
        var _a;
        if (employee.team) {
            console.log("".concat(employee.name, " is lead"));
            (_a = employee.team) === null || _a === void 0 ? void 0 : _a.map(function (innerEmployee) {
                innerIsLead(innerEmployee);
            });
        }
        else {
            console.log("".concat(employee.name, " is not a lead"));
        }
    });
}
var employeeList1 = [
    { name: "keerthi", age: 21, employeeId: "2109" },
    { name: "Junnu", age: 21, employeeId: "1497" },
    {
        name: "Naveen",
        age: 22,
        employeeId: "1198",
        team: [
            { name: "kevin", age: 21, employeeId: "2109" },
            {
                name: "jiva",
                age: 21,
                employeeId: "1498",
                team: [
                    {
                        name: "pallavi",
                        age: 21,
                        employeeId: "1410",
                        team: [
                            {
                                name: "shankar",
                                age: 21,
                                employeeId: "2109",
                                team: [
                                    { name: "soumya", age: 21, employeeId: "1497" },
                                    {
                                        name: "kavya",
                                        age: 21,
                                        employeeId: "1497",
                                        team: [{ name: "navya", age: 21, employeeId: "1497" }],
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
];
isLead(employeeList1);
