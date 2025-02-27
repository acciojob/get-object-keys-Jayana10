//your JS code here. If required.
const student = {
	name:"john",
	age: 30,
    city:"new york"
};

function getKeys(obj) {
	 return Object.keys(obj);
}
const keys = getKeys(myObj);
console.log(getKeys(student));