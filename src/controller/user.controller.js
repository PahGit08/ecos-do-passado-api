const UserService = require("../services/user.service");
const { AppDataSource } = require("../config/data-source");

const userRepository = AppDataSource.getRepository("User");
const service = new UserService(userRepository);


module.exports = {
    createUser: async (request, response) => {
        try {
            const { name, email, password } = request.body;

            const user = await service.create({
                name, email, password,
            })

            return response.json(user)
        } catch (error) {
            return response.status(500).json({ message: error.message });
        }
    },
    login: async (request, response) => {
        try {
            const { email, password } = request.body;

            console.log({ email, password })

            const userData = await service.getUserByEmailAndPassword(
                email, password
            )

            if (!userData) {
                return response.status(401).json({ message: "Invalid credentials" });
            }

            return response.json(userData)
        } catch (error) {
            return response.status(500).json({ message: error.message });
        }
    }
}