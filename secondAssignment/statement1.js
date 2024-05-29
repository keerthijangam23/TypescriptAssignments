// statement 1 : Create a function to update few properties from Student object
// it shouldn’t allow all properties, restrict type to allow to accept name and email (and don’t hard code name and email, it should be derived from Student type)
var student = {
    name: "keerthi",
    email: "keerthi@gmail.com",
    age: 21,
    isClassLeader: true,
};
var student2 = {
    name: "junnu",
    email: "junnu@gmail.com",
    age: 5,
    isClassLeader: false,
};
function updateStudent(obj1, key, obj2) {
    obj1[key] = obj2[key];
    return obj1;
}
console.log(updateStudent(student, "age", student2));
