"use strict";

	function parseUrl(str) {

		var url = document.createElement('a');
		url.href = str;
		return url;
	}

	let a = parseUrl('http://tutu.ru:8080/do/any.php?a=1&b[]=a&b[]=b#foo');

	alert("Задача 6 - Ответ " + a.hash);
