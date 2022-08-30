//6. Filter array [1,6,7,8,3,4,5,6] by value> 3

let array = [1,6,7,8,3,4,5,6]
let result = array.filter(function(elem) {
	if (elem > 3) {
		return true
	} else {
		return false
	}
})
console.log(result)