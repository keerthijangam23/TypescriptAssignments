// statement 3 : Create an employee lead relationship with example
// statement 4: Write a function to iterate through employees and print {Employee.name} is Lead , if they are they are lead otherwise {Employee.name} is not lead

type employeeType = {
  name: string;
  age: number;
  employeeId: string;
  team?: employeeType[];
};

function innerIsLead(innerEmployee: employeeType) {
  if (innerEmployee.team) {
    console.log(`${innerEmployee.name} is lead`);
    innerEmployee.team?.map((innerEmployee) => {
      innerIsLead(innerEmployee);
    });
  } else {
    console.log(`${innerEmployee.name} is not a lead`);
  }
}

function isLead(employeeList: employeeType[]) {
  employeeList.map((employee) => {
    if (employee.team) {
      console.log(`${employee.name} is lead`);
      employee.team?.map((innerEmployee) => {
        innerIsLead(innerEmployee);
      });
    } else {
      console.log(`${employee.name} is not a lead`);
    }
  });
}

const employeeList1: employeeType[] = [
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
