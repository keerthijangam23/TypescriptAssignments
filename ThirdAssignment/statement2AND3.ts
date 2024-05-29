// statement 2 : Write a function to take object as parameter (both keys and values are string) and return concat all keys along with values
// Ex Input: {
//   name: "User",
//   email: "user@gmail.com"
// }
// Output: "name: User, email: user@gmail.com"

// statement 3 : To make above problem more complex (property value can be either string or object of same recursive type with any nested objects)
// Ex Input: {
//   name: "User",
//   email: "user@gmail.com",
//   address: {
//       city: "Hyderabad",
//       state: "Telangana"
//   }
// }
// Output: "name: User, email: user@gmail.com, city: Hyderabad, state: Telangana"

namespace MyAssignment {
  export type objectType = {
    [key: string]: string | any;
  };

  export const concatObject = (obj: objectType): any => {
    const keyConcat = Object.keys(obj);
    let concatedObject: string = "";
    keyConcat.map((key) => {
      if (typeof obj[key] === "string") {
        concatedObject = concatedObject + key + ": " + obj[key] + ", ";
      } else {
        let keys = Object.keys(obj[key]);
        keys.map((internalKey) => {
          concatedObject =
            concatedObject + internalKey + ": " + obj[key][internalKey] + ", ";
        });
      }
    });
    return concatedObject;
  };
}

const object: MyAssignment.objectType = {
  keerthi: "jangam",
  age: "21",
  address: {
    city: "bangalore",
    dist: "kamareddy",
  },
};

console.log(MyAssignment.concatObject(object).slice(0, -2));
