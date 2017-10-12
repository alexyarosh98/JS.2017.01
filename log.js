for (var i = 0; i < data.length; i++) {
	console.log("data[%s] = %s", i + 1, checkValue(data[i]));
}

function checkValue(value) {
	
	if (typeof(value) == "number") {
		return value;
	}
	else if (value === null) {
		return "значение не указано"
	}
	else if (typeof(value) == "undefined") {
		return "значение не определено"
	}
	else {
		return "какой-то тип, которго нет в задании"
	}

}