/*
	* range(4); // => [0, 1, 2, 3] 
	* range(-4); // => [0, -1, -2, -3]
	* range(1, 5); // => [1, 2, 3, 4]
	* range(0, 20, 5); // => [0, 5, 10, 15]
	* range(0, -4, -1); // => [0, -1, -2, -3]
	* range(1, 4, 0); // => [1, 1, 1]
	* range(0); // => []
*/

function range(start, end, step) {
	let arg = [...arguments];
	let res = [];
	
	if (arg.length === 1) {
		arg.unshift(0)
		arg.push(1)
	}
	
	if (arg.length === 2) {
		arg.push(1)
	}
	
	let nd = arg[1]
	
	if (arg[1] < 0) {
		nd = arg[1] * -1
	}
	
	let stp = arg[2]
	
	if (arg[2] === 0) {
		stp = 1;
	}
	
	if (stp < 0) {
		for (let i = arg[0]; i > arg[1]; i += stp) {
			arg[2] !== 0 ? res.push(i) : res.push(arg[0]);
		}
	} else {
		for (let i = arg[0]; i < nd; i += stp) {
			if (arg[1] < 0) {
				arg[2] !== 0 ? res.push(-i) : res.push(arg[0]);
			} else {
				arg[2] !== 0 ? res.push(i) : res.push(arg[0]);
			}
		}
	}
	
	return res;
}