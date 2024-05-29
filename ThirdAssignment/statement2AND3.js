// statement 2 : Write a function to take object as parameter (both keys and values are string) and return concat all keys along with values
// Ex Input: {
//   name: "User",
//   email: "user@gmail.com"
// }
// Output: "name: User, email: user@gmail.com"
var Util;
(function (Util) {
    Util.concatObject = function (obj) {
        var keyConcat = Object.keys(obj);
        var concatedObject = "";
        keyConcat.map(function (key) {
            if (typeof obj[key] === "string") {
                concatedObject = concatedObject + key + ": " + obj[key] + ", ";
            }
            else {
                var keys = Object.keys(obj[key]);
                keys.map(function (internalKey) {
                    concatedObject =
                        concatedObject + internalKey + ": " + obj[key][internalKey] + ", ";
                });
            }
        });
        return concatedObject;
    };
})(Util || (Util = {}));
var object = {
    keerthi: "jangam",
    age: "21",
    address: {
        city: "bangalore",
        dist: "kamareddy",
    },
};
console.log(Util.concatObject(object).slice(0, -2));
