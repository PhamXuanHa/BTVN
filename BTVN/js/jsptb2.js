document.getElementById('ok').addEventListener('click', function(){
	let btcq=/\d{1,}/;
	let a = document.getElementById('SoA').value;
	let b = document.getElementById('SoB').value;
	let c = document.getElementById('SoC').value;
	console.log(`${a},${b},${c}`);
	let checkSoA = null;
	let checkSoB = null;
	let checkSoC = null;
	if (btcq.test(b)){
		//neu thoa man bieu thuc chinh quy
		let checkSoB = true;
		document.getElementById('SoB').style.border = '1px solid #ccc';
		console.log(checkSoB);

	}else {
		let checkSoB = false;
		document.getElementById('SoB').style.border = '2px solid red';
		console.log(checkSoB);
	}
	if (btcq.test(a)) {
		//neu thoa man bieu thuc chinh quy
		let checkSoA = true;
		console.log(checkSoA);
		document.getElementById('SoA').style.border = '1px solid #ccc';

	}else {
		let checkSoA = false;
		document.getElementById('SoA').style.border = '2px solid red';
		console.log(checkSoA);
	}
	if (btcq.test(c)) {
		//neu thoa man bieu thuc chinh quy
		let checkSoC = true;
		console.log(checkSoC);
		document.getElementById('SoC').style.border = '1px solid #ccc';

	}else {
		let checkSoC = false;
		document.getElementById('SoC').style.border = '2px solid red';
		console.log(checkSoC);
	}
	if(checkSoA && checkSoB && checkSoC){
		console.log('ok')
	}else {
		console.log('khong ok')
	}
})
// if (delta < 0){
//             return false;
//         } else if(delta == 0){
//             return -this.y/(2*this.x);
//         } else {
//             let x= (-(this.y) - Math.sqrt(delta)) / (2*this.x);
//             let y = (-(this.y) + Math.sqrt(delta)) / (2*this.x);
//             return "x = " + x + " y= " + y;
//         }
