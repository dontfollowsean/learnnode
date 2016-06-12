//console.log(process.argv);
var addends  = process.argv.slice(2);

//console.log(addends);

var sum = 0;

addends.forEach((num) => {
	sum += parseInt(num, 10);
});

console.log(sum);

