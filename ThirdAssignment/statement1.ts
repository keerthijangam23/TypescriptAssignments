// statement 1 : Create any type with 5-6 properties each of different type of values and few as optional properties and
// Create another type from it with all properties as required (Without using typescript default Required type)

type employeeTypee = {
  name: string;
  age: number;
  isEmployee?: boolean;
  vehicleType?: number;
  dateOfBirth: any;
};

type RemoveOptionalProperty<Type> = {
  [Property in keyof Type]-?: Type[Property];
};

type employee1 = RemoveOptionalProperty<employeeTypee>;

let employee2: employee1 = {
  name: "keerthi",
  age: 21,
  isEmployee: true,
  vehicleType: 2,
  dateOfBirth: 2002,
};
