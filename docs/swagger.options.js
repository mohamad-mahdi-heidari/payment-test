module.exports = {
	swaggerDefinition: {
		info: {
			title: "Payment Test",
			version: "0.0.1",
		},
		securityDefinitions: {
			authorization: {
				name: "x-auth-token",
				type: "apiKey",
				in: "header",
			},
		},
		host: "",
		basePath: "/",
	},
	apis: ["./routes/api/*.route.js"],
};
