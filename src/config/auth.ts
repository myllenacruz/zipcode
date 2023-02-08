export default {
	jwt: {
		secret: process.env.APP_SECRET || "default",
		expiresIn: 12 * 60 * 60
	}
};