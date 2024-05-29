// statement 2 : Create a function which takes input type and returns Yes if passed type is string otherwise No

function typeCheck<Type>(type: Type) {
  if (typeof type === "string") {
    return "Yes";
  }
  return "No";
}

console.log(typeCheck(2));
console.log(typeCheck("keerthi"));
