const express = require("express");
const cors = require("cors");

const { getInfo } = require("./utils/functions");

const app = express();
app.use(cors());

app.get("/api/classify-number", (req, res) => {
	let { number } = req.query;

	number = Math.abs(parseInt(number)); // Convert the number to an integer

	if (!number || isNaN(number)) {
		return res.status(400).json({ number, error: true });
	}

	const getData = async () => {
		try {
			const response = await getInfo(number);
			res.status(200).json(response);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: "internal server error" });
		}
	};
	getData();
});

app.use((req, res) => {
	res.status(404).json({ error: "Route not found" });
});

const port = process.env.PORT || 2000;

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
