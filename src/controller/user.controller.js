const UserService = require("../services/user.service");
const { AppDataSource } = require("../config/data-source");

const userRepository = AppDataSource.getRepository("User");
const service = new UserService(userRepository);

module.exports = {
    createUser: async (request, response) =>{
        try {
            const { name, email, password } = request.body;

            const user = await service.create({
                name, email, password,
            })

            return response.json(user)
        } catch (error) {
            return response.status(500).json({ message: error.message });
        }
    }
}