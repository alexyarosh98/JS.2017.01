for (var i = 0 ; i <data.length; i++) {
	console.log("data[%s] = %s", i+1 , checkValue(data[i]));
}

function checkValue(value) {
	console.log(value)
	if (typeof(value)=="number") {
		return value;
	}
	 if(typeof(value)=="object"){
		return "значение не указано"
	}
	if(typeof(value)=="undefined") {
		return "значение не определено"
	}
}