//your JS code here. If required.
const student = {
	name:"john",
	age: 30,
    city:"new york"
};

Object.prototype.getKeys = function(){
	return Object.getKeys(this);
}
console.log(student.getKeys();