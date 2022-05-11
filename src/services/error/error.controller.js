const AppError = require("./error.class");
const errorService = require("./error.service");

module.exports = (err, req, res, next) => {
	const formattedError = errorService(err);

	let response;
	if (formattedError instanceof AppError) {
		response = {
			status: false,
			message: formattedError.message,
		};
	} else {
		response = {
			status: false,
			message: "Something went wrong!",
		};

		// console.error("error", formattedError?.message || formattedError?.body || formattedError?.data?.error || formattedError);
	}

	if (process.env.NODE_ENV.trim() === "development") {
		response.stack = formattedError.stack;
	}

	res.status(formattedError.statusCode || 500).json(response);
};
