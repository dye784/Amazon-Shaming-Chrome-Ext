const total = 0;

window.setTimeout(() => {
	total = +(($("td:contains('Total')").next().next().text()).replace(/[$,]/g, ''));

}, 500);



// function getTotal() {
// 	if (!total) {
// 		window.setTimeout(() => {
// 			total = +($("td:contains('Total')").next().next().text()).replace(/[$,]/g, '');
// 			resolve(total);
// 		}, 500)
// 	}
// }

// while (!total) {
// 	window.setTimeout(() => getTotal(), 500);
// }


// while (!total) {
// 	return new Promise(function(resolve, reject) {
// 		window.setTimeout(() => {
// 			total = +($("td:contains('Total')").next().next().text()).replace(/[$,]/g, '');
// 			resolve(total);
// 		}, 500)
// 	})
// 	.then(() => alert("hey!"));
// 	});
// }


// function findTotal() {
// 	if (!total) {
// 		window.setTimeout(() => {
// 			total = +($("td:contains('Total')").next().next().text()).replace(/[$,]/g, '');
// 		}, 500);
// 		if (!total)
// 	} else {
// 		alert("hey!");
// 	}
// }