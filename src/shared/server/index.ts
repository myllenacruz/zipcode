import { server } from "@shared/server/app";

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
	console.info(`Server is running on port ${PORT}`);
});