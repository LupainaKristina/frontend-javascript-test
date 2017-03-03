"use strict";

	function dscount(str, s1, s2) {

		var count = 0;
		var	pos = str.toLowerCase().indexOf(s1.toLowerCase());

		while ( pos != -1 ) {
			
			pos += 1;
			
			if (pos == str.toLowerCase().indexOf(s2.toLowerCase(), pos)) {
				count++;
			}

			pos = str.toLowerCase().indexOf(s1.toLowerCase(), pos);
		}
		return count;
	}

	alert("Задача 1 - Ответ " + dscount('ab___ab__', 'a', 'b'));