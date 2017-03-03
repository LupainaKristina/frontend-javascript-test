"use strict";

	function newDrawRating(vote) {
		
		if(vote != 0) {
			var value = Math.ceil(vote/20);
		}
		else {
			value = 1;
		}
		return Array(value+1).join("★") + Array(6-value).join("☆");
	}

	alert("Задача 5 - Ответ " + newDrawRating(45));