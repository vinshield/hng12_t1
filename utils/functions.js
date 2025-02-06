const isPrime = (num) => {
	if (num <= 1) return false;
	if (num <= 3) return true;

	if (num % 2 === 0 || num % 3 === 0) return false;

	const sqrtNum = Math.sqrt(num);

	for (let i = 3; i <= sqrtNum; i += 2) {
		if (num % i === 0) {
			return false; // Found a divisor, not a prime
		}
	}

	return true; // No divisors found, number is prime
};

const isPerfect = (num) => {
	if (num <= 1) return false;

	let sum = 1; // 1 is always a divisor
	let sqrt = Math.sqrt(num);

	for (let i = 2; i <= sqrt; i++) {
		if (num % i === 0) {
			sum += i;
			if (i !== num / i) sum += num / i; // Add the paired divisor
		}
	}

	return sum === num;
};

const isArmstrong = (num) => {
	// Convert number to string to easily get digits
	const numStr = num.toString();
	const numDigits = numStr.length;

	// Calculate sum of digits raised to power of number of digits
	const sum = numStr
		.split("")
		.reduce((acc, digit) => acc + Math.pow(parseInt(digit), numDigits), 0);

	// Number is Armstrong if sum equals original number
	return sum === parseInt(num);
};

const isOdd = (num) => {
	return num % 2 !== 0;
};

const digitSum = (num) => {
	const numArray = num.toString().split("");

	const sum = numArray.reduce((acc, cur) => {
		return acc + parseInt(cur);
	}, 0);

	return sum;
};

const getFunFact = async (num) => {
	const res = await fetch(`http://numbersapi.com/${num}/math`);
	return res.text();
};

const getInfo = async (num) => {
	const prime = isPrime(num);
	const perfect = isPerfect(num);
	const armstrong = isArmstrong(num);
	const odd = isOdd(num);
	const sum = digitSum(num);
	const funFact = await getFunFact(num);

	let properties = [];

	if (armstrong) properties.push("armstrong");

	properties.push(odd ? "odd" : "even");

	const res = {
		number: num,
		is_prime: prime,
		is_perfect: perfect,
		properties: properties,
		digit_sum: sum,
		funFact: funFact,
	};

	return res;
};

module.exports = { isPrime, getInfo };
