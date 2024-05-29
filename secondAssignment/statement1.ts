// statement 1 : Create a function to update few properties from Student object
// it shouldn’t allow all properties, restrict type to allow to accept name and email (and don’t hard code name and email, it should be derived from Student type)

type studentType = {
  name: string;
  email: string;
  age: number;
  isClassLeader: boolean;
};

let student: studentType = {
  name: "keerthi",
  email: "keerthi@gmail.com",
  age: 21,
  isClassLeader: true,
};

let student2: studentType = {
  name: "junnu",
  email: "junnu@gmail.com",
  age: 5,
  isClassLeader: false,
};

function updateStudent<Type, Key extends keyof Type>(
  obj1: Type,
  key: Key,
  obj2: Type
) {
  obj1[key] = obj2[key];
  return obj1;
}

console.log(updateStudent(student, "age", student2));
