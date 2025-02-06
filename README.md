# Number Classification API

This API classifies numbers based on their mathematical properties and provides a fun fact about them.

## Features

- Determines if a number is **prime**.
- Checks if a number is a **perfect number**.
- Identifies if a number is an **Armstrong number**.
- Calculates the **sum of digits**.
- Returns a **fun fact** using [Numbers API](http://numbersapi.com/).

## API Endpoint

### **Classify a Number**

**URL:**  
`GET /api/classify-number?number=<integer>`

**Example Request:**

GET `https://hng12-t1.vercel.app/api/classify-number?number=371`

**Example Response:**

```json
{
	"number": 371,
	"is_prime": false,
	"is_perfect": false,
	"properties": ["armstrong", "odd"],
	"digit_sum": 11,
	"fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

**Error Response (Invalid Input)**
{
"number": "alphabet",
"error": true
}

## How to Run Locally

### 1. Clone the repository:

`git clone https://github.com/vinshield/hng12_t1.git`
`cd classify-number-api`

### 2. Install dependencies:

`npm install`

### 3. Start the server:

`node index.js`

### 4. Visit `http://localhost:3000/api/classify-number?number=371` in your browser

## Live API URL

`https://hng12-t1.vercel.app/`

## Reference

Click the link below to find and hire backend developers.
[Hire Nodejs developers](https://hng.tech/hire/nodejs-developers)
