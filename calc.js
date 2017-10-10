for (var i = 0; i < data.length; i++) {

		if(data[i]==null || data[i]==undefined ) {
			continue;
		}
		if (data[i]==0) {
			data[i]= parseInt (data[i]) +10;
			continue;
		}
		if (data[i]>100) {
			data[i] =parseInt (data[i])-100;
			continue;
		}
		if (data[i]<100) {
			data[i]= parseInt (data[i])+100;
			continue;
		}
}